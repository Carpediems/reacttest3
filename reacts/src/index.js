import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from '@material-ui/core/Button';   // 导入Button组件
import Clock from "./Clock";
// function Clock(propes){
//     return(
//         <div>
//             <span>现在是</span>
//             <div>{propes.data.toLocaleTimeString()}</div>
//         </div>
//     )
// }
// function tick(){
//     ReactDOM.render(
//         <Clock data={new Date()}/>,
//         document.getElementById('root')
//     )
// }
// setInterval(tick,1000)
reportWebVitals();


// class Clock extends React.Component{
//     render(){
//         return(
//             <div>
//                 <span>北京时间</span>
//                 <div>{this.props.data.toLocaleTimeString()}</div>
//             </div>
//         )
//     }
// }
// function tick(){
//     ReactDOM.render(
//         <Clock data={new Date()}></Clock>,
//         document.getElementById('root')
//     )
// }
// setInterval(tick,1000)

// React组件

// 封装一个helloMessage无参的组件
// function HelloMessage(){
//     return <h1>hello world</h1>
// }
// const element=<HelloMessage />
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )

// function HelloMessage(propes){
//     return <h1>hello world {propes.name}</h1>
// }
// const element=<HelloMessage name="你好"/>
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )

// 复合组件
// function Name(propes){
//     return <h1>Name:{propes.name}</h1>
// }
// function Url(propes){
//     return <h1>Url:{propes.url}</h1>
// }
// function Apps(){
//     return (
//         <div>
//             <Name name="菜鸟教程"></Name>
//             <Url url="www.cainiao.com"></Url>
//         </div>
//     );
// }
// ReactDOM.render(
//     <Apps></Apps>,
//     document.getElementById('root')
// )


// @material-UI
// function Apps(){
//     return(
//         <Button variant='contained' color='primary'>按钮</Button>
//     );
// }
// ReactDOM.render(
//     <Apps></Apps>,
//     document.getElementById('root')
// )
//
// ReactDOM.render(
//     <Clock></Clock>,
//     document.getElementById('root')
// )


//props
// function Tprops(props){
//     return(
//         <div>
//             <h1>{props.name}</h1>
//         </div>
//     )
// }
// const element=<Tprops name='roobt'></Tprops>
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )

// defaultprops默认属性
// export default class DefaultApp extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>{this.props.name}</h1>
//             </div>
//         )
//     }
// }
// DefaultApp.defaultProps={
//     name:'世界'
// }
// const element=<DefaultApp></DefaultApp>
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )

// state与props
export default class Name extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}
export default class url extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.url}</h2>
            </div>
        )
    }
}

export default class Stateprops extends React.Component{
    constructor(){
        super();
        this.state={
            name:'菜鸟',
            url:'www.cainiao'
        }
    }
    render(){
        return(
            <div>
                <Name name={this.state.name}></Name>
                <url url={this.state.url}></url>
            </div>
        );
    }
}

