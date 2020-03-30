import React, { Component } from 'react';
import { Card ,Table} from 'antd';
import adminApi from '../../api/admin'
class Admins extends Component{
    state={
        dataSource:[],
        columns : [
            {
              title: '_id',
              dataIndex: 'id',
              key: 'id',
            },
            {
              title: '账号',
              dataIndex: 'adminName',
              key: 'adminName',
            },
            {
              title: '操作',
              key: 'action',
            },
        ]
    }
    // componentDidMount(){
    // //   let result =  adminApi.adminList()
    // //   console.log(result)
    // console.log(1)
    // }
    render(){
        let {dataSource,columns} = this.state
        return(
            <div>
                <Card title="管理员管理">
                <Table dataSource={dataSource} columns={columns} />
                </Card>
            </div>
        )
    }
}



export default Admins