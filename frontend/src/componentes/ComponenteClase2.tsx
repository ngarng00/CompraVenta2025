import React from "react";

interface ComponenteProps {
    name: string;
}

export class ComponenteClase2 extends React.Component<ComponenteProps, ComponenteState> {
    
    constructor(props: ComponenteProps) {
        super(props);
        this.state = {
            name: this.props.name
        }

        console.log("constructor");
    }

    render() {
        console.log("render");
        return <>
            Hola, this is {this.state.name} from a ComponenteClase2
        </>
    }


}

interface ComponenteState {
    name: string;
}