'use client';

import { useCart } from '../context/CartContext'; // Ajuste o caminho conforme necessário
import Link from 'next/link';

export interface CartPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartPopup({ isOpen, onClose }: CartPopupProps) {
    const { cartItems, removeFromCart, getTotal } = useCart();

    return (
        <>
            {/* Overlay com blur aplicado */}
            {isOpen && (
                <div
                    className="fixed inset-0"
                    onClick={onClose} // Fecha o popup ao clicar no fundo
                />
            )}

            {/* Popup do carrinho */}
            <div
                className={`fixed top-0 right-0 w-96 bg-black/30 backdrop-blur-sm text-white border border-white/30 shadow-lg p-5 rounded-lg
                    transition-transform duration-300 transform
                    ${isOpen ? '-translate-x-10 translate-y-28' : 'translate-x-full translate-y-28'}
                    m-0
                    z-60
                `}
            >
                {/* Cabeçalho do Carrinho */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Seu Carrinho</h2>
                    <button onClick={onClose} className="text-red-600 font-bold">X</button>
                </div>

                {/* Itens do Carrinho */}
                {cartItems.length > 0 ? (
                    <ul className={`mb-4 ${cartItems.length > 2 ? 'max-h-44 overflow-y-auto scrollable' : ''}`}>
                        {cartItems.map((item, index) => (
                            <li key={index} className="flex justify-between items-center h-20 mb-2 p-2 bg-black/30 backdrop-blur-sm border border-white/30 rounded-md ">
                                <span className='pr-4'>{item.nome}</span>
                                <span className="font-semibold pr-2">{item.quantidade}x</span>
                                <span className="font-semibold pr-4">R${(item.precoPromocional * item.quantidade).toFixed(2)}</span>
                                <button onClick={() => removeFromCart(item.nome)} className="text-red-500 ml-2">Remover</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-400">Seu carrinho está vazio.</p>
                )}

                {/* Total e Botão de Checkout */}
                <div className="flex justify-between items-center border-t border-gray-600 pt-4 mt-4">
                    <span className="font-semibold">Total:</span>
                    <span className="text-xl font-bold">R$ {getTotal().toFixed(2)}</span>
                </div>
                <div className="mt-4">
                    <Link href="/checkout">
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition duration-200">
                            Finalizar
                        </button>
                    </Link>
                </div>

                {/* Mensagem para o usuário */}
                {cartItems.length > 2 && (
                    <div>
                        <p className='text-center pt-4'>Deslize os itens do carrinho para ver mais</p>
                    </div>
                )}
            </div>
        </>
    );
}
