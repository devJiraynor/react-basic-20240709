import React from 'react'
import './Example2.css';

export default function Example2() {
    return (
        <div className='table'>
            <div className='th'>
                <div className='td'>사번</div>
                <div className='td'>이름</div>
                <div className='td'>출근상태</div>
            </div>

            <div className='tr'>
                <div className='td'>202401</div>
                <div className='td'>홍길동</div>
                <div className='td' style={{ color: 'red' }}>●</div>
            </div>

            <div className='tr'>
                <div className='td'>202402</div>
                <div className='td'>이영희</div>
                <div className='td' style={{ color: 'blue' }}>●</div>
            </div>

            <div className='tr'>
                <div className='td'>202403</div>
                <div className='td'>김철수</div>
                <div className='td' style={{ color: 'blue' }}>●</div>
            </div>
        </div>
    )
}
