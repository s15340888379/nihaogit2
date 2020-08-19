import { action, observable } from 'mobx'
import { login } from '../../service/index'
import { setToken, removeToken } from '../../utils/index'
import { useHistory } from 'react-router-dom'
class User {
    @observable
    isLogin: boolean = false

    @action 
    async login(user_name: string,user_pwd: string) {
        let result = await login(user_name,user_pwd)
        if(result.data.code === 1) {
            setToken(result.data.token)
            this.isLogin = true
        }   
        return result
    }

    async outLogin() {
        let history = useHistory();
        removeToken()
        this.isLogin = false;
        history.replace('/user/login')

    }


}
export default User;