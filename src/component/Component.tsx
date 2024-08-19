import React from 'react';

// 컴포넌트 
// 화면에 표시되는 하나의 요소 단위
// 각각의 독립적인 상태와 로직을 가지고 있음
// 클래스형 컴포넌트, 함수형 컴포넌트가 존재
// 클래스형 컴포넌트는 이제 사용되지 않음

// 컴포넌트 선언 방법
// 1. class component
// - class로 컴포넌트 작성
// - 반드시 첫글자는 대문자
// - react 패키지의 Component 클래스를 상속하여 구현
// - render() 메서드의 반환값으로 렌더링하고자하는 요소를 반환
export class ClassComponent extends React.Component {
    render(): React.ReactNode {
        return (
            <h1>클래스형 컴포넌트</h1>
        )
    }
}