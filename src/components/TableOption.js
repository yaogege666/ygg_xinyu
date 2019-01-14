import http from '../util/http'

class TableOption {

    queryPage = null
    param = null
    page = 1
    pageSize = 10

    list = []

    constructor(option) {
        Object.assign(this, option)
    }

    async load() {
        const {ret} = await http.post(this.queryPage, Object.assign({}, this.param, {
            query: {
                page: this.page,
                pageSize: this.pageSize
            }
        }))
        this.list = ret
        return ret
    }

    async reload() {
        this.page = 1
        return await this.load()
    }

}

export default TableOption