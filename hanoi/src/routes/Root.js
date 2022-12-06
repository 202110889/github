import {useState, React} from 'react';
import {Outlet, Link, useLocation} from 'react-router-dom';
import Logo from '../Components/Logo';
import '../App.css';


function Root() {
  const [pathState, setPathState] = useState(useLocation().pathname);
  /**root에서 현재 path를 전달
   * 용도: Logo와 navbar를 로딩, 선택된 창에 해당하는 메뉴의 색을 변경 **/
  const [colorState, setColorState] = useState({
    '/home': 'rgba(223, 139, 139, 0.36)',
    '/today': 'rgba(223, 139, 139, 0.36)',
    '/notes': 'rgba(223, 139, 139, 0.36)',
    '/settings': 'rgba(223, 139, 139, 0.36)'
  });

  const highlight = (id) => {
    /** 현재 선택한 링크의 불투명도 0.7로 변경
     * 선택한 링크 이외 링크의 불투명도 0.36으로 변경
     */
    setColorState({
      '/home': id === '/home' ? 'rgba(223, 139, 139, 0.7)' : 'rgba(223, 139, 139, 0.36)',
      '/today': id === '/today' ? 'rgba(223, 139, 139, 0.7)' : 'rgba(223, 139, 139, 0.36)',
      '/notes': id === '/notes' ? 'rgba(223, 139, 139, 0.7)' : 'rgba(223, 139, 139, 0.36)',
      '/settings': id === '/settings' ? 'rgba(223, 139, 139, 0.7)' : 'rgba(223, 139, 139, 0.36)',
    });
  }
  return (
    <>
      <div className='logo'>
        <Logo path={pathState}/>
      </div>
      <nav className='navbar'>
        <div id='/home' className='navbar-item' style={{
          backgroundColor: colorState['/home']
        }}><Link className='navbar-txt' to='/home' onClick={() => {
          setPathState('/home');
          highlight('/home');
        }}>Calender</Link></div>
        <div id='/today' className='navbar-item' style={{
          backgroundColor: colorState['/today']
        }}><Link className='navbar-txt' to='/today' onClick={() => {
          setPathState('/today');
          highlight('/today');
        }}>Today</Link></div>
        <div id='/notes' className='navbar-item' style={{
          backgroundColor: colorState['/notes']
        }}><Link className='navbar-txt' to='/notes' onClick={() => {
          setPathState('/notes');
          highlight('/notes');
        }}>Notes</Link></div>
        <div id='/settings' className='navbar-item' style={{
          backgroundColor: colorState['/settings']
        }}><Link className='navbar-txt' to='/settings' onClick={() => {
          setPathState('/settings');
          highlight('/settings')
        }}>Settings</Link></div>
      </nav>
      <Outlet/>
    </>
  );
}

export default Root;
