import React from 'react'
import { Card ,Input, Button, Table ,Spin} from 'antd'
import { SearchOutlined} from '@ant-design/icons'
import userApi from '../../api/user'
class User extends React.Component{
    state={
        spinning:false,
        dataSource:[],
        columns:[
            {
                title: '_id',
                dataIndex: '_id',
                key: '_id',
              },
              {
                title: '用户名',
                dataIndex: 'userName',
                key: 'userName',
              },
              {
                title:"状态",
                key:'action',
                render:(recode)=>{

                }
              }
        ]
    }
    findUser = async ()=>{
        this.setState({flag:true})
        let _id = this.refs.id.input.value
        let user = this.refs.user.input.value
        if(_id){
            // this.setState({spinning:true})
           let result= await userApi.findUser({_id})
           console.log(result)
            this.setState({dataSource:result.data.user})
        
        }else if(user){
            console.log(user)
        }
    }
    getUserList= async ()=>{
        this.setState({spinning:true,flag:false})
        let result =await userApi.userlist()
        this.setState({dataSource:result.data.userlist,spinning:false})
        
    }
     componentDidMount(){
         
        this.getUserList()
        // console.log(result)
      
    }
    render(){
        let {dataSource,columns,spinning,} = this.state
        return(
            <div>
                <Spin spinning={spinning}>
                <Card title='用户管理界面'>
                 <div style={{display:'flex',marginBottom:10}}>
                 <Input ref='id' style={{width:350,marginRight:20}} addonBefore="用户id"  placeholder='请输入用户id' /> <Input ref='user' style={{width:350,marginRight:20}} addonBefore="用户名"  placeholder='请输入用户名' />
                 <Button style={{borderRadius:5}} type='primary' icon={<SearchOutlined />} onClick={()=>{
                     this.findUser()
                 }}>查询</Button>
                 </div>
                 <Table dataSource={dataSource} columns={columns} rowKey='_id'>

                 </Table>
                </Card>
                </Spin>
            </div>
        )
    }
}

export default User