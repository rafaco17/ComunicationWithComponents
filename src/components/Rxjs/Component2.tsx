import { useEffect, useState } from "react";
import { sharingInformationServices } from "../../services/sharing-information.services"

const Component2 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const subscription$ = sharingInformationServices.getSubject().subscribe(data => {
            if (data){
                setCount(count + 1)
                console.log("Se envio informacion")
            } else {
                console.log("No se envio información")
            }
        });
        return () => {
            subscription$.unsubscribe()     // muy importante utilziarlo para que no halla una lluvia de solicitudes o observadores mirando sin tener impacto en nuestro codigo
        }
    }, [ count ])
    
    return (
        <div>Sumatoria: {count}</div>
    )
}

export default Component2