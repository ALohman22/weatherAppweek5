import { createSlice } from "@reduxjs/toolkit";


export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState: {
        value: false,
    },
    reducers: {
        setIsLoading: (state) => {
            state.value = !state.value
        },
      
    }
})

export const { setIsLoading } = isLoadingSlice.actions
export const selectLoading = (state) => state.isLoading.value
export default isLoadingSlice.reducer