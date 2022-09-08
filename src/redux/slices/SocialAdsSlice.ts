
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiConstants } from "../../config/ApiConstants";
import { axiosClient } from "../../config/Axios";
import { apiErrorTypes, commonInitialStateTypes } from "../../types/CommonTypes";
import { SocialAds, socialLink } from "../../types/SocialAdsTypes";

interface initialStateTypes extends commonInitialStateTypes {
    socialAdsList?: Array<SocialAds>
}

const initialState: initialStateTypes = {
    isLoading: false,
    socialAdsList: [],
}

const NAME = "SOCIAL"

export const getSocialAdsList = createAsyncThunk<SocialAds>(NAME + "/SocialList", async (_, { rejectWithValue }) => {
    try {
        console.log(`${ApiConstants.SOCIAL_ADS}`);
        const response = await axiosClient.get(ApiConstants.SOCIAL_ADS);
        return response?.data
    } catch (e: any) {
        return rejectWithValue(e)
    }
})

export const getSocialLink = createAsyncThunk<socialLink, number, { rejectValue: apiErrorTypes }>(NAME + "/SocialLink", async (params, { rejectWithValue }) => {
    try {
        console.log('API', `${ApiConstants.SOCIAL_ADS}` + params + `/select/`);
        const response = await axiosClient.post(ApiConstants.SOCIAL_ADS + params + `/select/`);
        return response?.data
    } catch (e: any) {
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
        builder.addCase(getSocialAdsList.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getSocialAdsList.fulfilled, (state, action) => {
            console.log({ action })
            state.isLoading = false
            state.socialAdsList = state.socialAdsList?.concat(action.payload)
        })
        builder.addCase(getSocialAdsList.rejected, (state, { payload, error }) => {
            state.isLoading = false
        })
    }
})

export const { } = AuthSlice.actions
export default AuthSlice.reducer