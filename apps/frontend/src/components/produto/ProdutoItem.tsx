'use client'

import { Produto } from '@gstore/core';
import { IconShoppingCartPlus } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import NotaReview from '../shared/NotaReview';
import { useCart } from '../context/CartContext'; // Importa o contexto

export interface ProdutoItemProps {
    produto: Produto;
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props;
    const { addToCart } = useCart(); // Usa a função do contexto para adicionar ao carrinho

    return (
        <Link
            href={`/produto/${produto.id}`}
            className="flex flex-col bg-black/30 border border-white/30 rounded-xl relative max-w-[350px] backdrop-blur-sm"
        >
            <div className="absolute flex justify-end top-2.5 right-2.5 z-10">
                <NotaReview nota={produto.nota} />
            </div>
            <div className="h-48 w-full relative">
                {produto.imagem && ( // Verifique se a imagem está presente
                    <Image
                        src={produto.imagem}
                        alt="Imagem do produto"
                        className="object-contain"
                        fill
                    />
                )}
            </div>
            <div className="flex-1 flex flex-col p-5 gap-3 border-t border-white/10">
                <span className="text-lg font-semibold">{produto.nome}</span>
                <span className="text-sm border-b border-dashed self-start">
                    {produto.especificacoes.destaque}
                </span>
                <div className="flex-1"></div>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-400 line-through">
                        de R${produto.precoBase}
                    </span>
                    <span className="text-xl font-semibold text-blue-400">
                        por R${produto.precoPromocional}
                    </span>
                </div>
                <button
                    className="flex justify-center items-center h-8 gap-2 bg-blue-600 hover:bg-blue-700 rounded-full"
                    onClick={(e) => {
                        e.preventDefault();
                        addToCart(produto); // Adiciona o produto ao carrinho
                    }}
                >
                    <IconShoppingCartPlus size={20} />
                    <span>Adicionar</span>
                </button>
            </div>
        </Link>
    );
}
