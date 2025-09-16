import { JSX, useEffect, useState } from "react";

interface ComponenteFuncional2Props{
    name:string;
}

export function ComponenteFuncional2(props: ComponenteFuncional2Props): JSX.Element{

    const [name, setName] = useState<string>(props.name);

    useEffect(()=> {
        console.log('UseEffect' + props.name);
    }, [props.name])

    return <>
        Hola, {name}<br/>
        <button onClick={
            () => {
                setName('Luis Enrique');
            }
        }
        >Cambiar nombre </button>
    </>
}