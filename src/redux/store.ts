import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/user";

export const GentlemanStore = configureStore({
    reducer: {  // aca vamos a tener una colección de reduces que en este ejercicio lo tenemos en una carpeta states
        user: userSlice.reducer,
    }
});

export type RootState = ReturnType<typeof GentlemanStore.getState> // se utiliza en el useSelector
// export type AppDispatch = typeof GentlemanStore.dispatch  // TODAVIA NOSE DONDE USARLO