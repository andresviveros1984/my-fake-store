import styled from "styled-components";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';
import HomeIcon from '../images/homeIcon.png';

const Header = ({cartcount}) => {

  return (

    <Wrapper>
      <nav>
        <Link to={'/'}><img src={HomeIcon} alt="home outline"/></Link>
        {/* {"ask ratan to help get the icons closer to edge"} */}
        <Link to={'/electronics'}>Electronics</Link>
        <Link to={'/jewelery'}>jewelery</Link>
        <Link to={'/men\'s clothing'}>men's clothing</Link>
        <Link to={'/women\'s clothing'}>women's clothing</Link>
        {/* {use reat router, look at note} */}
        <Badge color="secondary" badgeContent={cartcount}>
          <ShoppingCartIcon />{" "}
        </Badge>
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
  
  background-color:#894739;
  nav {
    border:1px solid white;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:space-around;
    
    /* margin:0 30px 0 30px; */
  }
  a{
    font-family: 'Josefin Sans', sans-serif
  }

  img{
    width:30px;
    height:30px;
  }
`