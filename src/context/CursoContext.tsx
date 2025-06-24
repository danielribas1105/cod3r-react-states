import { Aula, Capitulo } from "@/data/models"
import { createContext, useState } from "react"
import capitulosFake from "@/data/constants/capitulos"
import CursoEstatisticas from "@/data/models/CursoEstatisticas"

interface CursoContextProps {
	capitulos: Capitulo[]
	aulaAtual: Aula
	qtdeAulas: number
	aulasConcluidas: number
	duracaoTotal: string
	duracaoConcluida: string
	percentualConclusao: number
	selecionarAula: (aula: Aula) => void
	alternarConclusaoAula: (aula: Aula) => void
}

const CursoContext = createContext<CursoContextProps>({} as any)

export function CursoProvider(props: any) {
	const [capitulos, setCapitulos] = useState(capitulosFake)
	const [aulaAtual, setAulaAtual] = useState(capitulosFake[0].aulas[0])
	const cursoEstatisticas = new CursoEstatisticas(capitulos)

	function alternarConclusaoAula(aulaSelecionada: Aula) {
		const novosCapitulos = capitulos.map((capitulo) => {
			const novasAulas = capitulo.aulas.map((aula) => {
				return aula.ordem === aulaSelecionada.ordem
					? { ...aula, concluida: !(aula.concluida ?? false) }
					: aula
			})
			return { ...capitulo, aulas: novasAulas }
		})
		setCapitulos(novosCapitulos)
	}

	function selecionarAula(aula: Aula) {
		setAulaAtual(aula)
	}

	return (
		<CursoContext.Provider
			value={{
				capitulos,
				aulaAtual,
				selecionarAula,
				alternarConclusaoAula,
				get qtdeAulas() {
					return cursoEstatisticas.qtdeAulas()
				},
				get aulasConcluidas() {
					return cursoEstatisticas.aulasConcluidas()
				},
				get duracaoTotal() {
					return cursoEstatisticas.duracaoTotal()
				},
				get duracaoConcluida() {
					return cursoEstatisticas.duracaoConcluida()
				},
				get percentualConclusao() {
					return cursoEstatisticas.percentualConclusao()
				},
			}}
		>
			{props.children}
		</CursoContext.Provider>
	)
}

export default CursoContext
