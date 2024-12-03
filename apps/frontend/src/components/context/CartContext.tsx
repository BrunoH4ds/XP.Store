'use client'

import React, { createContext, useContext, useState } from 'react';

interface CartItem {
    nome: string;
    precoPromocional: number; // Alterado para usar precoPromocional
    quantidade: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemName: string) => void;
    getTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (item: CartItem) => {
        const existingItem = cartItems.find(cartItem => cartItem.nome === item.nome);
        if (existingItem) {
            existingItem.quantidade += 1; // Aumenta a quantidade se já existe
            setCartItems([...cartItems]); // Atualiza o estado
        } else {
            setCartItems(prevItems => [...prevItems, { ...item, quantidade: 1 }]);
        }
    };

    const removeFromCart = (itemName: string) => {
        setCartItems(prevItems => prevItems.filter(item => item.nome !== itemName));
    };

    const getTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + (item.precoPromocional * item.quantidade); // Usando precoPromocional
        }, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
