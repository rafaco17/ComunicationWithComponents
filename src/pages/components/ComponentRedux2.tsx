import { useSelector } from "react-redux"
import type { RootState } from '../../redux/store'      // importante para tener autocompletado y el tipo de información que nos viene

const ComponentRedux2 = () => {
    const userState = useSelector((store: RootState) => store.user);
    // console.log(userState["email"]) de esa forma podemos selecionar lo que nos viene 
    return (
        <div>
            El state del user es: {JSON.stringify(userState)}
        </div>
    )
}

export default ComponentRedux2