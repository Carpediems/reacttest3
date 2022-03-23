import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import Clock from './State';
import {
    Props,
    PropsDefault,
    Name,
    Url,
    MyTitle
} from "./props";
import  PropTypes  from  'prop-types'
// 第三方组件

// state 状态
const element=<Clock />
ReactDOM.render(
    element,
    document.getElementById('root')
)

// props
const props=<Props name='roob'></Props>
ReactDOM.render(
    props,
    document.getElementById('root')
)

//默认props
PropsDefault.defaultProps={
    name:'11111'
}
const propsDefault=<PropsDefault></PropsDefault>
ReactDOM.render(
    propsDefault,
    document.getElementById('root')
)

class NameUrl extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Name:'菜鸟教程',
            Url:'www.cainiaojiaochen.com'
        }
    }
    render(){
        return(
            <div>
                <Name Name={this.state.Name}></Name>
                <Url Url={this.state.Url}></Url>
            </div>
        )
    }
}
const Name_Url_type=<NameUrl />
ReactDOM.render(
    Name_Url_type,
    document.getElementById('root')
)
// Props 验证
const title=123
MyTitle.propTypes ={
    title:PropTypes.string
}
ReactDOM.render(
    <MyTitle title={title}></MyTitle>,
    document.getElementById('root')
)

