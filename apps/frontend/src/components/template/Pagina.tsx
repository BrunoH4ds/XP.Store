import Cabecalho from './Cabecalho'
import Rodape from './Rodape'

export interface PaginaProps {
    className?: string
    children: any
    semCabecalho?: boolean
    semRodape?: boolean
    semContainer?: boolean
    semPadding?: boolean
}

export default function Pagina(props: PaginaProps) {
    return (
        <div
            className="flex flex-col min-h-screen overflow-x-hidden bg-black/50"
        >
            <div
                className="flex-1 flex flex-col w-screen h-screen bg-no-repeat bg-cover bg-blend-darken"
                style={{ backgroundImage: 'url("/background.png")' }}
            >
                {props.semCabecalho ? null : <Cabecalho />}
                <main
                    className={`
                        flex-1 flex flex-col ${props.className ?? ''}
                        ${props.semContainer ? '' : 'container'}
                        ${props.semPadding ? '' : 'py-10'}
                    `}
                >
                    {props.children}
                </main>
                {props.semRodape ? null : <Rodape />}
            </div>
        </div>
    )
}
