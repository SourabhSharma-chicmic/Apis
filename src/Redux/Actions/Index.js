export const PostData = (userData) => {
  console.log(userData,"kkkk");
  return {
    type: "POST_DATA",
    payload: userData,
  };
};
