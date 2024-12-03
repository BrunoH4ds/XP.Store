import type { Metadata } from 'next'
import './globals.css'
import { Montserrat } from 'next/font/google'
import { CartProvider } from '../components/context/CartContext'

const font = Montserrat({
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'XP.Store',
    description: 'A versão mais básica da loja de jogos',
    icons: {
        icon: '/logo.png', // Caminho para o seu ícone
    },
}

// Apenas uma definição da função RootLayout
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body className={font.className}>
                <CartProvider> {/* Envolva com CartProvider */}
                    {children}
                </CartProvider>
            </body>
        </html>
    )
}
