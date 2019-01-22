import http from '../util/http'

class TableOption {

    queryPage = null
    param = null
    page = 1
    pageSize = 10
    sortField = 'createdAt'
    sortDesc = true

    list = []

    table = null

    constructor(option) {
        Object.assign(this, option)
    }

    async load() {
        const {ret} = await http.post(this.queryPage, Object.assign({}, this.param, {
            query: {
                page: this.page,
                pageSize: this.pageSize,
                orders: [{field: this.sortField, desc: this.sortDesc}]
            }
        }))
        this.list = ret
        return ret
    }

    async reload() {
        this.page = 1
        const ret = await this.load()
        if (this.list.length > 0) this.table.setCurrentRow(this.list[0])
        return ret
    }

}

export default TableOption