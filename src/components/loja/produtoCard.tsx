import { Produto } from "@/data/models"
import Real from "@/utils/Real"
import { IconShoppingCart } from "@tabler/icons-react"
import Image from "next/image"

interface ProdutoCartProps {
	produto: Produto
}

export default function ProdutoCart(props: ProdutoCartProps) {
	const { produto } = props
	return (
		<div className="flex flex-col gap-3 p-2 bg-black rounded-md overflow-hidden">
			<Image
				src={produto.imagem}
				alt="Imagem do produto"
				width={300}
				height={150}
				className="rounded-md"
			/>
			<div className="flex justify-between items-center px-4">
				<span className="font-black text-xl">{produto.nome}</span>
				<span className="text-green-400">{Real.format(produto.preco)}</span>
			</div>
			<p className="px-4 text-sm text-zinc-400">{produto.descricao}</p>
			<button className="flex justify-center gap-2 btn-info">
				<IconShoppingCart /> Adicionar
			</button>
		</div>
	)
}
