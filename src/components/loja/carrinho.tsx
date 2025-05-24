import { useContext } from "react"
import Area from "../templates/Area"
import CarrinhoVazio from "./carrinhoVazio"
import CarrinhoContext from "@/context/CarrinhoContext"
import ItemCarrinhoCard from "./itemCarrinhoCard"
import Real from "@/utils/Real"
import { IconX } from "@tabler/icons-react"

export default function Carrinho() {
	const { itens, valorTotal, limpar } = useContext(CarrinhoContext)

	return (
		<Area titulo="Carrinho" cor="bg-green-500" sumario={Real.format(valorTotal)}>
			<div className="flex flex-wrap justify-center gap-4">
				{itens.length === 0 ? (
					<CarrinhoVazio />
				) : (
					itens.map((item) => {
						return <ItemCarrinhoCard key={item.produto.id} item={item} />
					})
				)}
				{itens.length > 0 && (
					<button
						className="flex gap-2 self-center w-44 items-center justify-center p-1 rounded-md bg-red-500"
						onClick={limpar}
					>
						<IconX />
						Limpar Carrinho
					</button>
				)}
			</div>
		</Area>
	)
}
