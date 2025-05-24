import { ItemCarrinho, Produto } from "@/data/models"
import { createContext, useState } from "react"

interface CarrinhoProviderProps {
	itens: ItemCarrinho[]
	valorTotal: number
	adicionarItem: (produto: Produto) => void
	removerItem: (produto: Produto) => void
	limpar: () => void
}

const CarrinhoContext = createContext<CarrinhoProviderProps>({} as any)

export function CarrinhoProvider(props: any) {
	const [itens, setItens] = useState<ItemCarrinho[]>([])

	function adicionarItem(produto: Produto) {
		const item = itens.find((i) => i.produto.id === produto.id) ?? { produto, quantidade: 0 }
		const novoItem = { ...item, quantidade: item.quantidade + 1 }
		const outrosItens = itens.filter((i) => i.produto.id !== produto.id)
		setItens([...outrosItens, novoItem].sort(ordenarItem))
	}

	function removerItem(produto: Produto) {
		const novosItens = itens
			.map((item) => {
				return item.produto.id === produto.id ? { ...item, quantidade: item.quantidade - 1 } : item
			})
			.filter((item) => item.quantidade > 0)
		setItens(novosItens)
	}

	function limpar() {
		setItens([])
	}

	function calcularValorTotal() {
		return itens.reduce((total: number, item: ItemCarrinho) => {
			return total + item.quantidade * item.produto.preco
		}, 0)
	}

	function ordenarItem(a: ItemCarrinho, b: ItemCarrinho) {
		return a.produto.nome > b.produto.nome ? 1 : -1
	}

	return (
		<CarrinhoContext.Provider
			value={{
				itens,
				get valorTotal() {
					return calcularValorTotal()
				},
				adicionarItem,
				removerItem,
				limpar,
			}}
		>
			{props.children}
		</CarrinhoContext.Provider>
	)
}

export default CarrinhoContext
