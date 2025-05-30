import { useContext } from "react"
import Area from "../templates/Area"
import ContadorContext from "@/context/ContadorContext"

export default function Mais() {
	const { incrementar } = useContext(ContadorContext)
	return (
		<Area titulo="Botão Mais" cor="bg-green-500">
			<button className="btn" onClick={incrementar}>
				+1
			</button>
		</Area>
	)
}
