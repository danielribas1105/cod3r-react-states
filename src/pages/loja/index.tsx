import Carrinho from "@/components/loja/carrinho"
import Catalogo from "@/components/loja/catalogo"

export default function Loja() {
	return (
		<div className="flex flex-col p-7 gap-4">
			<Carrinho />
			<Catalogo />
		</div>
	)
}
