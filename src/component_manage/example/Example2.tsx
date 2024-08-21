import React from 'react'
import './Example2.css';

function TableHeader() {

    return (
        <div className='th'>
            <div className='td'>사번</div>
            <div className='td'>이름</div>
            <div className='td'>출근상태</div>
        </div>
    );

}

interface TableRowProps {
    employeeNumber: string;
    employeeName: string;
    workState: boolean;
}

function TableRow({ employeeNumber, employeeName, workState }: TableRowProps) {

    const color = workState ? 'blue' : 'red';

    return (
        <div className='tr'>
            <div className='td'>{employeeNumber}</div>
            <div className='td'>{employeeName}</div>
            <div className='td' style={{ color }}>●</div>
        </div>
    );

}

interface TableDataTrProps {
    type: 'tr';
    employeeNumber: string;
    employeeName: string;
    workState: boolean;
}

interface TableDataThProps {
    type: 'th';
}

function TableData(props: TableDataTrProps | TableDataThProps) {

    const { type } = props;

    if (type === 'th') {
        return (
            <div className='th'>
                <div className='td'>사번</div>
                <div className='td'>이름</div>
                <div className='td'>출근상태</div>
            </div>
        );
    }

    const { employeeName, employeeNumber, workState } = props;
    const color = workState ? 'blue' : 'red';

    return (
        <div className='tr'>
            <div className='td'>{employeeNumber}</div>
            <div className='td'>{employeeName}</div>
            <div className='td' style={{ color }}>●</div>
        </div>
    );

}

export default function Example2() {

    const employee1 = {
        employeeNumber: '202401',
        employeeName: '홍길동',
        workState: false
    };

    const employee2 = {
        employeeNumber: '202402',
        employeeName: '이영희',
        workState: true
    };

    const employee3 = {
        employeeNumber: '202403',
        employeeName: '김철수',
        workState: true
    };

    return (
        <div className='table'>
            <TableHeader />
            <TableRow { ...employee1 } />
            <TableRow { ...employee2 } />
            <TableRow { ...employee3 } />
        </div>
    )
}
