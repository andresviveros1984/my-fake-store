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
        {/* {"ask ratan to help get the icons closer to edge"} */}
        <NavLink to={'/electronics'}>Electronics</NavLink>
        <NavLink to={'/jewelery'}>jewelery</NavLink>
        <NavLink to={'/men\'s clothing'}>men's clothing</NavLink>
        <NavLink to={'/women\'s clothing'}>women's clothing</NavLink>
        {/* {use reat router, look at note} */}

        <div id="cart-icon">
          <Badge color="secondary" badgeContent={cartcount}>
            <ShoppingCartIcon />
          </Badge>
        </div>
      </nav>
    </Wrapper>
  )
  // have a nav bar give all categories, when user clicks on category go to that page displaying all

}

export default Header;

const Wrapper = styled.header`
  
  border:1px solid red;
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
  
  padding:10px;
  text-decoration:none;
`