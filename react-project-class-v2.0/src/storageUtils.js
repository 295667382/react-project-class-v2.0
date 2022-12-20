const USER_KEY='user_key'
export default{
    saveUser(user){
        //console.log('user',user)
        localStorage.setItem(USER_KEY,JSON.stringify(user))
    },
    //获取 USER_KEY
    getUser(user){
        //console.log('user',user)
        return  JSON.parse(localStorage.getItem(USER_KEY) ||'{}')
    },
    removeUser(){
        localStorage.removeItem(USER_KEY)
    }
}