import React, { Component } from 'react'
import MainLayout from './Layouts/MainLayout';
import {Form, Input, Icon, Button } from 'antd'
import Axios from 'axios';
const { TextArea } = Input;

class NewBlog extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            // console.log('Received values of form: ', values);
            Axios.post('/blogs',values)
            .then(data => {
                if(data.status === 201){
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
