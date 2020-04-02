import React from 'react'
import { Form, Input, Button, Checkbox ,message} from 'antd';
import style from './index.module.less'
import adminApi from '../../api/admin'
class Login extends React.Component {

    onFinish = async (values) => {
        // console.log(values)
        // 将用户名和密码解构
        let {username,password} = values
        let result = await adminApi.adminLogin(username,password)
        console.log(result)
        //登录成功后跳转
        if(result.data.code===0){
            message.success('登录成功，2s后跳转',2,()=>{
                this.props.history.replace('/admin')
            })
        }else{
            message.error('账号或密码错误请重新检查')
        }
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render() {

        return (
            <div className={style['login-box']}>
                <Form className={style['login-form']}
           
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="账号"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入账号',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item style={{marginBottom:40}}
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item style={{marginBottom:0,float:"left"}} name="remember" valuePropName="checked">
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item style={{float:"right"}}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default Login