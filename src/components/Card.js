import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({ product, handleAddToCart }) => {


  return (
    // <CardContainer>
    //     <div className="title">
    //       <h1>Online Store</h1>
    //     </div>
    //     <div class="imgBx">
    //         <img src={product.image} alt={product.category} />
    //     </div>
    //     <div class="details">
    //         <h2>{product.title}<br />
    //           <span>{product.category.split(' ')[0]}</span>
    //         </h2>
    //         <h3>£{product.price}</h3>
    //         <button onClick={() => handleAddToCart()}>Add to Basket</button>
    //         <SLink to={`/${product.id}`}>See more details</SLink >
    //     </div>
    // </CardContainer>

      <CardContainer>
        <div className="title">
          <h1>Online Store</h1>
        </div>
        <div class="imgBx">
            <img src={product.image} alt={product.category} />
        </div>
        <div class="details">
            <h2 style={{fontSize:"20px"}}>{product.title}</h2>
            <p id='category'>{product.category.split(' ')[0]}</p>
            <h3>£{product.price}</h3>
            <button onClick={() => handleAddToCart()}>Add to Basket</button>
            <SLink to={`/${product.id}`}>See more details</SLink >
        </div>
      </CardContainer>
  )
}

export default Card;


const CardContainer = styled.div`
  position:relative;
  display:flex;
  margin:10px;
  width:400px;
  box-shadow:10px 10px 10px grey;
  .imgBx{
    height:140px;
    width:140px;
    position:absolute;
    top:55px;
    left:60px;
  }
  img{
    height:140px;
    width:140px;
  }

   .title{
    background-color:black;
    width:50%;
    display:flex;
    justify-content:center;   
  }

 .title h1{
    font-size:1.5em;
    color: white;
    opacity: 0.2;
    position:relative;
    top:-15px;
 }


 .details{
    width:50%;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-evenly;
  }

`


// const CardContainer = styled.div`
//   border:2px solid red;
//   display:flex;
//   width:400px;
//   margin:10px;
//   .title{
//     border:1px solid black;
//     background-color:black;
//     width:50%;
//     display:flex;
//     justify-content:center;
   
//   }

//   .title h1{
//     font-size:1.5em;
//     color: white;
//     opacity: 0.2;
//     position:relative;
//     top:-15px;
//   }

//   /* .imgBx{
//     border:3px solid purple;
    
//   } */

//    img{
//     width:100px;
    
//     position:relative;
    // top:30px;
    // right:40px;
//   }

  // .details{
  //   width:50%;
  //   border:1px solid green;
  //   display:flex;
  //   /* flex-wrap:wrap; */
  //   flex-direction:column;
  // }

//   .details h2{
//     font-size:1em;
//   }

// `








const ProductCardContainer = styled.div`

  margin:10px;
  
  width:300px;
  img{
    height:100px;
    
  }

  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,800&display=swap');

.container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height:100%;
    background: #fff;
    margin-bottom: 20px;
}

.container .imgBx {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background: #212121;
    transition: .3s linear;
}

.container .imgBx:before {
    content: 'ONLINE STORE';
    position: absolute;
    top: 10px;
    left: 20px;
    color:white;
    opacity: 0.2;
    font-size: 1em;
    font-weight: 800;
}

.container .imgBx img {
    position: relative;
    width: 100px;
    left: 50px;
    transition: .9s linear;
}

 .details {
  border:1px solid red;
    width: 50%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
 
}

.container .details h2{
    margin: 0;
    padding: 0;
    font-size: 1em;
    line-height: 1em;
    color: #444;
}

.container .details h2 span {
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #999;
}

.container .details p {
    max-width: 85%;
    margin-left: 15%;
    color: #333;
    font-size: 15px;
    margin-bottom: 36px;
}

.container .details h3 {
    margin: 0;
    padding: 0;
    font-size: 1.5;
    color: #a2a2a2;
    float: left;
}
.container .details button {
    background: #000;
    color: #fff;
    border: none;
    outline: none;
    margin-top: 15px;
    letter-spacing: 1px;
    font-weight: 600;
    border-radius: 40px;
    float: right;
    cursor: pointer;
}



.content{
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
  width:100%; 
}

@media (max-width: 1080px) {
    .container {
        height: auto;
    }
    .container .imgBx {
        padding: 40px;
        box-sizing: border-box;
        width: 100% !important;
        height: auto;
        text-align: center;
        overflow: hidden;
    }
    .container .imgBx img {
        left: initial;
        max-width: 100%;
        transform: rotate(0deg);
    }
    .details {
        width: 100% !important;
        height: auto;
        padding: 20px;
    }
    .container .details p {
        margin-left: 0;
        max-width: 100%;
    }
}



`
const SLink = styled(Link)`
  color:black;
  font-weight:200px;
  cursor: pointer;
`