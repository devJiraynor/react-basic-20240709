import React, { useState } from 'react'

// react-cookie 패키지:
// - react에서 쿠키를 손쉽게 관리할 수 있도록 도움을 주는 패키지
// - 쿠키 설정, 검색, 삭제를 간단한 함수로 작업할 수 있음

// 쿠키 (Cookie)
// 클라이언트가 특정한 웹 서비스에 방문하여 사용 중 해당 서비스에서 필요한 데이터를
// 클라이언트 브라우저에 저장하는 기술
// - 이름, 값, 만료일, 도메인, 경로가 포함됨

// npm install react-cookie

export default function ReactCookie() {

    const [name, setName] = useState<string>('');
    const [value, setValue] = useState<string>('');

    return (
        <div>
            <input />
            <input />
            <button>쿠키 추가</button>
            <button>쿠키 확인</button>
            <button>쿠키 제거</button>
        </div>
    )
}
