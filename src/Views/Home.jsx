import React, { Component } from 'react'
import MainLayout from './Layouts/MainLayout';

export default class Home extends Component {
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {
            home: 'Home'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount(){
        console.log('component will mount')
    }
    componentDidMount(){
        console.log('component did mount')
    }
    componentWillUpdate(){
        console.log('component will update')
    }
    componentDidUpdate(){
        console.log('component did update')
    }
    componentWillReceiveProps(){
        console.log('component will receive props')
    }
    componentWillUnmount(){
        console.log('component will unmount')
    }
    componentDidCatch(){
        console.log('component did catch');
    }
    handleClick(){
        console.log('handle Click')
        this.setState({
            home:'Hello Home'
        })
    }

    render() {
        console.log('render');
        return (
            <MainLayout data ="hello">
                <h1>{this.state.home}</h1>
                <button onClick={this.handleClick}>Change State</button>
            </MainLayout>
        )
    }
}
