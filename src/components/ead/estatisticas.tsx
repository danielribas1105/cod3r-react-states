import { useContext } from "react"
import Estatistica from "./estatistica"
import CursoContext from "@/context/CursoContext"

export default function Estatisticas() {
	const { qtdeAulas, aulasConcluidas, duracaoTotal, duracaoConcluida, percentualConclusao } =
		useContext(CursoContext)
	return (
		<div className="flex justify-around items-center bg-zinc-700 rounded-lg w-4/5 h-24">
			<Estatistica valor={qtdeAulas} texto="Qtde Aulas" />
			<Estatistica valor={aulasConcluidas} texto="Aulas Concluídas" />
			<Estatistica valor={duracaoTotal} texto="Duração Total" />
			<Estatistica valor={duracaoConcluida} texto="Duração Concluída" />
			<Estatistica valor={`${percentualConclusao}%`} texto="Perc. Concluído Total" />
		</div>
	)
}
