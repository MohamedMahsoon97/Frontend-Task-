import './Header.css';
import MyNavbar from '../Navbar/MyNavbar';
import Seminars from '../Seminars/Seminars';
import PatternLB from '../../Img/pattern-lb.png'
import PatternTR from '../../Img/pattern-tr.png'
const Header = () => {
      return (
            <div className='header'>
                  <MyNavbar />
                  <Seminars />
                  {/* Img Patterns */}
                  <img className='pattern-lb' src={PatternLB} alt='' />
                  <img className='pattern-tr' src={PatternTR} alt='' />
            </div>
      )
}

export default Header;