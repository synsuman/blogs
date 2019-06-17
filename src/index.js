import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.css';

import axios from 'axios'

axios.defaults.baseURL = 'https://5d024bd79ce12c0014e0f50b.mockapi.io/api';

ReactDOM.render(<App/>, document.getElementById('root'))