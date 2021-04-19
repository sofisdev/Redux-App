import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import usersReducer from '../features/users/usersSlice';
// import postsReducer from '../features/posts/postsSlice';
// import commentsReducer from '../features/comments/commentsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },

  // reducer: {
  //   users: usersReducer,
  //   posts: postsReducer,
  //   comments: commentsReducer,
  // },
});
