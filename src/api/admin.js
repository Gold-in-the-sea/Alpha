import axios from '../utils/axios'

class Admin {
    adminList(){
        let url = 'http://localhost:3000/user'
        return axios.post(url)
    }
}



export default new Admin()