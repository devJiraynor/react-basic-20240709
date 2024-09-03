import axios from 'axios'
import React from 'react'

// axios 패키지:
// - javascript에서 사용하는 HTTP 클라이언트 라이브러리
// - Nodejs와 브라우저 환경에서 동작함
// - Fetch API, Ajax 보다 간편함
// - axios는 기본적으로 비동기 처리를 수행함

// npm install axios
export default function Axios() {

    // axios 객체
    // - http method에 해당하는 메서드를 포함하고 있음
    // - 각각의 http method 메서드는 매개변수로 URL, data, option을 받을 수 있음
    // - get, delete : URL, option (선택)
    // - post, put, patch : URL, data (선택), option (선택)
    axios
        .get('http://3.34.99.196:4000/api/quantification-model')
        // 각각의 http method 메서드는 then으로 response 객체를 받는 콜백 함수를 전달
        .then((response) => {
            // response 객체는 status, header, body(data)를 포함하고 있음
            console.log(response.data);
        })
        // HTTP 요청에 대한 실패(네트워크에러, 400~500 상태)처리
        .catch((error) => {
            // AxiosError 객체를 받아옴
            // 만약 응답이 존재하는 실패일 경우 AxiosError 객체 안의 response 속성으로 해당 응답에 접근
            console.log(error);
        });

    return (
        <div>Axios</div>
    )
}
