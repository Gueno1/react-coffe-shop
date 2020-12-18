import React, { Fragment } from 'react';
import { connect } from 'react-redux'; 
import { productQuantity, clearProduct } from './actions/productQuantity.js';

import expreso from '../src/images/expreso.jpg';
import americano from '../src/images/americano.jpg';
import cappuccino from '../src/images/cappuccino.jpg';
import latte from '../src/images/latte.jpg';
import moca from '../src/images/moca.jpg';



function Cart({basketProps, productQuantity, clearProduct}) {
    console.log(basketProps);

    let productsInCart = [];

     Object.keys(basketProps.products).forEach( function (item) {
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if(basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
     })

      // const productImages  = [expreso, americano, cappuccino, latte, moca]
        const productImages = ( product) => {
           if(product.tagName === 'expreso') {
               return expreso;
           }  else if (product.tagName === 'americano') {
              return americano;
           }  else if (product.tagName === 'cappuccino') {
              return cappuccino;
           }  else if (product.tagName === 'latte') {
              return latte;
           }  else if (product.tagName === 'moca') {
              return moca;
           }
        }





    productsInCart = productsInCart.map( (product, index) => {
        console.log("My product is");
        console.log(product);

        return (
          <Fragment key={index}>
              <div className="product"><ion-icon onClick={() => clearProduct(product.tagName)} name="close-circle"></ion-icon> <img src={productImages(product)} alt="imagen"/>
                <span className="sm-hide">{product.name}</span>
              </div>
              <div className="price sm-hide">${product.price},00</div>
              <div className="quantity">
            <ion-icon onClick={() => productQuantity('decrease', product.tagName)}  className="decrease" name="arrow-back-circle-outline"></ion-icon>
                     <span>{product.numbers}</span>
            <ion-icon onClick={() => productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
              </div>
             <div className="total">${product.numbers * product.price},00</div>
          </Fragment>
        )
    });

    return (
        <div className="container-products"> 
          <div className="product-header">
              <h5 className="product-title">Producto</h5>
              <h5 className="price sm-hide">Precio</h5>
              <h5 className="quantity">Cantidad</h5>
              <h5 className="total">Total</h5>
          </div>      
            <div className="products">
                { productsInCart }
            </div>  
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Precio Total</h4>
                <h4 className="basketTotal">${basketProps.cartCost} ,00</h4>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps, {productQuantity, clearProduct } ) (Cart);
