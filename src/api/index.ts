import http from 'utils/http'
import URL from './const'

export default {
    login(params: any) {
        return http.post(URL.FZ_USER_LOGIN, params)
    }
}
