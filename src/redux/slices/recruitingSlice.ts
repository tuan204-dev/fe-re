import { IRecruiting } from "@/types/job";
import { IWorker } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RecruitingSliceState {
    selectedRecruiting: IRecruiting | null
    selectedWorker: IWorker | null
}

const initialState: RecruitingSliceState = {
    selectedRecruiting: null,
    selectedWorker: null
}

export const recruitingSlice = createSlice({
    name: 'recruiting',
    initialState,
    reducers: {
        updateRecruiting: (state, action: PayloadAction<IRecruiting | null>) => {
            state.selectedRecruiting = action.payload;
        },
        updateSelectedWorker: (state, action: PayloadAction<IWorker | null>) => {
            state.selectedWorker = action.payload;
        }
    }
})

export const { updateRecruiting, updateSelectedWorker } = recruitingSlice.actions;

export default recruitingSlice.reducer;