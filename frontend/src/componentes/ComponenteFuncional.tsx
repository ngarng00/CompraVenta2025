interface ComponenteFuncionalProps {
    name: string;
}

export const ComponenteFuncional: React.FC<ComponenteFuncionalProps> = ({name}) => {
    return (<>
        {name} HolaMundo Funcional 
    </>)
}