import Area from "../templates/Area"
import CarrinhoVazio from "./carrinhoVazio"

export default function Carrinho() {
	return (
		<Area titulo="Carrinho" cor="bg-green-500">
			<CarrinhoVazio />
		</Area>
	)
}
