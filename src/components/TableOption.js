import http from '../util/http'
import $utils from "../util/utils";
import {TableOptionController} from "./index";

class TableOption {

    queryPage = null                    //分页查询地址
    param = null                        //分页查询的参数
    page = 1                            //分页查询当前页
    pageSize = 10                       //分页查询页大小
    sortField = 'createdAt'             //默认排序字段
    sortDesc = true                     //默认排序方式asc|desc
    indexing = true                     //是否需要索引字段
    multiSelect = false                 //是否多选
    filters = []                        //筛选参数数组
    beforeLoad = null                   //请求前钩子函数
    afterLoad = null                    //请求后钩子函数
    parentOption = null                 //父表option
    parentMap = null                    //父表字段映射规则

    list = []                           //当前分页查询缓存数据
    table = null                        //当前使用的表格
    selectIndex = null                  //当前选中行索引
    filter = null                       //筛选组件筛选参数
    tableCreated = false                //表格是否已经创建

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
        !!this.beforeLoad && this.beforeLoad()
        query.filters = this._targetParam
        const param = Object.assign({}, this.param, {query})

        const {ret} = await http.post(this.queryPage, param)
        if (ret.length < this.pageSize) {
            this.noMore = true
            this._count = (this.page - 1) * this.pageSize + ret.length
        }

        this.list = ret
        if (this.list.length > 0) this.table.setCurrentRow(this.list[0])
        this.p_informChildReload()

        !!this.afterLoad && this.afterLoad()

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

    setFilter({field, value, operator = '='}) {
        for (let i = 0; i < this.filters.length; i++) {
            const filter = this.filters[i];
            if (filter.field === field) {
                filter.value = value
                filter.operator = operator
                return
            }
        }
        this.filters.push({field, value, operator})
    }

    removeFilter(field) {
        for (let i = 0; i < this.filters.length; i++) {
            const filter = this.filters[i];
            if (filter.field === field) {
                this.filters.splice(i, 1)
                i--
            }
        }
    }

}

export default TableOption
