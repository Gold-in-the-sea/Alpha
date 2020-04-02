import React, { Component } from 'react';
import { Card } from 'antd';
import goodsApi from '../../../api/goods'
import style from './index.module.less';
class Goods extends Component {
    state = {
        page: 1,
        pageSize: 2
    }
    componentDidMount(){
        this.getListData()
    }
    getListData = async () => {
        let { page, pageSize } = this.state
        let result = await goodsApi.list(page, pageSize)
        console.log(result)
    }
    render() {
        return (
            <div className={style.box}>
                <Card title='商品列表' className={style.card}>


                </Card>
            </div>
        )
    }
}


export default Goods