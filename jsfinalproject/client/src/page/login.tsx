const Login = () => {
  return (
    <>
      <div className="flex flex-col w-64 px-5 py-2 mx-auto my-0">
        <h1 className="text-3xl mb-4">Log in to Twitter</h1>
        <label htmlFor="" className="flex flex-col mb-3.5 text-2xl">
          Login
          <input
            type="text"
            placeholder="Login"
            className="py-2 px-1 text-xl focus:outline-blue-600"
          />
        </label>
        <label htmlFor="" className="flex flex-col mb-3.5 text-2xl">
          Password:
          <input
            type="password"
            placeholder="Password"
            className="py-2 px-1 text-xl focus:outline-blue-600"
          />
        </label>
        <button className="cursor-pointer mt-3 bg-blue-600 text-white text-center text-lg rounded-3xl font-bold p-2 hover:bg-blue-400">
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
