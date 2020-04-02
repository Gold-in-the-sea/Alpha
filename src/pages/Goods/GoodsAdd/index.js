import React, { Component } from 'react';
import style from './index.module.less'
import { Card } from 'antd'


class GoodsAdd extends Component {
    state = {
        "name": "默认名字",
        "price": "0",
        "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585821266559&di=c307f27fba1d03ce29ba4b8e5b15e59a&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2F2c%2Fcz%2FQJ6607510779.jpg",
        "desc": "超好吃",
        "shopType": "小吃",
    }
    render() {
        let { name, price, img, desc, shopType } = this.state
        return (
            <div className={style.box}>
                <Card title='商品添加'>
                    名称:<input type='text' value={name} onChange={(e) => {
                        this.setState({ name: e.target.value })
                    }} /><br />
                    价格:<input type='text' value={price} onChange={(e) => {
                        this.setState({ price: e.target.value })
                    }} /><br />
                     描述:<input type='text' value={desc} onChange={(e) => {
                        this.setState({ desc: e.target.value })
                    }} /><br />
                     图片:<input type='text' value={img} onChange={(e) => {
                        this.setState({ img: e.target.value })
                    }} /><br />
                     种类:<input type='text' value={shopType} onChange={(e) => {
                        this.setState({ shopType: e.target.value })
                    }} /><br />
                    <button onClick={() => {
                        console.log(this.state)
                    }}>提交</button>
                </Card>
            </div>
        )

    }
}

export default GoodsAdd