import axios from '../utils/axios'

class Admin {
    
    adminList(){
       let url = '/hema/admin'
       return axios.post(url)
    }
    adminLogin(adminName,passWord){
        let url ='/hema/admin/login'
        return axios.post(url,{adminName,passWord})
    }
    //删除
    adminDel(_id){
        let url = '/hema/admin/del'
        return axios.post(url,{_id})
    }
    //添加
    adminAdd(adminName,passWord){
        let url = '/hema/admin/add'
        return axios.post(url,{adminName,passWord})
    }
}



export default new Admin()