import React, { Component } from 'react';
import { Card, message, Table, Button, Pagination, Popconfirm } from 'antd';
import goodsApi from '../../../api/goods'
import style from './index.module.less';
class Goods extends Component {
    state = {
        page: 1,
        pageSize: 2,
        list: [],
        allcount: 0,
        columns: [
            { title: '_id', dataIndex: '_id', key: '_id', width: '120', fixed: 'left' },
            { title: '价格', dataIndex: 'price', key: 'price', width: '120' },
            { title: '名称', dataIndex: 'name', key: 'name', width: '120' },
            {
                title: '图片', dataIndex: 'img', key: 'img', width: '160', render(img) {
                    return (<img width='150' height='80' src={img} />)
                }
            },
            { title: '描述', dataIndex: 'desc', key: 'desc', width: '120' },
            { title: '种类', dataIndex: 'shopType', key: 'shopType', width: '120' },
            {
                title: '操作', key: 'action', width: '120', fixed: 'right', render: (recode) => {
                    return (
                        <div>
                            <Popconfirm title='你确定删除该商品吗？'
                                onConfirm={() => {
                                    this.delGoods(recode._id)
                                }}
                            >

                                <Button type='danger' size='small'>删除</Button>
                            </Popconfirm>
                            <Button type='primary' size='small'>修改</Button>
                        </div>
                    )
                }
            }
        ]
    }
    componentDidMount() {
        this.getListData()
    }
    //删除商品
    delGoods = async (_id) => {
        let {err,msg} = await goodsApi.del(_id)
        if(err){
            return message.error(msg)
        }
       this.getListData()
    }
    getListData = async () => {
        let { page, pageSize } = this.state
        let { err, msg, list, allCount } = await goodsApi.list(page, pageSize)
        if (err !== 0) { return message.error(msg) }
        this.setState({ list, allCount })
    }
    render() {
        let { list, columns, allCount, pageSize, page } = this.state
        console.log({ list })
        return (
            <div className={style.box}>
                <Card title='商品列表' className={style.card}>
                    <Button type='primary' onClick={()=>{
                        this.props.history.push('/admin/goodsadd')
                    }

                    } >商品添加</Button>
                    <Table scroll={{ y: 300, x: 840 }}
                        pagination={false}
                        columns={columns}
                        dataSource={list}
                        rowKey='_id'>

                    </Table>
                    <Pagination current={page} total={allCount} showQuickJumper pageSize={pageSize}
                        onChange={(page, pageSize) => {
                            console.log(page)
                            this.setState({ page }, () => {
                                this.getListData()
                            })
                        }}
                    />

                </Card>
            </div>
        )
    }
}


export default Goods