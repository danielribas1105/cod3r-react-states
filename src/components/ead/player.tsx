import capitulos from "@/data/constants/capitulos"

export default function Player() {
	const aulaAtual = capitulos[0].aulas[0]
	return (
		<div className="flex flex-col justify-center items-center w-4/5 h-3/5 bg-zinc-700 rounded-lg p-3">
			<span className="text-2xl font-black">{aulaAtual.titulo}</span>
			<div className="aspect-video h-full p-5">
				<iframe
					width="100%"
					height="100%"
					src={aulaAtual.videoUrl}
					title="Essencial em Next.js - Fundamentos Essenciais para o Desenvolvimento de Aplicações"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</div>
		</div>
	)
}
