import Carrinho from "@/components/loja/carrinho"
import Catalogo from "@/components/loja/catalogo"
import { CarrinhoProvider } from "@/context/CarrinhoContext"
import { CatalogoProvider } from "@/context/CatalogoContext"

export default function Loja() {
	return (
		<CarrinhoProvider>
			<CatalogoProvider>
				<div className="flex flex-col p-7 gap-4">
					<Carrinho />
					<Catalogo />
				</div>
			</CatalogoProvider>
		</CarrinhoProvider>
	)
}
