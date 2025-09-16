import { JSX } from "react"

interface ComponenteHijoProps {
    name:string
    apellido1:string
    apellido2?:string
    edad:number
    clickReturnName: (nameComplete: string) => void
}

export function ComponenteHijo (props:ComponenteHijoProps):JSX.Element {

    const devolverNombre = () => {
        const nombreCompleto = props.name + ' ' + props.apellido1 + ' ' + (props.apellido2 || '')
        //console.log(nombreCompleto)
        props.clickReturnName(nombreCompleto)
    }

    return <>
        Hola, {props.name + ' ' +props.apellido1 + ' '}{(props.apellido2!= undefined)? props.apellido2:null}<br/>
        Edad: {props.edad} años.
        <button
            onClick={()=> {
                devolverNombre()
            }}
        >
            Devolver nombre completo
        </button>
    </>
}