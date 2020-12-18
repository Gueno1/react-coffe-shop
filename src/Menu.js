import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addBasket } from './actions/addAction';


const Menu = ({ items, props }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id,title,img,desc,price,tagName} = menuItem;
        
        return (
          
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <h4>{title}</h4>    
              <h4 className="price">${price}</h4>
              <div className="underline2"></div>
              <p className="item-text">{desc}</p>
              <a onClick={() => props.addBasket('expreso')} className="item-text" href="#">Agregar</a>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default connect(null, {addBasket} ) (Menu);