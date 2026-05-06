import { useState, useEffect, useMemo } from 'react';//useMemo es un Hook enfocado al perfonmance
import { db } from '../data/db';
import type { Guitar, CartItem } from '../types';

export const useCart = () => {
  const storedCart = localStorage.getItem('cart');
  const initialCart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);
  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  // State Derivado
  const isEmpty = useMemo(() => cart.length === 0, [cart]);//UseMemo evita que este codigo se ejecute si algunas de las dependencias definidas en el useMemo no an cambiado, las dependencias se definen dentro del arreglo de dependencias, en este caso la dependencia definida es cart. Cada de cart  cambien (cada que al carrito le agreguemos elementos o lo quitemos elementos) ejecuta el codigo.
  //Itera cada objeto dentro de la lista de cart, es decir itera cada guitarra seleccionada, si hay mas de una misma guitarra esta se multiplica con su precio, el parametro total va acomulando sumando los valores de cada iteración.  
  const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart]);

  useEffect(() => {//Este codigo se ejecutará cuando el estado de la variable cart cambie
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addToCart(item: Guitar) {
    const itemExists = cart.findIndex(guitar => guitar.id === item.id);
    if (itemExists >= 0) {//Existe en el carrito
      if (cart[itemExists].quantity >= MAX_ITEMS) return;
      console.log('Ya Existe');
      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++;
      setCart(updatedCart);
    } else {
      //Crea un array nuevo con la lista  de objetos que contiene cart y ademas le añade a la lista otro objeto o otra guitarra al carrito la cual es la que esta recibiendo la función y de esta forma al carrito se agregan las guitarras que ya estaban  dentro con el ...cart y se agrega la que se esta pasando por medio de la función
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  function removeFromCart(id: Guitar['id']) {
    //prevCart hace referencia a los elementos dentro de cart, se filtran los elementos con el id diferente al que recibe la función, de esta forma los elementos filtrados se sobrescriben sobre los que tenia cart dejando al elemento perteneciente al id que recibe la función fuera de los elementos que contiene el carrito de compras, de esta forma se estaría eliminando un elemento del carrito de compras.
    //El total a apagar se actualiza al sacar un elemento del carrito de compras porque el useState cart esta derivado (isEmpty y cartTotal del componente Header) y depende de este useStare cart
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id));
  }

  function increaseQuantity(id: Guitar['id']) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function decreaseQuantity(id: Guitar['id']) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]);
  }

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal
  }
}