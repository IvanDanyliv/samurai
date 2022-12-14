import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { addPost } from './redux/state';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <Navbar />
        <div className='app_wrapper_content'>
          <Routes>
            <Route path="/dialogs" element={<Dialogs
              dialogs={props.state.dialogsPage.dialogs}
              messages={props.state.dialogsPage.messages} />} />
            <Route path="/profile" element={<Profile
              posts={props.state.profilePage.posts}
              addPost={addPost} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
