import Area from "../templates/Area"
import ProdutoCart from "./produtoCard"
import { useContext } from "react"
import CatalogoContext from "@/context/CatalogoContext"

export default function Catalogo() {
	const { produtos } = useContext(CatalogoContext)

	function renderizarProdutos() {
		return produtos.map((prod) => {
			return <ProdutoCart key={prod.id} produto={prod} />
		})
	}

	return (
		<Area titulo="Carrinho" cor="bg-purple-500">
			<div className="flex flex-wrap justify-around gap-4"> {renderizarProdutos()}</div>
		</Area>
	)
}
