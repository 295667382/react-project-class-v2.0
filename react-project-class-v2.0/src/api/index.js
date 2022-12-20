import request from './ajax'
//url = '', method = '', data = {}, headers = {}
export const reqLogin=(username,password)=>{
    return request({url:'/login',method:'POST',data :{username,password},headers:{}})
}
