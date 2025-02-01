import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import NewPost from '../Components/NewPost';
import Recommended from '../Components/Recommended';
import Post from '../Components/Post';
import News from '../Components/News';
import RecentLibraries from '../Components/RecentLibraries';

function DefaultLayout({ children }) {
  return (
    <div className="bg-surface-a0 h-full pt-12">
       <Navbar /> 
        <div className="w-8/12 mx-auto mt-5 flex justify-between">
            <div className="w-72">
                <Sidebar />                
                <RecentLibraries />
            </div>
            <div className="w-146 mx-2">
                <NewPost />
                <Post />
                <Post />
            </div>
            <div className="w-72">
                <Recommended />
                <News />
            </div>
        </div>
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
