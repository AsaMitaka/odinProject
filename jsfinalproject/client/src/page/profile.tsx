import { Aside, Footer, Header, Tweet } from '../components';

const Profile = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-5 flex">
        <div className="col-span-1">
          <Aside />
        </div>
        <main className="col-span-3">
          <section>
            <div className=" px-5 bg-black text-white">
              <div className="flex justify-between py-4 px-5">
                <img
                  className="rounded-full bg-black-600 border-black"
                  src="https://upload.wikimedia.org/wikipedia/en/c/cc/Wojak_cropped.jpg"
                  alt="profile"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-3xl font-bold self-center hover:bg-blue-800">
                  edit
                </button>
              </div>
              <div className="mb-7">
                <p className="text-xl font-bold">Name</p>
                <span className="text-gray-400">@name</span>
              </div>
              <div className="flex justify-between mb-7 text-gray-400">
                <span>Ukraine</span>
                <a
                  href="savelife.in.ua/donate/"
                  target="_blank"
                  className="text-blue-600 hover:underline">
                  savelife.in.ua/donate/
                </a>
                <time>28 june 2023</time>
                <time>Joined July 2017</time>
              </div>
              <div className="flex mb-7">
                <a href="#" className="mr-5">
                  61 <span className="text-gray-400 hover:underline">Following</span>
                </a>
                <a href="#">
                  61 <span className="text-gray-400 hover:underline">Followers</span>
                </a>
              </div>
              <div className="flex justify-between">
                <div className="px-10 py-3 border-b-4 border-blue-600 cursor-pointer hover:bg-gray-600">
                  Tweets
                </div>
                <div className="px-10 py-3 text-gray-400 cursor-pointer hover:bg-gray-600">
                  Replies
                </div>
                <div className="px-10 py-3 text-gray-400 cursor-pointer hover:bg-gray-600">
                  Likes
                </div>
              </div>
            </div>
            <div>
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
