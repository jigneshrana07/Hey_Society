import { store } from "../redux/Store"

export interface apiErrorTypes {
    status: string | number
}

export type AppDispatch = typeof store.dispatch

export interface commonInitialStateTypes {
    isLoading: boolean
}
