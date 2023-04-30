import { Routes, Route } from 'react-router-dom';
import './App.css';
import { LeftBlock, RightBlock } from './components';
import { MainPage, NotificationPage, ProfilePage, SettingPage } from './pages';

function App() {
  return (
    <div className="wrapper">
      <LeftBlock />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
      <RightBlock />
    </div>
  );
}

export default App;
