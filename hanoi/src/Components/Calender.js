import {useState, useRef, useEffect, React} from 'react';
import './styles/Calender.css'

const Calender = () => {
    // 렌더링 방식
    // 새로고침마다 날짜 바꾸기 또는 매 초마다 시간 로딩해서 state로 만들어 반영하기
    // 일단 후자의 방식으로 구현

    // 모든 날짜 정보를 가져올 객체 선언
    // 오늘의 날짜와 요일, 이전/다음 달의 마지막 날짜와 요일
    let today = new Date();
    let prevEndDate = new Date(today.getFullYear(), today.getMonth(), 0);
    let currEndDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    //날짜를 실시간으로 렌더링할 state, ref 선언
    let [dayState, setDayState] = useState(today);
    let dayRef = useRef(dayState);
    //1초마다 날짜 변경
    useEffect(() => {
        setInterval(() => {
            setDayState(dayRef.current = new Date());
        }, 1000)
    }, []);
    
    return (
    <div className='calender'>
        <CalenderDay title={dayState.getDate()} content={['15:00 미래생활과화학']}></CalenderDay>
        <CalenderDay title={dayState.getMonth()+1} content={['12:00 네트워크', '15:00 문화다양성']}></CalenderDay>
        <CalenderDay title={dayState.getFullYear()} content={['09:00 운영체제', '15:00 자료구조']}></CalenderDay>
        <CalenderDay title={dayState.getDay()} content={['12:00 데이터베이스', '15:00 인공지능개론']}></CalenderDay>
        <CalenderDay title={dayState.getDay()} content={['12:00 데이터베이스', '15:00 인공지능개론']}></CalenderDay>
        <CalenderDay title={dayState.getDay()} content={['12:00 데이터베이스', '15:00 인공지능개론']}></CalenderDay>
        <CalenderDay title={dayState.getDay()} content={['12:00 데이터베이스', '15:00 인공지능개론']}></CalenderDay>
        <CalenderDay title={dayState.getDay()} content={['12:00 데이터베이스', '15:00 인공지능개론']}></CalenderDay>
    </div>);
}

//Calender 내에 들어가는 div 한 칸을 생성하는 컴포넌트
const CalenderDay = ({title, content}) => {
    const contentList = [];
    for (let i = 0; i < content.length; i++) {
        contentList.push(<div key={i} className='calender-day-content-div'>{content[i]}</div>);
    }
    return ( 
    <div className='calender-day'>
        <div className="calender-day-title">{title}</div>
        <div className="calender-day-content">
            {contentList}
        </div>
    </div>
    );
}

export default Calender;
