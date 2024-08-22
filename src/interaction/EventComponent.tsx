import React, { ChangeEvent, KeyboardEvent, MouseEvent } from 'react'

// 이벤트 처리:
// - 웹 페이지(컴포넌트)가 사용자와의 상호작용을 받아드려 그것에 대한 처리를 하는 것
// - React에서는 addEventListener 함수를 사용하지 않고 on이벤트 속성을 사용
// - on이벤트 속성을 lowerCamelCase를 따름
// - on이벤트 속성에 콜백 함수를 전달
export default function EventComponent() {

    const onClickHandler = () => {
        alert('클릭했습니다!');
    };

    // onClick: 클릭이 발생했을 때
    // onKeyDown: input 요소에서 키보드 입력이 발생했을 때
    // onChange: 요소의 값이 변경될 때 (input 요소에서 값이 변경될 때)

    // 각 이벤트의 콜백 함수는 이벤트 객체를 매개변수로 받을 수 있음
    // Typescript에서는 이벤트 객체의 타입을 'Event클래스<이벤트가 발생한 요소>'으로 지정
    const onClick2Handler = (event: MouseEvent<HTMLDivElement>) => {
        console.log(event);
    };

    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        console.log("keydown : " + event.key);
    };

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("change : " + event.target.value);
    };


    const onClick3Handler = (str: string) => {
        alert(str);
    };

    return (
        <>
            <button onClick={onClickHandler}>클릭!</button>
            <div onClick={onClick2Handler}>마우스 이벤트</div>
            <input onKeyDown={onKeyDownHandler} onChange={onChangeHandler} />
            <button onClick={() => onClick3Handler('안녕')}>매개변수 클릭</button>

            { employees.map((item, index) => (
                <div key={index}>
                    <h1>{item.name}</h1>
                    <button>사번확인</button>
                </div>
            )) }

        </>
    )
}

const employees = [
    {
        name: '홍길동',
        employeeNumber: '202401'
    },
    {
        name: '김철수',
        employeeNumber: '202402'
    },
];
