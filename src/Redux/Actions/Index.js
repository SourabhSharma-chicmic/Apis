export const PostData = (userData) => {
  return {
    type: "POST_DATA",
    payload: userData,
  };
};

export const GetData = () => {
  return {
    type: "GET_DATA"
  };
};

export const DeleteData = (id) => {
  return {
    type: "DELETE_DATA",
    payload: id
  };
};
