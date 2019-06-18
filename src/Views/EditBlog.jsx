import React, { Component } from 'react'
import MainLayout from './Layouts/MainLayout';
import {Form, Input, Icon, Button } from 'antd'
import Axios from 'axios';
const { TextArea } = Input;

class NewBlog extends Component {
    state = {
        title: '',
        image: '',
        desc: ''
    }
    componentDidMount(){
        this.props.form.setFieldsValue(this.state)
        Axios.get('/blogs/'+this.props.match.params.id)
        .then(data => {
            let {title, image, desc} = data.data
            this.setState({
                title,
                image,
                desc
            })
            this.props.form.setFieldsValue({
                title, 
                image,
                desc
            })
        })
        
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            // console.log('Received values of form: ', values);
            Axios.put('/blogs/'+this.props.match.params.id ,values)
            .then(data => {
                if(data.status === 200){
                    this.props.history.push('/blogs')
                }
            })
            .catch(err => {
                console.log(err.response.status)
            })
          }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        let {title, image, desc} = this.state
        return (
            <MainLayout>
                <div style={{margin: 'auto', paddingTop: 60, width: '60%'}}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('title', {
                            rules: [{ required: true,  message: 'Please input your title' }],
                        })(
                            <Input
                            type="text"
                            prefix={<Icon type="font-size" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Title"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('image', {
                            rules: [{ message: 'Please input source of your Image!' }],
                        })(
                            <Input
                            prefix={<Icon type="file-image" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="text"
                            placeholder="Image"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('desc', {
                            rules: [{required: true, message: 'Please enter description'}],
                        })(
                            <TextArea rows={4} placeholder="Enter description"/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                </div>
            </MainLayout>
        )
    }
}

const postForm = Form.create({ name: 'normal_login' })(NewBlog);

export default postForm
