import { useGentlemanContext } from "../context/gentlemanContext";

const ComponentContext1 = () => {
    const { setGentlemanContextValue } = useGentlemanContext()
    
    const handleClick = () => {
        setGentlemanContextValue('VALOR CAMBIADO');
    }

    return (
        <div><button onClick={handleClick}>Enviar información por un context</button></div>
    )
}

export default ComponentContext1;