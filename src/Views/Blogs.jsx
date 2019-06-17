import { Row, Col, Card } from 'antd';
import React, { Component } from 'react'
import MainLayout from './Layouts/MainLayout';
import Axios from 'axios'
import {Link} from 'react-router-dom'

const {Meta} = Card

export default class Blogs extends Component {
    state ={
        blogs: []
    }
    componentDidMount(){
        Axios.get('/blogs')
        .then((data) => {
            // let latest = data.data.sort((a,b) => {return b.id - a.id});

            // let blogs = latest.filter((obj, i) => {
            //     return i < 3
            // })
            let blogs = data.data;
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
                                <Col key={id} span={6}>
                                    <Link to={`/blogs/${id}`}>
                                    
                                        <Card
                                            hoverable

                                            cover={<img alt={"example"+id} src={image}/>}
                                        >
                                            <Meta title={title} description={desc} />
                                        </Card>
                                    </Link>
                                </Col>

                            )
                        })
                    }
                </Row>
            </MainLayout>
        )
    }
}
