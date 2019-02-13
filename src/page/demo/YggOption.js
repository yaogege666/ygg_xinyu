import http from 'src/util/http'

class YggOption {
    list = []
    queryPage = null

    constructor(option) {
        Object.assign(this, option)
    }

    async load() {
        const {ret} = await http.post(this.queryPage, {
            query: {
                page: 1,
                pageSize: 5
            }
        })
        this.list = ret
    }
}

export default YggOption
