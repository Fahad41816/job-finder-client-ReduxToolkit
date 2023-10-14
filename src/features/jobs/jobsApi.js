import Axios from '../../utils/Axios'

// fetch jobs 
export const fetchJobs = async() => {
    const response = await Axios.get('/jobs')
    return response.data
}

// create job 
export const fetchCreateJob = async(title, type, salary, deadline) => {
    const response = await Axios.post('/jobs', {
        title,
        type,
        salary,
        deadline
    })
    return response.data
}

export const fetchEditjob = async(id,title, type, salary, deadline) => {
    
    const response = await Axios.put(`/jobs/${id}`, {
        title,
        type,
        salary,
        deadline
    })
    return response.data

}

export const fetchDeleteJob = async(id) => {

    const response =await Axios.delete(`/jobs/${id}`)
    return response.data

}