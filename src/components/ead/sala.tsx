import Estatisticas from "./estatisticas"
import Player from "./player"

export default function Sala() {
	return (
		<div className="flex">
			<div className="bg-zinc-800 w-96 h-screen overflow-auto"></div>
			<div className="flex flex-col flex-1 justify-center items-center gap-4">
				<Estatisticas />
				<Player />
			</div>
		</div>
	)
}
