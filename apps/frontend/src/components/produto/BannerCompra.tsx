import { IconCreditCard, IconShoppingCart } from '@tabler/icons-react'
import { Moeda, Produto } from '@gstore/core'
import useParcelamento from '@/data/hooks/useParcelamento'
import { useCart } from '../context/CartContext'; // Importa o contexto
import Link from 'next/link';

export interface BannerCompraProps {
    produto: Produto
}

export default function BannerCompra(props: BannerCompraProps) {
    const { produto } = props
    const parcelamento = useParcelamento(produto.precoPromocional)
    const { addToCart } = useCart();

    return (
        <div className="flex">
            <div className="flex flex-col border-r border-zinc-500 pr-5">
                <div className="line-through text-zinc-400">de R$ {produto?.precoBase}</div>
                <div className="text-2xl font-semibold">
                    <span className="text-base text-zinc-300">por</span>{' '}
                    <span className="text-blue-500">R$ {produto?.precoPromocional}</span>{' '}
                    <span className="text-base text-zinc-300">à vista</span>
                </div>
            </div>
            <div className="flex-1 flex flex-col text-2xl font-semibold text-blue-500 pl-5">
                <span className="text-base text-zinc-300">{parcelamento.qtdeParcelas}x de</span>
                {Moeda.formatar(parcelamento.valorParcela)}{' '}
            </div>
            <div className="flex gap-2 items-center">
                <button className="flex-1 button bg-blue-600 hover:bg-blue-700"
                onClick={(e) => {
                    e.preventDefault();
                    addToCart(produto); // Adiciona o produto ao carrinho
                }}
                >
                    <IconShoppingCart size={20} />
                    <span>Adicionar</span>
                </button>
                <Link href="/checkout">
                    <button className="flex-1 button bg-green-600 hover:bg-green-700">
                        <IconCreditCard size={20} />
                        <span>Comprar</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}
