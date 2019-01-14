const fly = require("flyio")

const http = {
    get(url, param) {
        return fly.get(url, param)
    },
    post(url, param) {
        return fly.post(url, param)
    },
}

export default http