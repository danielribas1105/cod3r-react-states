import Link from "next/link"
import { ElementType } from "react"

interface MenuItemProps {
    url: string
    texto: string
    icone: ElementType
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <Link href={props.url} className="flex flex-col items-center gap-2">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full p-5">
                <props.icone size={80} stroke={1} className="opacity-40"/>
            </div>
            <span className="opacity-40 font-black text-3xl">{props.texto}</span>
        </Link>
    )
}