import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'

import BlogDetails from './BlogDetails'

const Blogs = () => {

    const {posts,loading}=useContext(AppContext) 
  return (
    <div className='flex justify-center'>
    <div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px] justify-center items-center'>
        {loading ? (
            <Spinner />
        ) : posts.length === 0 ? (
            <div>
                <p>No post found</p>
            </div>
        ) : (
            posts.map((post) => <BlogDetails key={post.id} post={post} />)
        )}
    </div>
</div>

  )
}
export default Blogs
