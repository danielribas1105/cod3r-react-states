import Estatistica from "./estatistica"

export default function Estatisticas() {
	return (
		<div className="flex justify-around items-center bg-zinc-700 rounded-lg w-4/5 h-24">
			<Estatistica valor={10} texto="Qtde Aulas" />
			<Estatistica valor={5} texto="Aulas Concluídas" />
			<Estatistica valor="2h 30m" texto="Duração Total" />
			<Estatistica valor="1h 24m" texto="Duração Concluída" />
			<Estatistica valor="58%" texto="Perc. Concluído Total" />
		</div>
	)
}
