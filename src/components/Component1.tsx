import { sharingInformationServices } from "../services/sharing-information.services"

const Component1 = () => {
    const handleClick = () => {
        sharingInformationServices.setSubject(true)
    }    

    const handleClickNo = () => {
        sharingInformationServices.setSubject(false)
    }  

    return (
        <div>
            <button onClick={handleClick}>Enviar información</button>
            <button onClick={handleClickNo}>No enviar información</button>
        </div>
    )
}

export default Component1