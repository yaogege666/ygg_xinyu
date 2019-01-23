import http from '../util/http'
import $utils from "../util/utils";

class TableOption {

    queryPage = null
    param = null
    page = 1
    pageSize = 10
    sortField = 'createdAt'
    sortDesc = true

    list = []

    table = null
    selectIndex = null
    filter = null

    constructor(option) {
        Object.assign(this, option)
    }

    /*@formatter:off*/
    get selectRow() {return this.selectIndex == null ? null : this.list[this.selectIndex]}
    _count=0;
    noMore=false;
    get count(){return !!this.noMore?this._count:(this.page*this.pageSize+1)}
    /*@formatter:on*/


    async load() {
        const query = {
            page: this.page,
            pageSize: this.pageSize,
            orders: [{field: this.sortField, desc: this.sortDesc}],
        }
        !!this.filter && (query.filters = $utils.typeOf(this.filter) === 'array' ? this.filter : [this.filter])
        const {ret} = await http.post(this.queryPage, Object.assign({}, this.param, {query}))
        if (ret.length < this.pageSize) {
            this.noMore = true
            this._count = (this.page - 1) * this.pageSize + ret.length
        }
        if (ret.length === 0) return

        this.list = ret
        if (this.list.length > 0) this.table.setCurrentRow(this.list[0])
        return ret
    }

    async reload() {
        this.page = 1
        const ret = await this.load()
        return ret
    }

}

export default TableOption