import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import { fetchCreateJob, fetchDeleteJob, fetchEditjob, fetchJobs } from "./jobsApi"


// initisalState 
const initialState = {
    isLoading : false,
    isError : false,
    Error : "",
    jobs : [],
    editJob:{}
}


// async thunk 
export const AllJobs =  createAsyncThunk("fetch/allJobs", async()=>{
    const response = await fetchJobs()
    return response
})

export const CreateJob = createAsyncThunk("fetch/createJob", async({title, type, salary, deadline})=>{

    const response = await fetchCreateJob(title, type, salary, deadline)
    return response

})

export const updateJob = createAsyncThunk("fetch/updateJob", async({id, title, type, salary, deadline})=>{

    const response = await fetchEditjob(id,title, type, salary, deadline)
    return response

})
export const DelteJob = createAsyncThunk("fetch/deleteJob", async(id)=>{

    const response = await fetchDeleteJob(id)
    return response

})
// async thunk 


const jobsReducer = createSlice({
    name:"jobs",
    initialState,
    reducers:{
        editjob: (state, action) => {
            state.editJob = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(AllJobs.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(AllJobs.fulfilled, (state, action)=>{
                state.jobs = action.payload
                console.log(action.payload)
            })
            .addCase(AllJobs.rejected, (state, action)=>{
                state.isError = true,
                state.Error = action.error.message
            })
            .addCase(CreateJob.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(CreateJob.fulfilled, (state, action)=>{
                state.jobs.push(action.payload)
            })
            .addCase(CreateJob.rejected, (state, action)=>{
                state.isError = true,
                state.Error = action.error.message
            })
            .addCase(updateJob.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(updateJob.fulfilled, (state, action)=>{
                const findIndex = state.jobs.findIndex((job)=> job.id === action.payload.id)
                state.jobs[findIndex] = action.payload
            })
            .addCase(updateJob.rejected, (state, action)=>{
                state.isError = true,
                state.Error = action.error.message
            })
            .addCase(DelteJob.pending, (state)=>{
                state.isLoading = true
            })
            .addCase(DelteJob.fulfilled, (state, action)=>{
                state.jobs = state.jobs.filter((job)=> job.id !==  action.meta.arg)
                
            })
            .addCase(DelteJob.rejected, (state, action)=>{
                state.isError = true,
                state.Error = action.error.message
            })
    }
})

export default jobsReducer.reducer;
export const jobAction = jobsReducer.actions