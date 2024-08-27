import ComponentContext1 from "./components/ComponentContext1"
import ComponentContext2 from "./components/ComponentContext2"
import { GentlemanProvider } from "./context/gentlemanContext"


const Gentleman = () => {
    return (
        <GentlemanProvider>
            <div>
                <ComponentContext1 />
                <ComponentContext2 />
            </div>
        </GentlemanProvider>
    )
}

export default Gentleman