import React from 'react'

function upload() {
  return (
    <div className="">
      <div className="flex flex-col px-4 md:px-[5%] py-5 gap-y-5">
        <h1>Upload Data</h1>
        <p className="py-2 mt-2 bg-dashboardPurple text-white p-2 text-sm rounded-md">
          Upload documents and files in PDF format so that they can be stored in our database to create future content for you.
        </p>
        <button className='bg-white py-3 w-1/2 sm:w-1/6 rounded-full text-white font-semibold text-sm ml-auto'>
            Upload Data
        </button>
        <div className="hidden md:flex text-sm font-semibold shadow-md">
          <p className="w-1/4 border-r-2 text-center py-4">File Name</p>
          <p className="w-1/4 border-r-2 text-center py-4">Subject</p>
          <p className="w-1/4 border-r-2 text-center py-4">Grade</p>
          <p className="w-1/4 border-r-2 text-center py-4">Last Uploaded</p>
        </div>
      </div>
    </div>
  )
}

export default upload
