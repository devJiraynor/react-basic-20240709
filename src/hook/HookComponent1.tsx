import React, { useState } from 'react'

// Hook 함수 :
// - react에서 컴포넌트의 상태와 생명주기에 따라 특정 작업을 수행하도록 하는 특별한 함수
// - use로 시작하는 함수

// hook 함수의 종류
// - useState : 컴포넌트의 상태 관리를 가능하게 해주는 함수, 상태 생성, 업데이트, 상태에 접근
// - useEffect : 컴포넌트의 생명주기에 따라 특정 작업을 수행할 수 있도록 하는 함수, mount, update, unmount에 해당하는 생명주기에 따라 실행
// - useRef : 특정한 상태를 기억하기 위한 함수, 값이 변경되더라도 렌더링을 수행하고 싶지 않을 때, DOM 요소를 기억하고 싶을 때 사용
// - useContext : 컴포넌트 트리 상에서 전역적으로 상태를 공유하고자 할때 사용하는 함수
// - useReducer : 상태 로직을 관리하는 함수, 상태 업데이트 로직을 컴포넌트 외부로 옮길 수 있게하여 코드 관리를 수월하게 도와줌
// - useCallback : 메모리 내에서 함수를 재사용할 수 있도록 하는 함수, 렌더링없이 특정 함수를 실행할 수 있게 함
// - useMemo : 메모리 내에 계산된 값(함수 결과)을 저장하여 함수 재실행 없이 값을 사용할 수 있도록 하는 함수

// - hook 함수는 반드시 컴포넌트 코드 블럭 라인에 존재해야함
// const [state2, setState2] = useState<number>(0);

export default function HookComponent1() {

    const [state1, setState1] = useState<number>(0);

    // - hook 함수는 반드시 컴포넌트 코드 블럭 라인에 존재해야함
    // const func = () => {
    //     const [state3, setState3] = useState<number>(0);
    // }

    return (
        <div>HookComponent1</div>
    )
}

function SubComponent () {

    return (
        <div>sub</div>
    )

}