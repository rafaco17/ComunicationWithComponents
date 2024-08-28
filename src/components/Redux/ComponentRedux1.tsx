import { useDispatch } from "react-redux"
import { createUser, modifyUser, resetUser } from "../../redux/states/user";

const ComponentRedux1 = () => {
    const dispatcher = useDispatch()

    const handleClick = () => {
        dispatcher(createUser({name : 'Alan', email: 'riechevarriam'}));
    }

    const handleClickModify = () => {
        dispatcher(modifyUser({name : 'Rafa'}))
    }

    const handleClickReset = () => {
        dispatcher(resetUser(undefined))
    }

    return (
        <div>
            <button onClick={handleClick}>Enviar Informacion Redux, createUser</button>
            <button onClick={handleClickModify}>Enviar Informacion Redux, modifyUser</button>
            <button onClick={handleClickReset}>Enviar Informacion Redux, resetUser</button>
        </div>
    )
}

export default ComponentRedux1