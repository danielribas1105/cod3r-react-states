import { Aula } from "@/data/models"
import AulaConclusao from "./aulaConclusao"
import { IconVideo } from "@tabler/icons-react"
import { useContext } from "react"
import CursoContext from "@/context/CursoContext"

interface AulaItemProps {
	aula: Aula
	selecionada: boolean
}

export default function AulaItem(props: AulaItemProps) {
	const { aula, selecionada } = props
	const { selecionarAula, alternarConclusaoAula } = useContext(CursoContext)
	return (
		<div className="flex items-center gap-2 py-1 pr-4">
			<AulaConclusao concluida={aula.concluida ?? false} onClick={() => alternarConclusaoAula(aula)} />
			<div className="flex flex-col flex-1 cursor-pointer" onClick={() => selecionarAula(aula)}>
				<span className={`${selecionada && "text-yellow-400"}`}>
					{aula.ordem}. {aula.titulo}
				</span>
				<span className="-mt-1 text-xs text-zinc-400">
					Duração de {Math.floor(aula.duracao / 60)}m
				</span>
			</div>
			<IconVideo size={20} className="text-zinc-500" />
		</div>
	)
}
