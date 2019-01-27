import YObjectDialog from './y-object-dialog'

class ObjectService {
    Vue;
    ins;

    get instance() {
        if (!this.ins) this.ins = this.newInstance()
        return this.ins
    }

    constructor(Vue) {
        this.Vue = Vue
    }


    newInstance() {
        const instance = new this.Vue(YObjectDialog).$mount()
        document.body.appendChild(instance.$el)
        return instance
    }

    pick({option, confirm, cancel}) {
        this.instance.initialized = false
        this.Vue.prototype.$nextTick(async () => {
            Object.assign(this.instance, {option, confirm, cancel})
            this.instance.initialized = true
            option.reload()
            this.instance.show()
        })
    }
}

export default ObjectService