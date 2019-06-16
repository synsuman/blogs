import { Row, Col, Card } from 'antd';
import React, { Component } from 'react'
import MainLayout from './Layouts/MainLayout';
import Axios from 'axios'

const {Meta} = Card

export default class Blogs extends Component {
    state ={
        blogs: []
    }
    componentDidMount(){
        Axios.get('https://5d024bd79ce12c0014e0f50b.mockapi.io/api/blogs')
        .then((data) => {
            let latest = data.data.sort((a,b) => {return b.id - a.id});

            let blogs = latest.filter((obj, i) => {
                return i < 3
            })
            this.setState({
                blogs
            })
        })
        .catch(err => {
            console.log(err.response.status);
        })
    }
    render() {
        return (
            <MainLayout>
                <h1>Blogs</h1>
                <Row gutter={24}>
                    {
                        this.state.blogs.map((blog) => {
                            let {id, title, desc, image} = blog;
                            return (
                                <Col key={id} span={8}>
                                    <Card
                                        hoverable
                                        style={{ width: 240 }}

                                        cover={<img alt={"example"+id} src={image}/>}
                                    >
                                        <Meta title={title} description={desc} />
                                    </Card>
                                </Col>

                            )
                        })
                    }
                </Row>
            </MainLayout>
        )
    }
}
