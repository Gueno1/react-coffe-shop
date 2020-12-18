import React, { useState } from 'react';
import './App.css';
import Home from './Home';

import Navbar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from "./components/Modal";

import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import {ProductProvider} from './context';

import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import "bootstrap/dist/css/bootstrap.min.css"; 


const allCategories = ['Todo', ...new Set(items.map((item) => item.category))];
console.log(allCategories);



function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'Todo') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems)
  };



  return (
    
    <Provider store={store}>
    <div className="App">
      
        <BrowserRouter>
        <ProductProvider>
        <Navbar />
        <Switch>        
          <Route exact path="/" component={ProductList} />
          <Route path="./details" component={Details} />
         <Route path="/cart" component={Cart} />
         <Route component={Default} />
        </Switch>
        <Modal />
        </ProductProvider>

    {/*
        <main>
      <section className="menu section">
        <div className="title">
          <h2>Nuestro Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
    */}
        </BrowserRouter>
      
    </div>
    </Provider>


    

  );
}

export default App;
