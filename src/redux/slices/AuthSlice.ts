import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiConstants } from "../../config/ApiConstants";
import { axiosClient } from "../../config/Axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKeys } from "../../Utils/StorageKeys";
import { apiErrorTypes, commonInitialStateTypes } from "../../types/CommonTypes";
import { APP_URL } from "../../config/Host";
import { UserData } from "../../types/UserType";

interface initialStateTypes extends commonInitialStateTypes {
    userData: UserData | null
}

const initialState: initialStateTypes = {
    isLoading: false,
    userData: null,
}

interface paramsTypes {
    email: string,
    password: string
}

const NAME = "AUTH"

export const signInApiCall = createAsyncThunk<UserData, paramsTypes, { rejectValue: apiErrorTypes }>(NAME + "/SignInApi", async (params, { rejectWithValue }) => {
    try {
        console.log(`${ApiConstants.LOGIN}`, params);
        const response = await axiosClient.post(ApiConstants.LOGIN, params);
        console.log({ response })
        return response?.data
    } catch (e: any) {
        console.log("AAA error", e)
        return rejectWithValue(e)
    }
})

export const AuthSlice = createSlice({
    name: NAME,
    initialState,
    reducers: {
        // Normal Actions
    },
    extraReducers: (builder) => {
        builder.addCase(signInApiCall.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(signInApiCall.fulfilled, (state, action) => {
            state.isLoading = false
            state.userData = action.payload
            AsyncStorage.setItem(StorageKeys.AUTH_TOKEN, action.payload.token)
        })
        builder.addCase(signInApiCall.rejected, (state, { payload, error }) => {
            state.isLoading = false
        })
    }
})

export const { } = AuthSlice.actions
export default AuthSlice.reducer