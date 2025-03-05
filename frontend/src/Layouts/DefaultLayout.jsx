import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import NewPost from '../Components/NewPost';
import Recommended from '../Components/Recommended';
import Post from '../Components/Post';
import News from '../Components/News';
import RecentLibraries from '../Components/RecentLibraries';

function DefaultLayout({ children }) {
  return (
    <div className="py-12">
       <Header /> 
        <div className="w-8/12 mx-auto mt-5 flex justify-between">
            <div className="w-72">
                <div className="fixed width-inherit">
                    <Sidebar />                
                    <RecentLibraries />
                </div>
            </div>
            <div className="w-146">
                <NewPost />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            <div className="w-72">
                <div className="fixed width-inherit">
                    <Recommended />
                    <News />
                </div>
            </div>
        </div>
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
