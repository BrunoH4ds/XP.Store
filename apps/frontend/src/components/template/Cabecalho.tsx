'use client';

import { useState } from 'react';
import Logo from '../shared/Logo';
import IconeCarrinho from '../shared/IconeCarrinho';
import CartPopup from '../produto/CartPopup';
import { useCart } from '../context/CartContext'; // Importa o contexto

export default function Cabecalho() {
    const { cartItems } = useCart(); // Usa o estado do contexto
    const [isCartOpen, setIsCartOpen] = useState(false); // Controla a visibilidade do popup

    return (
        <div className="flex flex-col h-20 bg-black/40 z-30"> {/* Removi o backdrop-blur do cabeçalho */}
            <div className="flex-1 container flex flex-col justify-center">
                <div className="flex justify-between items-center">
                    <Logo />

                    {/* Ícone do carrinho */}
                    <div>
                        <IconeCarrinho
                            qtdeItens={cartItems.length}
                            onClick={() => setIsCartOpen(true)} // Abre o popup ao clicar no carrinho
                        />
                    </div>

                    {/* Popup do carrinho */}
                    <CartPopup
                        isOpen={isCartOpen}
                        onClose={() => setIsCartOpen(false)} // Fecha o popup
                    />
                </div>
            </div>
            <div className="h-px bg-white/30"></div>
        </div>
    );
}
