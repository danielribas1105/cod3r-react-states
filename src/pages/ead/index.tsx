import Sala from "@/components/ead/sala"
import { CursoProvider } from "@/context/CursoContext"

export default function SalaEad() {
	return (
		<CursoProvider>
			<Sala />
		</CursoProvider>
	)
}
