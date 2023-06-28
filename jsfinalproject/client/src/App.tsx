import { Routes, Route } from 'react-router-dom';
import { Main, Signup, Login, TweetPage } from './page';

function App() {
  return (
    <div className="w-1050 mx-auto px-20 py-10 flex flex-col h-screen">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<TweetPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
