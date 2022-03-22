import React from 'react'

// ES6类创建react组件
export default class State extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render(){
        return(
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        );
    }
}

