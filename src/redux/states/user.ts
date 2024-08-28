import { createSlice } from "@reduxjs/toolkit";

export const UserEmptyState = {
    name: '',
    email: '',
}

export const userSlice = createSlice({
    name: "user",
    initialState: UserEmptyState,
    reducers: {
        createUser: (state, action) => { //state es el valor actual que se encuentra en el Slice
            return action.payload;    // lo que retornamos va tomar como valor el state
        },
        modifyUser: (state, action) => {
            return { ...state, ... action.payload } // solo vamos a remplazar aquel atributo que enviemos en action payload de nuestro state, es decir si solo enviamos name, solo remplazara name pero email lo dejara intacto
        },
        resetUser: (state, action) => {
            return UserEmptyState;
        }
    }
})

export const { createUser, modifyUser, resetUser } = userSlice.actions