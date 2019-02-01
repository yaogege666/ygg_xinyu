import store from '../store'

export default {
    loginValidTime: 1000 * 60 * 60 * 2,
    // loginValidTime: 1000 * 10,
    async checkLoginValid() {
        const loginTIme = store.getters['user/loginTime']
        if (loginTIme == null || (loginTIme + this.loginValidTime) < new Date().getTime()) {
            window.location.href = './login.html'
            return Promise.reject('invalid login token')
        }
        return Promise.resolve()
    },
}
