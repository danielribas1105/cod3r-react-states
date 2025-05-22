import produtos from "@/data/constants/produtos"
import Area from "../templates/Area"
import ProdutoCart from "./produtoCard"

export default function Catalogo() {
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
