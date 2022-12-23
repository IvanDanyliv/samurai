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

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <Navbar />
        <div className='app_wrapper_content'>
          <Routes>
            <Route path="/dialogs" element={<Dialogs dialogsPage={props.state.dialogsPage} />} />
            <Route path="/profile" element={<Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
