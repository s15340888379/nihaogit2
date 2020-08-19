import request from '../../utils/requre';

export let login = (user_name: string,user_pwd: string) => {
    return request.post('/user/login',{user_name,user_pwd})
}

export let useInfo =() => {
    return request.get('/user/userInfo')
}
