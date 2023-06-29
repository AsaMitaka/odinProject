import { Routes, Route } from 'react-router-dom';
import { Main, Signup, Login, TweetPage, Profile } from './page';

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col h-screen box-border">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<TweetPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
