'use client';

import React, { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.log(error);
        }
    };

    return [storedValue, setValue];
}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useLocalStorage('cart', [])

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id)
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
            return [...prevCart, { ...product, quantity: 1 }]
        })
    }

    const updateQuantity = (id, newQuantity) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
            ).filter(item => item.quantity > 0)
        )
    }

    const removeItem = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id))
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}