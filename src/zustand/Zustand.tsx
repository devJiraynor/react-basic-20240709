import React, { ChangeEvent } from 'react';
import { create } from 'zustand';

// zustand 패키지:
// - react에서 사용할 수 있는 상태 관리 패키지 중 하나
// - 상태 관리 패키지 중 과거에는 Redux 패키지가 가장 많이 사용됐지만 현재는 zustand로 이동 중
// - Redux의 고질적 문제점인 복잡한 코드 구조 및 높은 학습 곡선이 그 이유
// - zustand는 단순한 코드 구조와 낮은 학습 곡선이 매우 낮음
// - Redux, MobX 등과 같은 타 패키지에 비해 가벼움 - 빌드 시 패키징 속도가 굉장히 빠름 / 번들의 크기가 줄어듬

// npm install zustand

// zustand를 이용한 글로벌 상태 선언 방법
// - zustand 패키지에 있는 create 함수로 store를 생성할 수 있음
// - store: 관리할 상태들과 각 상태에 해당하는 상태 변경 함수들의 집합
// - create 함수를 호출하면 store를 반환하는 훅 함수를 반환

// - create 함수는 매개변수로 set 매개변수를 받는 콜백함수를 요구함
// - 매개변수로 받는 set은 상태(store) 변경을 위한 함수
// - create 함수의 매개변수로 전달된 콜백함수는 store 객체를 반환해야함

// const [address, setAddress] = useState<string>('');

// - typescript에서는 zustand의 store 타입을 create 함수의 제너릭으로 전달해줘야함

interface Store {
    address: string;
    setAddress: (address: string) => void;
}

const useStore = create<Store>((set) => ({
    address: '',
    // set 함수의 매개변수로는 현재 상태(store)를 받는 콜백함수를 전달
    // set 함수에 전달한 콜백함수는 변경된 상태(store)를 반환
    setAddress: (address: string) => set((state) => ({...state, address}))
}));

export default function Zustand() {

    // zustand로 선언한 상태 사용 방법
    // const { 상태, ..., 상태 변경 함수, ... } = useStore훅함수();
    const { address, setAddress } = useStore();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setAddress(value);
    };

    return (
        <div>
            <h1>{address}</h1>
            <input value={address} onChange={onChange} />
        </div>
    )
}
