import React, { useRef, useState } from 'react'

export default function HookComponent2() {

    // useRef :
    // - 렌더링 작업 없이 값을 기억하고 변경하고자 할때 사용
    // - DOM 요소를 참조하기 위해 자주 사용
    // - const 변수 = useRef<타입>(초기값)

    // DOM 요소를 참조하기 위해 useRef 사용할 경우 참조할 요소의 ref 속성에 참조변수를 지정해야함
    const inputRef = useRef<HTMLInputElement>(null);

    const imageInputRef = useRef<HTMLInputElement>(null);
    const [imageUrl, setImageUrl] = useState<string>('');

    const onButtonClickHandler = () => {
        // const inputElement = document.getElementById('input');
        // inputElement?.focus();

        // useRef로 생성한 참조 객체는 해당 변수의 current 속성에 들어있음
        // 특정 객체에서 속성 및 메서드를 호출하려할 때 변수의 값이 null 혹은 undefined가 아닌 상태에서만
        // 작업을 수행하도록 하려면 변수?.속성 혹은 변수?.메서드()로 지정
        // inputRef.current?.focus();

        if (!inputRef.current) return;
        inputRef.current.focus();
    };

    const onImageInputChangeHandler = () => {
        const { current } = imageInputRef;
        if (!current) return;
        if (!current.files) return;

        const file = current.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onloadend = () => {
            setImageUrl(fileReader.result as string);
        };
    };

    const onImageButtonClickHandler = () => {
        const { current } = imageInputRef;
        if (!current) return;
        current.click();
    };

    return (
        <div>
            <input ref={inputRef} id='input' />
            <button onClick={onButtonClickHandler}>focus</button>
            <div>
                <img width={100} height={100} src={imageUrl} />
                <input style={{ display: 'none' }} ref={imageInputRef} type='file' accept='image/*' onChange={onImageInputChangeHandler} />
                <button onClick={onImageButtonClickHandler}>이미지 등록</button>
            </div>
        </div>
    )
}
