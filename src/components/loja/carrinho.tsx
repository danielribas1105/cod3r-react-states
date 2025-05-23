import { useContext } from "react"
import Area from "../templates/Area"
import CarrinhoVazio from "./carrinhoVazio"
import CarrinhoContext from "@/context/CarrinhoContext"

export default function Carrinho() {
	const { itens } = useContext(CarrinhoContext)

	return (
		<Area titulo="Carrinho" cor="bg-green-500">
			{itens.length === 0 ? (
				<CarrinhoVazio />
			) : (
				<div>Total de itens: {itens.length}</div>
			)}
		</Area>
	)
}
