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
            Hola, this is {this.state.name} from a ComponenteClase2<br />
            <button onClick={()=>{
                this.setState({name: "Kike"})
            }}>
                Cambiar nombre
            </button>
        </>
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps: Readonly<ComponenteProps>, prevState: Readonly<ComponenteState>, snapshot?: any): void {
        console.log("componentDidUpdate");
        console.log("Prev props");
        console.log(JSON.stringify(prevProps));
        console.log("current props");
        console.log(JSON.stringify(this.props));
        console.log("Prev state");
        console.log(JSON.stringify(prevState));
        console.log("current state");
        console.log(JSON.stringify(this.state));
    }

    componentWillUnmount(): void {
        console.log("componentWillUnmount");
    }
}

interface ComponenteState {
    name: string;
}