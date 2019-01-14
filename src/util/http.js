const fly = require("flyio")
import env from './env';

const http = {
    async get(url, param) {
        const {data} = await fly.get(env.ip + '/' + url, param);
        return data;
    },
    async post(url, param = {}) {
        const {data} = await fly.post(env.ip + '/' + url, param);
        return data;
    },
};

export default http;
