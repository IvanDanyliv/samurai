let state = {
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
  },

  profilePage:{
    posts:[
      { id: 1, message: 'Hi, how are you?', likeCount: 10 },
      { id: 2, message: 'It is my first post', likeCount: 7 }
    ]
  }
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    likeCount: 0
  }
  state.profilePage.posts.push(newPost);
}

export default state;