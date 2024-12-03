import { IconShoppingCart } from '@tabler/icons-react'

export interface IconeCarrinhoProps {
    qtdeItens: number;
    onClick: () => void; // Adicionamos a prop onClick para abrir o popup
}

export default function IconeCarrinho(props: IconeCarrinhoProps) {
    return (
        <div
            onClick={props.onClick}
            className="flex justify-center items-center rounded-full w-14 h-14 bg-transparent relative hover:border border-white/30 cursor-pointer"
        >
            <IconShoppingCart size={30} stroke={1.3} />
            <div
                className="
                    flex items-center justify-center
                    absolute top-2 right-2 w-5 h-5 
                    bg-blue-500 text-white 
                    text-xs font-semibold rounded-full 
                "
            >
                {props.qtdeItens ?? 0}
            </div>
        </div>
    )
}
