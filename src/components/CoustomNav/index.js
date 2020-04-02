import React from 'react'
import {withRouter} from 'react-router-dom'
import menulist from './menulist'
import {Menu} from 'antd'
import {
    TeamOutlined,
    UserOutlined,
    ShoppingOutlined,
    SettingFilled,
    AreaChartOutlined,
    FileSearchOutlined,
    RadarChartOutlined
  } from '@ant-design/icons'
const {SubMenu} = Menu

function jump(e){
    let {path} = e.item.props
    this.props.history.replace(path)
}
class Customnav extends React.Component{ 


    renderIcon(icon){
        switch (icon) {
          case 'goods':
            return <ShoppingOutlined />
          case 'set':
            return <SettingFilled/>
          case 'user':
            return <UserOutlined/>
            case 'administrator':
                return <TeamOutlined />
            case 'echarts':
            return <AreaChartOutlined />
            case 'order' :
            return <FileSearchOutlined />
       
        }
      }
    renderItem(data){
        return data.map((item,index)=>{
            if(item.children){
                return(
                    <SubMenu key={item.key} title={(()=>{
                        return(
                        <span>{this.renderIcon(item.icon)}{item.title}</span>
                        )
                    })()}>
                        {this.renderItem(item.children)}
                    </SubMenu>
                )
            }else{
                return(
                    <Menu.Item key={item.key} path= {item.path}>
                        {this.renderIcon(item.icon)}
                        {item.title}
                    </Menu.Item>
                )
            }
        })
    }
    render(){
        return(
            <Menu onClick={jump.bind(this)} 
            mode="vertical"
            theme='dark'
            defaultSelectedKeys={['1']}
            mode='inline'>
                {this.renderItem(menulist)}
            </Menu>
        )
    }
}

export default withRouter(Customnav)