"use client";

const Proof = () => {
  return (
    <div className="grid grid-cols-2 gap-6 rounded-lg bg-indigo-500 p-6 md:grid-cols-4 md:gap-8 md:p-8">
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">200</div>
        <div className="text-sm text-indigo-200 sm:text-base">People</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">500+</div>
        <div className="text-sm text-indigo-200 sm:text-base">People</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">1000+</div>
        <div className="text-sm text-indigo-200 sm:text-base">Customers</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">A couple</div>
        <div className="text-sm text-indigo-200 sm:text-base">Coffee breaks</div>
      </div>
    </div>
  )
}


export default Proof;