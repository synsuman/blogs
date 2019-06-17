import React, { Component } from 'react'
import MainLayout from './Layouts/MainLayout';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { Button } from 'antd';
import NotFound from './NotFound'

export default class Detail extends Component {
    state ={
        blog : {
            title: '',
            image: '',
            desc: ''
        },
        error: false
    }
    componentDidMount(){
        Axios.get(`/blogs/${this.props.match.params.id}`)
        .then(data => {
            this.setState({
                blog: data.data
            })
        })
        .catch(error =>{
            if(error.response.status === 404){
                this.setState({
                    error: true
                })
            }
        })
    }
    componentWillReceiveProps(nextProps){
        Axios.get(`/blogs/${nextProps.match.params.id}`)
        .then(data => {
            this.setState({
                blog: data.data
            })
        }) 
        .catch(error =>{
            if(error.response.status === 404){
                this.setState({
                    error: true
                })
            }
        }) 
    }
    handleDelete = id => {
        Axios.delete(`/blogs/${id}`)
        .then(data => {
            this.props.history.push('/blogs')
        })
    }
    render(){
        let {title, desc, image} = this.state.blog
        let prev = this.props.match.params.id - 1;
        let next = prev + 2;
        console.log(prev, next)
        if (this.state.error) return <NotFound/>
        return(
            <MainLayout>
                <h1>{title}</h1>
                <img src={image} alt={title}/>
                <p>{desc}</p>
                <Button type="danger" onClick={ () => this.handleDelete(this.props.match.params.id)}>Delete</Button>
                <br/>
                <br/>
                <p>Similar Blogs</p>
                <ul>
                    <li><Link to = {`/blogs/${prev}`}>Link {prev}</Link></li>
                    <li><Link to = {`/blogs/${next}`}>Link {next}</Link></li>
                </ul>
            </MainLayout>
        )
    }
}
