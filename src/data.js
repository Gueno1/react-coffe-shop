import expreso from './images/expreso.jpg';
import americano from './images/americano.jpg';
import cappuccino from './images/cappuccino.jpg';
import latte from './images/latte.jpg';
import moca from './images/moca.jpg';
import galleta from './images/galleta.jpg';
import cheesecake from './images/cheesecake.jpg';




const menu = [
     { 
        id: 1, 
        title: 'Expreso',
        tagName: 'expreso',
        category: 'Café',
        price: 1100,
        img:  expreso,
        desc: 'Extracto de café muy aromático y concentrado cubierto por una crema dorada.',
    },
    {
       id: 2,
       title: 'Americano',
       tagName: 'americano',
       category: 'Café',
       price: 1400,
       img:  americano,
       desc: 'Café y agua a partes iguales. Logra prolonga el sabor del espresso',
   },
    {
       id: 3,
       title: 'Cappuccino',
       tagName: 'cappuccino',
       category: 'Café',
       price: 1600,
       img:  cappuccino,
       desc: 'Mezcla de Cafe con Leche vaporizada. Una de las bebidas más tradicionales con las perfectas notas de aroma y sabor en tu paladar.',
   },
   {
       id: 4,
       title: 'Latte',
       tagName: 'latte',
       category: 'Café',
       price: 1800,
       img: latte,
       desc: 'Una Combinación de nuestro mejor espresso y leche, cubierto de una capa cremosa de leche vaporizada.',
   },
   {
    id: 5,
    title: 'Latte',
    tagName: 'latte',
    category: 'Café',
    price: 1800,
    img:  latte,
    desc: 'Una Combinación de nuestro mejor espresso y leche, cubierto de una capa cremosa de leche vaporizada.',
},
{
    id: 6,
    title: 'Moca',
    tagName: 'moca',
    category: 'Café',
    price: 1800,
    img :  moca,
    desc: 'El sabor irresistible de nuestro tradicional mocca endulzado con chocolate.',
},

   {
       id: 7,
       title: 'Galleta Chocochips',
       tagName: 'chocochips',
       category: 'Pasteleria Dulce',
       price: 500,
       img :  galleta,
       desc: 'Crocante galleta con deliciosos chips de chocolate. Puedes disfrutarla caliente o fría para acompañar tus bebidas favoritas',
   },
   {
       id: 8,
       title: 'Cheesecake de Fresa',
       tagName: 'cheesecake',
       category: 'Pasteleria Dulce',
       price: 2000,
       img :  cheesecake,
       desc: 'Un postre delicioso con la textura del suero costeño, el queso y el dulce sabor de las fresas que se hornean a temperaturas muy bajas para consolidar los sabores de este. Un invento gastronómico único.',
   }


   
];

export default menu;