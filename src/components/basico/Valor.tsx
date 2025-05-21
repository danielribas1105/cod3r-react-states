import { useContext } from "react"
import Area from "../templates/Area"
import ContadorContext from "@/context/ContadorContext"

export default function Valor() {
	const obj = useContext(ContadorContext)
	return (
		<Area titulo="Básico" cor="bg-blue-500">
			<span className="font-black text-6xl">{obj.numero}</span>
		</Area>
	)
}
