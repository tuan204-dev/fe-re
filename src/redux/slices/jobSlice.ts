import { IJob } from "@/types/job";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JobSliceState {
    selectedJob: IJob | null
}

const initialState: JobSliceState = {
    selectedJob: null
}

export const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        updateSelectedJob: (state, action: PayloadAction<IJob | null>) => {
            state.selectedJob = action.payload;
        }
    }
})

export const { updateSelectedJob } = jobSlice.actions;

export default jobSlice.reducer;