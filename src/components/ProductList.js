import React, { Component } from 'react';
import Product from "./Product";
import Title from './Title';
import "bootstrap/dist/css/bootstrap.min.css"; 
import {ProductConsumer} from '../context';
import { storeProducts} from '../data2';


export default class ProductList extends Component {
state = {
    products: storeProducts
};
   
    render() {
        return (

           <React.Fragment>
                 <div className="py-5">    
                 <div className="container">
                     <Title name="Nuestros" title="Productos" />
                     <div className="row">
                      
                         <ProductConsumer>
                             {(value) => {
                                 return value.products.map( product => {
                                   return <Product key={product.id} product=
                                   {product}  />;  
                                 })
                              }}
                         </ProductConsumer>
                        
                     </div>
                 </div>
                   </div>
           </React.Fragment>



               
        )
    }
}
