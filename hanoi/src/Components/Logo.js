import {React, useState, useEffect, useRef} from "react";
import './styles/dayLogo.css'
import logo from './logo.svg'

const Logo = (props) => {
    const Months = [
        'January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];
    console.log(props.path);
    console.log(props.path === '/home');
    // let [pathState, setPathState] = useState(path);
    // 오늘 날짜 선언
    let today = new Date();
    //날짜를 실시간으로 렌더링할 state, ref 선언
    let [dayState, setDayState] = useState(today);
    let dayRef = useRef(dayState);
    //1초마다 날짜 변경
    useEffect(() => {
        setInterval(() => {
            setDayState(dayRef.current = new Date());
        }, 1000)
    }, []);
    if (props.path === '/home') {
        return (
        <div className="logo-date">
            <div className="logo-day">{dayState.getDate()}</div>
            <div>
                <div className="logo-year">{dayState.getFullYear()}</div>
                <div className="logo-month">{Months[dayState.getMonth()]}</div>
            </div>
        </div>
        );
    } else {
        return <img src={logo} alt='hanoi-logo'/>;
    }
}
export default Logo;