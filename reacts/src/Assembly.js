import React from 'react';
import ReactDOM from 'react-dom'

//函数式组件
// function message(){
//     return(
//         <div>
//             <h1>hello world</h1>
//         </div>
//     )
// }


// Es6 class 定义类
// class Assembly extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>nnnnn</h1>
//             </div>
//         )
//     }
// }

// 复合式组件
function Name(){
    return(
        <div>
            <h1>nihao</h1>
        </div>
    )
}
function Url(){
    return(
        <div>
            <h1>nihao</h1>
        </div>
    )
}
export default function Assembly(){
    return(
        <div>
            <Url></Url>
            <Name></Name>
        </div>
    )
}

