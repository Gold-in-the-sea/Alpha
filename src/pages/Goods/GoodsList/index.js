import React, { Component } from 'react';
import { Card, message,  Table } from 'antd';
import goodsApi from '../../../api/goods'
import style from './index.module.less';
class Goods extends Component {
    state = {
        page: 1,
        pageSize: 2,
        list: [],
        allcount: 0,
        columns:[
            {title:'_id',dataIndex:'_id',key:'_id'},
            {title:'价格',dataIndex:'price',key:'price'},
            {title:'名称',dataIndex:'name',key:'name'},
            {title:'图片',dataIndex:'img',key:'img',render(img){
                return(<img src={img}/>)
            }},
            {title:'描述',dataIndex:'desc',key:'desc'},
            {title:'种类',dataIndex:'shopType',key:'shopType'},
        
        ]
    }
    componentDidMount() {
        this.getListData()
    }
    getListData = async () => {
        let { page, pageSize } = this.state
        let { err, msg, list, allCount } = await goodsApi.list()
        if (err !== 0) { return message.error(msg) }
        this.setState({ list, allCount })
    }
    render() {
        let {list,columns}=this.state
        console.log({list},this.state)
        return (
            <div className={style.box}>
                <Card title='商品列表' className={style.card}>
                    <Table columns={columns} dataSource={list} rowKey='_id'></Table>

                </Card>
            </div>
        )
    }
}


export default Goods