const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 4, message: body }]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body }
}

export default dialogsReducer;
