import axios from '../utils/axios'
class Goods {
    list(page=1,pageSize=2 ){
        // http://localhost:3000/shop/getInfos
        let url ='/hema/shop/getInfos'
        return axios.post(url,{page,pageSize})
    }
} 

export default new Goods()