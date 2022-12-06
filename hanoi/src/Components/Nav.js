import {React} from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

function Nav(props) {
    let menus = [];
    for (let i = 0; i < props.menu.length; i++) {
        // 각 a 태그를 클릭할 시 각각의 state로 바뀌도록 구성
        let menu = props.menu[i];
        menus.push(<Link to={menu.link}>{menu.title}</Link>);
    }
    return(
        <nav className='Navbar'>
            {menus}
        </nav>
    );
}
export default Nav;