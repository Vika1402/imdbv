import React, { useState } from "react";

function Pagination({next,prev,pageNo}) {
 

  
  return (
    <div>
      <div className="flex justify-center gap-4 text-2xl font-bold mt-5 items-center bg-slate-500/45">
        <button onClick={prev} className=" rounded-full p-2">{`<`}</button>
        <p className="text-3xl">{pageNo}</p>
        <button onClick={next} className=" rounded-full p-2">{`>`}</button>
      </div>
    </div>
  );
}

export default Pagination;
