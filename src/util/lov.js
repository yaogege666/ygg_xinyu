import $utils from './utils'
import $http from './http'

export default {
    data: {},
    async getLovByType(type) {
        if (!type) {
            console.log('值列表类型不能为空！')
            return
        }
        return this.data[type] || await this.queryLovByType(type)
    },
    async queryLovByType(type) {
        if (this.data[type] === null) {
            /*this.data[type]===null，表明已经开启请求改该类型的值列表，只需要等待即可，每50ms检查请求是否完成*/
            while (!this.data[type]) {
                await $utils.delay(50)
            }
            return this.data[type]
        } else {
            /*this.data[type]===undefined，表明该类型没有请求过，重新请求该类型的值列表*/

            /*设置this.data[type]，告诉其他调用方法，这个类型的值列表已经开始请求，无需开启新的请求*/
            this.data[type] = null
            const url = 'lov/queryAll'
            const param = {query: {filters: [{field: 'type', value: type}]}}
            const data = await $http.post(url, param)

            if (!data.ret || data.ret.length === 0) {
                console.warn(`查询不到类型为[${type}]的值列表`)
                return []
            }
            this.data[type] = data.ret
            return this.data[type]
        }
    },
}