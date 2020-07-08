import { oauth } from '@/api'

const auth = {
    methods : {
        getToken () {
            oauth.post('', { username: this.form.email, password: this.form.password }).then (response => {
                console.log('token: ', response)
            })
        }
    }
}

export default auth;