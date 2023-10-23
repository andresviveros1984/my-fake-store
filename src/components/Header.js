import styled from "styled-components";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';
import HomeIcon from '../images/homeIcon.png';

const Header = ({ cartcount }) => {

  return (

    <Wrapper>
      <nav>
        <NavLink to={'/'}><img src={HomeIcon} alt="home outline" /></NavLink>

        <NavLink to={'/electronics'}>Electronics</NavLink>
        <NavLink to={'/jewelery'}>Jewelery</NavLink>
        <NavLink to={'/men\'s clothing'}>Men's clothing</NavLink>
        <NavLink to={'/women\'s clothing'}>Women's clothing</NavLink>
        {/* {use reat router, look at note} */}

        
          <div id="cart-icon">
            <Link to={'/'}>
              <Badge color="red" badgeContent={cartcount}>
                <ShoppingCartIcon />
              </Badge>
            </Link>
          </div>
        
      </nav>
    </Wrapper >
  )
  // have a nav bar give all categories, when user clicks on category go to that page displaying all

}

export default Header;

const Wrapper = styled.header` 
  height:60px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  nav {
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 100px;
  }
 

  img{
    width:30px;
    height:30px;
  }

  #cart-icon{
    margin-right:20px;
  }
`
const NavLink = styled(Link)`
  font-family: 'Josefin Sans', sans-serif;
  color: #444;
  padding:10px;
  font-size: 1em;
  font-weight: 800;
  text-decoration:none;
`