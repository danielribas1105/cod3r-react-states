import Area from "../templates/Area"

export default function Menos() {
	return (
		<Area titulo="Botão Menos" cor="bg-red-500">
			<button className="btn" onClick={() => console.log("Menos")}>
				-1
			</button>
		</Area>
	)
}
