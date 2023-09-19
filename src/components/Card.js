import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({ product, handleAddToCart }) => {




  return (
    <ProductCardContainer>
      <div id="product-title">
        <h4>{product.title}</h4>
      </div>
      <div className="image">
        <img src={product.image} alt="item" />
      </div>
      {/* <p>{product.description}</p> */}
      <button onClick={() => handleAddToCart()}>Add to cart</button>
      {/* <Link to={`/${product.category}`}>See all {product.category}</Link> */}
      <Link to={`/${product}`}>See details {product.category}</Link>
      <p>Price: £{product.price}</p>
    </ProductCardContainer>
  )
}

export default Card;

const ProductCardContainer = styled.div`
  border:1px solid black;
  height:300px;
  width:300px;
  img{
    height:100px;
    /* width:200px */
  }
`