import React from 'react';
import Component, { FunctionComponent } from './component/Component';
import './App.css';
import CurlyBraces from './component/CurlyBraces';
import Properties from './component_manage/Properties';
import ConditionalRender from './component_manage/ConditionalRender';
import Example2 from './component_manage/example/Example2';
import ListRender from './component_manage/ListRender';
import EventComponent from './interaction/EventComponent';
import StateComponent from './interaction/StateComponent';
import ForwordingComponent from './interaction/ForwordingComponent';
import HookComponent1 from './hook/HookComponent1';
import HookComponent2 from './hook/HookComponent2';
import CustomHook from './hook/CustomHook';
import { Outlet, Route, Routes } from 'react-router';
import QueryString from './router/QueryString';
import PathVariable from './router/PathVariable';

// react-router 패키지:
// - react의 SPA(Single Page Application)에서 라우팅을 구현하기 위한 라이브러리
// - 웹 페이지에서 다양한 경로에 따른 뷰를 관리할 수 있도록 도와줌
// - 웹 애플리케이션 내에서 URL 이동이 있을 때 브라우저를 새로고침 하지 않음 (서버로 새로운 요청을 보내지 않음)
// - 웹 애플리케이션 내에서 네이비게이션 역할을 수행

// - npm install react-router react-router-dom

// - root 경로에 있는 index.tsx의 root.render() 안에 <App /> 컴포넌트를 <BrowserRouter> 컴포넌트로 묶어야함
// <BrowserRouter> : URL을 사용하여 브라우저 주소 표시줄에 현재 위치를 저장하고 탐색할 수 있도록 하는 컴포넌트

// - 특정 URL 패턴에 대해서 컴포넌트를 각각 다르게 렌더링하고자 한다면 
// - App.tsx에 <Routes> 컴포넌트와 <Route> 컴포넌트를 사용하여 경로에 따라서 컴포넌트를 렌더링할 수 있음

// <Routes> : <Route> 컴포넌트로 URL에 따른 컴포넌트 렌더링을 할 수 있도록 하는 컴포넌트
// <Route> : URL 패턴에 따라서 렌더링하고자 하는 컴포넌트를 지정하는 컴포넌트
// - path 속성 : URL 패턴을 지정
// - element 속성 : 랜터링할 컴포넌트 지정
// - index 속성 : 현재 경로의 기본 라우터로 지정

function Layout() {
    // <Outlet> : 부모 <Route>에 해당 컴포넌트가 element로 등록되었을때
    //            자식 <Route>의 element가 해당 위치에 렌더링되도록 하는 컴포넌트

    return (
        <div>
            <div style={{ height: '100px', backgroundColor: 'red' }}></div>
            <Outlet />
            <div style={{ height: '100px', backgroundColor: 'blue' }}></div>
        </div>
    )
}

function App() {
    return (
        <Routes>
            <Route index element={<h1>기본 페이지</h1>} />
            <Route path='/component' element={<Layout />}>
                <Route index element={<Component />} />
                <Route path='function-component' element={<FunctionComponent />} />
                <Route path='curly-braces' element={<CurlyBraces />} />
            </Route>
            <Route path='/router'>
                <Route path='query-string' element={<QueryString />} />
                <Route path='path-variable/:name' element={<PathVariable />} />
            </Route>
            <Route path='*' element={<h1>404!!!</h1>} />
            
            {/* <Properties /> */}
            {/* <ConditionalRender /> */}
            {/* <Example2 /> */}
            {/* <ListRender /> */}
            {/* <EventComponent /> */}
            {/* <StateComponent /> */}
            {/* <ForwordingComponent /> */}
            {/* <HookComponent1 /> */}
            {/* <HookComponent2 /> */}
            {/* <CustomHook /> */}
        </Routes>
    );
}

export default App;
