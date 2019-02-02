import http from '../util/http'
import $utils from "../util/utils";
import {TableOptionController} from "./index";

class TableOption {

    queryPage = null
    param = null
    page = 1
    pageSize = 10
    sortField = 'createdAt'
    sortDesc = true
    indexing = true
    multiSelect = false
    filters = []

    parentOption = null
    parentMap = null

    list = []

    table = null
    selectIndex = null
    filter = null
    tableCreated = false

    constructor(option) {
        Object.assign(this, option)
        TableOptionController.add(this)
    }

    /*@formatter:off*/
    get selectRow() {return this.selectIndex == null ? null : this.list[this.selectIndex]}
    _count=0;
    noMore=false;
    get count(){return !!this.noMore?this._count:(this.page*this.pageSize+1)}
    /*@formatter:on*/

    get _parentQueryParam() {
        const ret = []
        if (!this.parentMap || !this.parentOption || !this.parentOption.selectRow) return ret
        Object.keys(this.parentMap).forEach(key => {
            ret.push({
                field: key,
                value: this.parentOption.selectRow[this.parentMap[key]]
            })
        })
        return ret
    }

    get _targetParam() {
        let filters = []
        !!this.filters && this.filters.length > 0 && (filters = filters.concat(this.filters))
        !!this.filter && (filters = filters.concat($utils.typeOf(this.filter) === 'array' ? this.filter : [this.filter]))
        const parentFilter = this._parentQueryParam
        filters = filters.concat(parentFilter)
        return filters
    }

    async load() {
        const query = {
            page: this.page,
            pageSize: this.pageSize,
            orders: [{field: this.sortField, desc: this.sortDesc}],
        }
        query.filters = this._targetParam
        const {ret} = await http.post(this.queryPage, Object.assign({}, this.param, {query}))
        if (ret.length < this.pageSize) {
            this.noMore = true
            this._count = (this.page - 1) * this.pageSize + ret.length
        }

        this.list = ret
        if (this.list.length > 0) this.table.setCurrentRow(this.list[0])
        this.p_informChildReload()

        return ret
    }

    p_informChildReload() {
        if (!this.selectRow) return
        const options = TableOptionController.getChildOptions(this)
        options.forEach(option => {
            !!option.tableCreated && option.reload()
        })
    }

    async reload() {
        this.page = 1
        this._count = 0
        this.noMore = false
        const ret = await this.load()
        return ret
    }

}

export default TableOption