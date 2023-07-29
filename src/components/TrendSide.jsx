import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

import { BiSearchAlt2 } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

const TrendSide = () => {
    return (
        <div className='py-7 px-2 hidden invisible md:visible md:block bg-white h-screen'>
            <div className="search bg-blue-300  rounded-full relative w-[100%]">
                <BiSearchAlt2 color='#444' className='absolute flex left-2 top-3 search-hover:fill-red-500' />

                <input type="search" name="" placeholder='Search Twitter' className=' pl-8  rounded-full text-sm text-slate-600 py-2 w-full focus:border focus:border-primary focus:outline-none border bg-[#eff3f4] focus:bg-white' />
            </div>
            <div className="verification bg-[#eff3f4] mt-6 rounded-lg p-2 space-y-2">
                <h1 className='font-bold'>Get Verified</h1>
                <p className='text-sm text-slate-600'>Subscribe to unlock new features.</p>
                <button className='bg-[#0f1419] text-white rounded-full px-4 py-2 text-sm'> Get Verified </button>
            </div>

            {/* varification */}
            <div className="verification bg-[#f7f9f9] mt-6 rounded-lg">
                <h2 className='font-bold text-center'>Trends for you</h2>
                <ul className='mt-3'>
                    <li className='flex justify-between hover:bg-[#eff3f4] items-center rounded py-2 transition-colors px-2 cursor-pointer'>
                        <div>
                            <p className='text-xs text-slate-600'>Technology · Trending</p>
                            <h2 className='text-black font-bold text-md'>#TwitterX</h2>
                            <p className='text-slate-600 text-xs'>55.4K Tweets</p>
                        </div>
                        <BsThreeDots className='cursor-pointer' />

                    </li>
                    <li className='flex justify-between hover:bg-[#eff3f4] items-center rounded py-2 transition-colors px-2 cursor-pointer'>
                        <div>
                            <p className='text-xs text-slate-600'>Technology · Trending</p>
                            <h2 className='text-black font-bold text-md'>#TwitterX</h2>
                            <p className='text-slate-600 text-xs'>55.4K Tweets</p>
                        </div>
                        <BsThreeDots className='cursor-pointer' />

                    </li>
                    <li className='flex justify-between hover:bg-[#eff3f4] items-center rounded py-2 transition-colors px-2 cursor-pointer'>
                        <div>
                            <p className='text-xs text-slate-600'>Technology · Trending</p>
                            <h2 className='text-black font-bold text-md'>#TwitterX</h2>
                            <p className='text-slate-600 text-xs'>55.4K Tweets</p>
                        </div>
                        <BsThreeDots className='cursor-pointer' />

                    </li>
                    <li className='flex justify-between hover:bg-[#eff3f4] items-center rounded py-2 transition-colors px-2 cursor-pointer'>
                        <div>
                            <p className='text-xs text-slate-600'>Technology · Trending</p>
                            <h2 className='text-black font-bold text-md'>#TwitterX</h2>
                            <p className='text-slate-600 text-xs'>55.4K Tweets</p>
                        </div>
                        <BsThreeDots className='cursor-pointer' />

                    </li>
                    <li className='flex justify-between hover:bg-[#eff3f4] items-center rounded py-2 transition-colors px-2 cursor-pointer'>
                        <div>
                            <p className='text-xs text-slate-600'>Technology · Trending</p>
                            <h2 className='text-black font-bold text-md'>#TwitterX</h2>
                            <p className='text-slate-600 text-xs'>55.4K Tweets</p>
                        </div>
                        <BsThreeDots className='cursor-pointer' />

                    </li>
                    <li className='flex justify-between hover:bg-[#eff3f4] items-center rounded py-2 transition-colors px-2 cursor-pointer'>
                        <div>
                            <p className='text-xs text-slate-600'>Technology · Trending</p>
                            <h2 className='text-black font-bold text-md'>#TwitterX</h2>
                            <p className='text-slate-600 text-xs'>55.4K Tweets</p>
                        </div>
                        <BsThreeDots className='cursor-pointer' />

                    </li>

                    <div className="show bg-slate-100 w-full rounded-b-lg text-center py-2 hover:bg-slate-200">
                        <NavLink> <p className='text-primary'> show more</p> </NavLink>
                    </div>

                </ul>
            </div>

            {/* follow  */}
            <div className='follow bg-[#f7f9f9] mt-6 rounded-lg space-y-2'>
                <h2 className='font-bold text-center'>Who To Follow</h2>
                <div className='flex justify-between  p-2 items-center gap-1 cursor-pointer hover:bg-slate-200 transition-colors'>
                    <div className="profile">
                        <img className='profile-img' src="images/kamrul.jpg" alt="" />
                    </div>
                    <div className="name text-slate-600 text-xs">
                        <p className='font-bold text-black'>Earth</p>
                        <p>@earthcurated</p>
                    </div>
                    <div className="button">
                        <button className='bg-[#0f1419] text-white rounded-full px-4 py-2 text-sm'> Follow </button>
                    </div>
                </div>
                <div className='flex justify-between  p-2 items-center gap-1 cursor-pointer hover:bg-slate-200 transition-colors'>
                    <div className="profile">
                        <img className='profile-img' src="images/kamrul.jpg" alt="" />
                    </div>
                    <div className="name text-slate-600 text-xs">
                        <p className='font-bold text-black'>Earth</p>
                        <p>@earthcurated</p>
                    </div>
                    <div className="button">
                        <button className='bg-[#0f1419] text-white rounded-full px-4 py-2 text-sm'> Follow </button>
                    </div>
                </div>
                <div className='flex justify-between  p-2 items-center gap-1 cursor-pointer hover:bg-slate-200 transition-colors'>
                    <div className="profile">
                        <img className='profile-img' src="images/kamrul.jpg" alt="" />
                    </div>
                    <div className="name text-slate-600 text-xs">
                        <p className='font-bold text-black'>Earth</p>
                        <p>@earthcurated</p>
                    </div>
                    <div className="button">
                        <button className='bg-[#0f1419] text-white rounded-full px-4 py-2 text-sm'> Follow </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TrendSide