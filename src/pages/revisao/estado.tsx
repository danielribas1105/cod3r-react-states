import Area from "@/components/templates/Area"
import { useState } from "react"

export default function Estado() {
    const [texto, setTexto] = useState('')

    return (
        <div className="p-20">
            <Area titulo="Revisão Estado" cor="bg-sky-500">
                <input type="text" className="input" value={texto} onChange={e => {setTexto(e.target.value)}}/>
            </Area>
        </div>
    )
}