import axios from '../utils/axios'

class User {
    userlist(){
        let url = '/hema/user/'
        return axios.post(url)
    }
    findUser(_id){
        let url = '/hema/user/findone'
        return axios.post(url,_id)
    }
}


export default new User()