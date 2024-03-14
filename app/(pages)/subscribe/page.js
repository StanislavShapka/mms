"use client"
import React from 'react';
import {useForm} from "react-hook-form";
import subscribe from "@/app/_actions/subscribe";
export default function Page() {

  const {
    register,
    reset,
    handleSubmit
  } = useForm()

  const inSubmit = async (data) => {
    await subscribe(data)
    reset()
  }

  return (
    <div className={`flex justify-center items-center`}>
      <div className={`flex flex-col bg-[rgba(36,50,55,255)] w-full md:w-2/3`}>
        <div className={`uppercase text-slate-400 text-3xl lg:text-4xl py-8 px-3 border-b-2 border-white tracking-widest`}>
          newsletter
        </div>
        <div className={`px-3 py-3`}>
          <form className={`bg-black p-8`} onSubmit={handleSubmit(data => inSubmit(data))} >
            <h3>Sing up for the mailing list to get all of the latest news and updates!</h3>
            <p className={`mt-5 mb-2 text-xs`}>Indicates required</p>
            <div className={`md:flex md:gap-5`}>
              <p className={`uppercase text-xl`}>email address</p>
              <input className={`text-black`}
                     type="email"
                     name={`email`}
                     {...register('email', {required: true})}
              />
            </div>
              <button className={`uppercase bg-red-800 mt-5 text-black px-3 py-5 hover:bg-red-600 duration-300`}>subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

