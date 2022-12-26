const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

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
    }
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

  // addPost() {
  //   let newPost = {
  //     id: 3,
  //     message: this._state.profilePage.newPostText,
  //     likeCount: 0
  //   }
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({ id: 4, message: body });
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () =>  ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export const sendMessageCreator = () =>  ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
}

export default store;
