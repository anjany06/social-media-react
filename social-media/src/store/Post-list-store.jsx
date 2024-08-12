import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
  return currPostList;
};
const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
