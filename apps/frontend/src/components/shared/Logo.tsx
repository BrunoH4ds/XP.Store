import Image from 'next/image';
import Link from 'next/link';

export interface Image_logo_props {
    height?: number;
    width?: number;
}

export interface Image_logo_texto_props {
    width?: number;
    height?: number;
}

export interface LogoProps extends Image_logo_props, Image_logo_texto_props {}

export default function Logo({ height = 60, width = 60, width: textoWidth = 100, height: textoHeight = 0 }: LogoProps) {
    return (
        <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" height={height} width={width} alt="logo" />
            <Image src="/logo-texto.png" width={textoWidth} height={textoHeight} alt="logo" />
        </Link>
    );
}
