import { createContext } from "react"
import Produto from '../data/models/Produto'
import produtos from "@/data/constants/produtos"

export interface CatalogoContextProps {
    produtos: Produto[]
}

const CatalogoContext = createContext<CatalogoContextProps>({} as any)

export function CatalogoProvider(props: any) {

    return (
        <CatalogoContext.Provider value={{
            produtos
        }}>
            {props.children}
        </CatalogoContext.Provider>
    )
}

export default CatalogoContext