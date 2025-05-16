import Area from "../templates/Area";

interface GerarNumeroProps {
    n1: number
    n2: number
    gerarNumero: (resultado: number) => void
}

export default function GerarNumero(props: GerarNumeroProps) {
    const min = Math.min(props.n1, props.n2)
    const max = Math.max(props.n1, props.n2)

    function gerar() {
        const aleatorio = Math.round(Math.random() * (max - min) + min)
        props.gerarNumero?.(aleatorio)
    }

    return (
        <Area titulo="Gerar Número" cor="bg-blue-500">
            <div className="flex flex-col items-center gap-5">
                <div className="flex justify-center gap-5 text-2xl">
                    <span>Mínimo: {min}</span>
                    <span>Máximo: {max}</span>
                </div>
                <button className="btn" onClick={gerar}>Gerar</button>
            </div>
        </Area>
    )
}