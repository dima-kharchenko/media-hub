import image from "../assets/cats/cat_pfp_4.jpg"

function NewPost(){
    return(
        <div className="w-full bg-surface-a10 rounded-lg shadow-[0_0_1px_1px] shadow-primary-a0">
            <div className="mx-8 py-6 flex">
                <img src={image} alt="profile picture" className="w-10 h-10 rounded-full shadow-[0_0_1px_1px] shadow-primary-a0"/>
                <div className="ml-4 w-full">
                    <input type="text" placeholder="What's on your mind?" className="mt-1 placeholder-white text-white focus:outline-none"/>
                    <hr className="w-full border-white mt-1"/>
                    <div className="flex mt-6 justify-between">
                        <button className="cursor-pointer"><i class="fa-regular fa-image text-white text-xl ml-2 my-auto"></i></button>
                        <button type="submit" className="bg-primary-a0 text-white py-1 px-4 rounded-full cursor-pointer">Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewPost
