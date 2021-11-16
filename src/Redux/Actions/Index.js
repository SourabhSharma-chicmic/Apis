export const PostData = (userData) => {
  return {
    type: "POST_DATA",
    payload: userData,
  };
};

export const GetData = () => {
  return {
    type: "GET_DATA",
  };
};
