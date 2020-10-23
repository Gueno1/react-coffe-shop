import React, { Fragment } from 'react';
import { connect } from 'react-redux'; 
import basketReducer from './reducers/basketReducer';

import expreso from './Images/expreso.jpg';
import americano from './Images/americano.jpg';
import cappuccino from './Images/cappuccino.jpg';
import latte from './Images/latte.jpg';
import moca from './Images/moca.jpg';



function Cart({basketProps}) {
    console.log(basketProps);

    let productsInCart = [];

    Object.keys(basketProps.products).forEach(function(item){
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if(basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    })

       const productImages  = [expreso, americano, cappuccino, latte, moca]


    productsInCart = productsInCart.map( (product, index) => {
        return (
          <Fragment>
              <div className="product"><ion-icon name="close-circle"></ion-icon><img src={productImages[index]} />
                <span className="sm-hide">{product.name}</span>
              </div>
              <div className="price sm-hide">${product.name},00</div>
              <div className="quantity">
                <ion-icon className="decrease" name="arrow-back-circle-outline"></ion-icon>
                     <span>{product.numbers}</span>
                <ion-icon className="increase" name="arrow-forward-circle-outline"></ion-icon>
              </div>
                <div className="total">${product.numbers * product.price},00</div>
          </Fragment>
        )
    });

    return (
        <div>
            <h1>This is the car Page</h1>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: basketReducer
});

export default connect(mapStateToProps ) (Cart);
