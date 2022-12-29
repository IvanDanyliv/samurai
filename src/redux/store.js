import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Ivan' },
        { id: 2, name: 'Taras' },
        { id: 3, name: 'Kolia' },
        { id: 4, name: 'Max' }
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How' },
        { id: 3, message: 'how how' }
      ],
      newMessageBody: ''
    },

    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 10 },
        { id: 2, message: 'It is my first post', likeCount: 7 }
      ],

      newPostText: 'samurai'
    },

    sidebar: {}
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;
