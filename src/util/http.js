const fly = require("flyio")
import env from './env';
import {MessageBox} from 'element-ui'

const http = {
    async get(url, param) {
        return this.request(url, param, 'get')
    },
    async post(url, param = {}) {
        return this.request(url, param, 'post')
    },
    async request(url, param, method) {
        const {data} = await fly[method](`${env.ip}/${url}`, param)
        const {ret, code} = data
        if (code !== 0) {
            MessageBox.alert(ret)
            return Promise.reject(ret)
        }
        return data
    }
};

export default http;
