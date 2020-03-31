import React, { Component } from 'react';
import {Input, Card ,Table,Button, Popconfirm, message, Spin, Modal} from 'antd';
import { CloseCircleOutlined ,PlusCircleOutlined} from '@ant-design/icons'
import style from './index.module.less'
import adminApi from '../../api/admin'
class Admins extends Component{
    state={
        _id:'',
        flag:true,
        visible:false,
        spinning:false,
        dataSource:[],
        columns : [
            {
              title: '_id',
              dataIndex: '_id',
              key: '_id',
            },
            {
              title: '账号',
              dataIndex: 'adminName',
              key: 'adminName',
            },
            {
              title: '操作',
              key: 'action',
              render:(recode)=>{
                // console.log(recode)
                return(
                    <div>
                        <Popconfirm title='你确定要删除吗？'
                            cancelText="No"
                            onConfirm={()=>{
                                this.adminDel(recode._id)
                                message.success('删除成功，页面刷新中')
                            }}
                            onCancel={()=>{
                                message.error('取消删除')
                            }}
                        >
                        <Button style={{borderRadius:5}} icon={<CloseCircleOutlined />} type='danger' size='small'>删除</Button>
                        </Popconfirm>
                    </div>
                )
              }
            },
        ]
    }
    //删除管理员
    adminDel = async (_id)=>{
      let result = await adminApi.adminDel(_id)

     if(result.data.code!==0){return false}
      this.refreshList()
    }
    //刷新页面
    refreshList = async ()=>{
        this.setState({spinning:true})
        let result = await adminApi.adminList()
        this.setState({dataSource:result.data.adminlist,spinning:false})
    }
   async componentDidMount(){
        this.refreshList()
    }
     //添加管理员
     handleOk = async() => {
              //取得输入框中的账号和密码
       let adminName = this.refs.user.input.value
       let passWord = this.refs.pass.input.value
       console.log(adminName,passWord)
      if(adminName!==''&&passWord!==''&&adminName.length>=3&&passWord.length>=3){
        let result = await  adminApi.adminAdd(adminName,passWord)
        console.log(result)
      if(result.data.code!==0){return message.error('管理员添加失败，请检查网络或者',()=>{
          this.setState({visible:false})
      })}
      message.success('管理员添加成功')
      adminName = ''
      passWord = ''
      this.setState({
        visible: false,
      });
      this.refreshList()
      }else{
          message.error('用户名和密码至少为3位')
      }
      };
      handleCancel = e => {
        // console.log(e);
        this.setState({
          visible: false,
        });
      };
    render(){
        let {dataSource,columns,spinning,visible} = this.state
        return(
            <div>
                <Card title="管理员管理">
                <Button onClick={()=>{
                    this.setState({visible:true})
                }} style={{marginBottom:15,borderRadius:5}} icon={<PlusCircleOutlined />} type='primary' size='small'>添加</Button>
                <Spin spinning={spinning}>
                <Table dataSource={dataSource} columns={columns} rowKey="_id" />
                </Spin>
                </Card>
                <Modal
          title="管理员操作"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <Input className={style['mar']} placeholder="请输入用户名不少于3位" ref='user' />
        <Input.Password placeholder="请输入密码不少于3位" ref='pass' />
        </Modal>
            </div>
        )
    }
}



export default Admins