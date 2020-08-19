import Cookie from 'js-cookie'

const key = 'authorization'

export let getToken = () => {
    return Cookie.get(key)
}

export let setToken = (value: string) => {
    return Cookie.set(key,value,{expires:new Date(+new Date() + 5*3600*1000)})
    // return Cookie.set(key, value, {expires:5} )
}

export let removeToken = () => {
    return Cookie.remove(key)
}
