import React from 'react'

// 컴포넌트로 상태 전달 : 
// - 부모 요소에서 자식 요소로 상태를 전달할 수 있음
// - 자식 요소의 속성으로 전달


export default function ForwordingComponent() {

    return (
        <div>
            <Child1 />
            <Child2 />
            <Child3 />
        </div>
    )
}

function Child1 () {
    return (
        <div style={{ height: '200px', backgroundColor: 'red' }}></div>
    )
}

function Child2 () {
    return (
        <div style={{ height: '200px', backgroundColor: 'green' }}></div>
    )
}

function Child3 () {
    return (
        <div style={{ height: '200px', backgroundColor: 'blue' }}></div>
    )
}
