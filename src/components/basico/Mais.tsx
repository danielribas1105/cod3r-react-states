import Area from "../templates/Area"

export default function Mais() {
	return (
		<Area titulo="Botão Mais" cor="bg-green-500">
			<button className="btn" onClick={() => console.log("Mais")}>
				+1
			</button>
		</Area>
	)
}
