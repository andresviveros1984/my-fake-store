import React from 'react';
import { useState, useEffect } from 'react';
import { Router, useParams } from 'react-router';
import styled from 'styled-components';


const ProductDetails = ({ identifier }) => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  const [error,setError] = useState(null);


  const getProductDetails = async () => {
    try{
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    console.log(response)
      if(response.ok !== true){
        throw new Error("Product Not available to view")
      }
    
    const data = await response.json();
    setProductDetail(data);
  }catch(error){
    setError(error.toString())
  }
  
      
    
  }

  useEffect(() => {
    getProductDetails();
  }, [])

  return (
    <div>
      {console.log(error)}
      {error ? (<p>{error}</p>) : (<h1>{productDetail.title}</h1>)}
      {/* <h1>{productDetail.title}</h1> */}
      <ProductDetailsContainer class="container">
      
        <div class="container">
          <div class="imgBx">
            <img src={productDetail.image} />
          </div>
          <div class="details">
            <div class="content">
              <h2>{productDetail.title}<br />
                <span>{productDetail.category}</span>
              </h2>
              <p>
                {productDetail.description}
              </p>

              <h3>£ {productDetail.price}</h3>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </ProductDetailsContainer>
    </div>
  )
}

export default ProductDetails;

const ProductDetailsContainer = styled.div`
display:flex;
justify-content:center;

@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,800&display=swap');



.container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 900px;
    height: 600px;
    background: #fff;
    margin: 20px;
}

.container .imgBx {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    background: #212121;
    transition: .3s linear;
}

.container .imgBx:before {
    content: 'Online Store';
    position: absolute;
    top: 0px;
    left: 24px;
    color: white;
    opacity: 0.2;
    font-size: 4em;
    font-weight: 800;
}

.container .imgBx img {
    position: relative;
    width: 400px;
    transform: rotate(-30deg);
    left: -50px;
    transition: .9s linear;
}

.container .details {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    padding: 40px;
}

.container .details h2{
    margin: 0;
    padding: 0;
    font-size: 2.4em;
    line-height: 1em;
    color: #444;
}

.container .details h2 span {
    font-size: 0.4em;
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
    font-size: 2.5em;
    color: #a2a2a2;
    float: left;
}
.container .details button {
    background: #000;
    color: #fff;
    border: none;
    outline: none;
    padding: 15px 20px;
    margin-top: 5px;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 40px;
    float: right;
}

.product-colors span {
    width: 26px;
    height: 26px;
    top: 7px;
    margin-right: 12px;
    left: 10px;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    display: inline-block;
}

.black {
    background: #000;
}

.red {
    background: #D5212E;
}

.orange {
    background: #F18557;
}

.product-colors .active:after{
    content: "";
    width: 36px;
    height: 36px;
    border: 2px solid #000;
    position: absolute;
    border-radius: 50%;
    box-sizing: border-box;
    left: -5px;
    top: -5px;
}

/* responsive */
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

footer {
    position: fixed;
    right: 16px;
    bottom: 12px;
}

footer a {
    color: #fff;
    text-decoration: none;
    font-size: 12px;
}

`