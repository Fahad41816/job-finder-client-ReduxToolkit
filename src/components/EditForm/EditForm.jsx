import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from "react-redux"
import { updateJob } from '../../features/jobs/JobsSlice';

const EditForm = () => {

    const {editJob} = useSelector((state) => state.jobsReducer)

    const dispatch = useDispatch()
    const [title, settitle] = useState("")
    const [type, settype] = useState("")
    const [salary, setsalary] = useState(0)
    const [deadline, setDeadline] = useState("")

    useEffect(()=>{
      if(editJob.id){
        settitle(editJob.title)
        settype(editJob.type)
        setsalary(editJob.salary)
        setDeadline(editJob.deadline)
      }else{
        settitle("")
        settype("")
        setsalary("")
        setDeadline("")
      }
    },[editJob])
  
    const edithandler = (e) => {
      e.preventDefault()
      dispatch(updateJob({ id: editJob.id, title, type, salary, deadline}))
    }

    return (
    <div className="max-w-3xl mx-auto">
        <form onClick={edithandler} className="space-y-6">
        <div className="fieldContainer">
            <label htmlFor="lws-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
            <select onChange={e => settitle(e.target.value)} id="lws-JobTitle" value={title} name="lwsJobTitle" required>
              <option value="" hidden selected>Select Job</option>
              <option>Software Engineer</option>
              <option>Software Developer</option>
              <option>Full Stack Developer</option>
              <option>MERN Stack Developer</option>
              <option>DevOps Engineer</option>
              <option>QA Engineer</option>
              <option>Product Manager</option>
              <option>Social Media Manager</option>
              <option>Senior Executive</option>
              <option>Junior Executive</option>
              <option>Android App Developer</option>
              <option>IOS App Developer</option>
              <option>Frontend Developer</option>
              <option>Frontend Engineer</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobType">Job Type</label>
            <select value={type} onChange={e => settype(e.target.value)} id="lws-JobType" name="lwsJobType" required>
              <option value="" hidden selected>Select Job Type</option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobSalary">Salary</label>
            <div className="flex border rounded-md shadow-sm border-slate-600">
              <span className="input-tag">BDT</span>
              <input value={salary} onChange={e=> setsalary(e.target.value)} type="number" name="lwsJobSalary" id="lws-JobSalary" required className="!rounded-l-none !border-0"
                placeholder="20,00,000" />
            </div>
          </div>

          <div className="fieldContainer">
            <label htmlFor="lws-JobDeadline">Deadline</label>
            <input value={deadline} onChange={e => setDeadline(e.target.value)} type="date" name="lwsJobDeadline" id="lws-JobDeadline" required />
          </div>

          <div className="text-right">
            <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
};

export default EditForm;