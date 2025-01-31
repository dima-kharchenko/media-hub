import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import NewPost from '../Components/NewPost';
import Recommended from '../Components/Recommended';
import Post from '../Components/Post';

function DefaultLayout({ children }) {
  return (
    <div className="bg-surface-a0 h-full">
       <Navbar /> 
        <div className="w-8/12 mx-auto mt-5 flex justify-between">
            <div className="w-72">
                <Sidebar />                {/* constant elements */}
            </div>
            <div className="w-146 mx-2">
                <NewPost />
                <Post />
                <Post />
            </div>
            <div className="w-72">
                <Recommended />
            </div>
        </div>
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
