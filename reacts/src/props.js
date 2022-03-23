import React from 'react';

export function Props(props){
    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

export class PropsDefault extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}


export class Name extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.Name}</h1>
            </div>
        )
    }
}

export class Url extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.Url}</h1>
            </div>
        )
    }
}


export class MyTitle extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}