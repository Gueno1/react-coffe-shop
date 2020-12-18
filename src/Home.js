 import React, {useState} from 'react';
 import expreso from './images/expreso.jpg';
 import americano from './images/americano.jpg';
 import cappuccino from './images/cappuccino.jpg';
 import latte from './images/latte.jpg';
 import moca from './images/moca.jpg';
 import { connect } from 'react-redux';
 import { addBasket } from './actions/addAction';


const Home = (props) => {
       console.log(props);

   return(
      
      
        <div className="container">

           
            <div className="image">
               <img src={expreso} alt="expreso" />
               <h3>Expreso</h3>
               <h3>$1000</h3>
               <a onClick={() => props.addBasket('expreso')} className="addToCart cart1" href="#">Agregar al Carro</a>
            </div>

            <div className="image">
               <img src={americano} alt="americano" />
               <h3>Americano</h3>
               <h3>$1000</h3>
               <a onClick={() => props.addBasket('americano')} className="addToCart cart2" href="#">Agregar al Carro</a>
            </div>

            <div className="image">
               <img src={cappuccino} alt="cappuccino" />
               <h3>Capuchino</h3>
               <h3>$1000</h3>
               <a onClick={() => props.addBasket('cappuccino')} className="addToCart cart3" href="#">Agregar al Carro</a>
            </div>

            <div className="image">
               <img src={latte} alt="latte" />
               <h3>Latte  </h3>
               <h3>$1000</h3>
               <a onClick={() => props.addBasket('latte')} className="addToCart cart4" href="#">Agregar al Carro</a>
            </div>


            <div className="image">
               <img src={moca} alt="moca" />
               <h3>Mocha</h3>
               <h3>$1000</h3>
               <a onClick={() => props.addBasket('moca')} className="addToCart cart5" href="#">Agregar al Carro</a>
            </div>


        </div>
        
   );
}

export default connect(null, {addBasket} ) (Home);