import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import EditForm from '../../components/EditForm/EditForm';

const EditJob = () => {
    return (
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
    <div className="sidebar">
        <Sidebar/>
    </div>
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

        <EditForm/>
      </main>
    </div>
  </div>
    );
};

export default EditJob;