import { ItemCarrinho, Produto } from "@/data/models"
import { createContext, useState } from "react"

interface CarrinhoProviderProps {
    itens: ItemCarrinho[]
    adicionarItem: (produto: Produto) => void
}

const CarrinhoContext = createContext<CarrinhoProviderProps>({} as any)

export function CarrinhoProvider(props: any) {
    const [ itens, setItens ] = useState<ItemCarrinho[]>([])

    function adicionarItem(produto: Produto) {
        setItens([...itens, { produto, quantidade: 1}])
    }

    return (
        <CarrinhoContext.Provider value={{
            itens, adicionarItem
            
        }}>
            {props.children}
        </CarrinhoContext.Provider>
    )
}

export default CarrinhoContext