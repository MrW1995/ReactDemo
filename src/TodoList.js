import React, { Component } from 'react';

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = this.setState({
            count:0
        })
    }

    render(){
        return(
            <div>hello world</div>
        )
    }
}

export default TodoList