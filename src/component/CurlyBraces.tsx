import React from 'react'

export default function CurlyBraces() {
    // Curly Braces:
    // - JSX에서 자바스크립트 표현식을 작성할 때 사용하는 방법
    // - JSX 안에 {  }로 영역을 지정하여 그 안에 자바스크립트를 작성

    const title = 'Curly Braces';

    // 1. 요소 컨텐츠에 자바스크립트 표현식을 쓰고자 할 때 사용
    // 2. 주석 처리 - HTML 주석을 사용할 수 없기 때문에 JS 주석을 사용해야함
    // 3. JSX에서 인라인 스타일을 적용할 때 사용
    //    - JSX에서 인라인 스타일은 문자열 X, 객체로 표현

    return (
        <>
            <h1 style={{ backgroundColor: 'red' }}>{title}</h1>
            <p>{10 + 20}</p>
        </>
    )
}

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

function TodoList() {

    const { name, theme } = person;

    return (
        <div style={theme}>
            <h1>{name}'s Todos</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}