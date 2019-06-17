import React, { Component } from 'react'
import MainLayout from './Layouts/MainLayout';
import { Link } from 'react-router-dom';

export default class Detail extends Component {
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {
            home: 'Detail of '+this.props.match.params.id
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
    componentWillReceiveProps(nextProps){
        this.setState({
            home: 'Detail of '+nextProps.match.params.id
        })
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
            home:'Hello Detail of '+this.props.match.params.id
        })
    }

    render() {
        console.log('render');
        return (
            <MainLayout data ="hello">
                <h1>{this.state.home}</h1>
                <button onClick={this.handleClick}>Change State</button>
                <Link to="/blogs/1">Link 1</Link>
                <Link to="/blogs/2">Link 2</Link>
                <Link to="/blogs/3">Link 3</Link>
                <Link to="/blogs/4">Link 4</Link>
            </MainLayout>
        )
    }
}
