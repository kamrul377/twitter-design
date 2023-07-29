import React, { useEffect, useState } from 'react'
import { IoImage, IoLocationOutline } from 'react-icons/io5'
import { AiOutlineGif } from 'react-icons/ai'
import { BiArch, BiComment, BiLike, BiPoll } from 'react-icons/bi'
import { GrEmoji } from 'react-icons/gr'
import { LuCalendarClock } from 'react-icons/lu'
import { FaRegComment } from 'react-icons/fa'
import { FaRetweet } from 'react-icons/fa'
import { AiOutlineBarChart } from 'react-icons/ai'
import { BiSolidLike } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { RxCross1 } from 'react-icons/rx'
import { NavLink, json } from 'react-router-dom'




const icons = [
    {
        icon: < IoImage color='#1d9bf0' size={23} className='post-icon cursor-pointer' />
    },
    {
        icon: <AiOutlineGif color='#1d9bf0' size={23} className='post-icons' />
    },
    {
        icon: <BiPoll color='#1d9bf0' size={23} className='post-icons' />
    },
    {
        icon: <GrEmoji color='#1d9bf0' size={23} className='post-icons' />
    },
    {
        icon: <LuCalendarClock color='#1d9bf0' size={23} className='post-icons' />
    },
    {
        icon: <IoLocationOutline color='#1d9bf0' size={23} className='post-icons' />
    },
]

const Home = () => {


    const [postImage, setPostImage] = useState('')
    const [data, setData] = useState([])

    const handleImage = () => {

    }
    const handleChange = (e) => {

        const file = e.target.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            setPostImage(fileReader.result)
        }

        fileReader.readAsDataURL(file)

    }
    // console.log(postImage)

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('twitter')))

    }, [])

    // console.log(data)


    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target)
        const form_data = new FormData(e.target)
        const data = Object.fromEntries(form_data)

        if (!data.postContent || !data.file) {
            alert('minimum 1 fields are required')

        } else {
            const newTwit = {
                postContent: data.postContent,
                file: postImage
            }

            const existingData = JSON.parse(localStorage.getItem('twitter')) || []
            const newData = [...existingData, newTwit];
            localStorage.setItem('twitter', JSON.stringify(newData));


            e.target.reset()
            setPostImage(null)

            window.location.reload(true)
        }



    }

    return (
        <div className='min-h-screen flex flex-col w-[100%] md:w-[60%] border ml-[60px] md:ml-[100px] overflow-x-hidden'>
            <div className="nav-heading">
                <h1 className='font-bold text-2xl py-2 mx-2'>Home</h1>
                <div className="tabs flex justify-between border-b-[1px]">
                    <p className='basis-1/2 hover:bg-slate-200 text-center font-bold py-2 text-sm text-[#222] border-primary border-b-2'>For You</p>
                    <p className='basis-1/2 hover:bg-slate-200 text-center font-bold py-2 text-sm text-[#222]'>Following</p>
                </div>
            </div>

            {/* CREATE POST  */}
            <form action="" onSubmit={handleSubmit}>
                <div className="post-twit p-2 border-b flex">

                    <div className="left w-[75px] flex justify-center">
                        <div className="profile">
                            <img className='profile-img' src="images/kamrul.jpg" alt="" />
                        </div>
                    </div>
                    <div className="right w-full">
                        <div className="content flex gap-2">

                            <textarea className='bg-white border focus:outline-none text-slate-700 text-sm rounded-md px-2 py-1 w-[80%] resize-none' name="postContent" id="" cols="25" placeholder='What is happening?!'>
                            </textarea>
                        </div>


                        {postImage &&
                            <div className='post-image mt-2 w-[80%] bg-white relative'>
                                <RxCross1 size={30} className='absolute right-4 top-4 bg-[#0c0c0b4b] rounded-full p-[5px] active:scale-90 cursor-pointer' onClick={() => setPostImage(null)} />
                                <img src={postImage} className='w-full h-[400px] object-cover rounded' alt="" />
                            </div>}


                        {/* icons */}
                        <div className="my-2 flex justify-between">
                            <div className='post-icons flex gap-2'>
                                {icons.map((ic, i) => {
                                    if (i === 0) {
                                        return <div>
                                            <label htmlFor="file" onClick={handleImage}>
                                                <input type="file" id='file' name='file' hidden onChange={handleChange} />
                                                {ic.icon}
                                            </label>


                                        </div>
                                    } else {
                                        return <div>
                                            {ic.icon}
                                        </div>
                                    }
                                })}

                            </div>
                            <button type='submit' className='bg-[#1d9bf0] hover:bg-[#1b91e0] text-white py-1 px-4 rounded-full font-bold'> Tweet </button>
                        </div>

                    </div>

                </div>
            </form>



            {/*  USERS POST  */}
            {data === null && <div className='text-center text-slate-500'> No Post Found.</div>}

            {
                data && data.reverse().map((d, i) => {
                    return <div className="user-post p-2 border-b my-1 flex" key={i}>
                        <div className="left w-[75px] flex justify-center">
                            <div className="profile">
                                <img className='profile-img' src="images/kamrul.jpg" alt="" />
                            </div>
                        </div>
                        <div className="right w-full">
                            <div className="post-details flex items-center">
                                <NavLink>
                                    <p className='text-lg hover:underline font-bold'> Kamrul islam </p>
                                </NavLink>
                                <span className='text-xs text-slate-600 ml-2'>10min</span>
                                <BsThreeDots className='ml-auto cursor-pointer' />
                            </div>
                            <div className="post-content text-slate-700 font-normal text-sm">
                                <p>{d.postContent}</p>
                            </div>
                            <div className="post-image w-[80%] my-2">
                                <img className='rounded-md shadow border h-auto object-cover' src={d.file} alt="" />
                            </div>

                            <div className="likes flex justify-between w-[80%] my-1">
                                <div className='group flex justify-center items-center gap-2 transition-colors hover:cursor-pointer'>
                                    <BiComment className='fill-gray-600 group-hover:fill-[#5dbaec] group-hover:bg-blue-50 h-7 w-7 rounded-full p-[5px]' />
                                    <p className='text-xs text-gray-600 group-hover:text-[#5dbaec]'>100</p>
                                </div>
                                <div className='group flex justify-center items-center gap-2 transition-colors hover:cursor-pointer'>
                                    <FaRetweet className='fill-gray-600 group-hover:fill-[#349408] group-hover:bg-blue-50 h-7 w-7 rounded-full p-[5px]' />
                                    <p className='text-xs text-gray-600 group-hover:text-[#349408]'>100</p>
                                </div>
                                <div className='group flex justify-center items-center gap-2 transition-colors hover:cursor-pointer'>
                                    <BiLike className='fill-gray-600 group-hover:fill-[#f31195] group-hover:bg-blue-50 h-7 w-7 rounded-full p-[5px]' />
                                    <p className='text-xs text-gray-600 group-hover:text-[#f31195]'>100</p>
                                </div>
                                <div className='group flex justify-center items-center gap-2 transition-colors hover:cursor-pointer'>
                                    <AiOutlineBarChart className='fill-gray-600 group-hover:fill-[#e4751b] group-hover:bg-blue-50 h-7 w-7 rounded-full p-[5px]' />
                                    <p className='text-xs text-gray-600 group-hover:text-[#e4751b]'>100</p>
                                </div>

                            </div>
                        </div>
                    </div>
                })
            }


        </div>
    )
}

export default Home