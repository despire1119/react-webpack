import React, {Component} from 'react'
import {render} from 'react-dom'
import {connect} from 'react-redux'
// import '../assets/sass/greeter.scss'

class Activity extends Component{
    render() {
        return (
            <div>
                我是活动
            </div>
        );
    }
}

export default connect()(Activity)
