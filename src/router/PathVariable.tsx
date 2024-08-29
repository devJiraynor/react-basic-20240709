import React from 'react'
import { useParams } from 'react-router'

export default function PathVariable() {

    // useParams : 
    // - 경로 변수에 해당하는 값을 읽을 때 사용하는 react-router의 훅 함수
    const { name } =useParams();
    console.log(name);

    return (
        <div>NAME : {name}</div>
    )
}
