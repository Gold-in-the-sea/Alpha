import React from 'react'
import { Layout } from 'antd'
import style from './index.module.less'
import CustomNav from '../../components/CoustomNav'

  const { Header, Content, Footer, Sider } = Layout;
class Admin extends React.Component{
    state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    render(){
        return(
            <div>
                <Layout style={{ minHeight: '100vh' }}>
        <Sider >
          <div className={style['logo']}>
              <h1 className={style['h1']}>盒马</h1>
          </div>
            <CustomNav></CustomNav> 
        </Sider>
        <Layout >
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content >

            {/* 获取子组件的内容 */}
           {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
            </div>
        )
    }
}

export default Admin