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

export const PutData = (obj) => {
  return {
    type: "PUT_DATA",
    payload: obj
  };
};

export const LoginUser = (obj) => {
  return {
    type: "LOGIN",
    payload: obj
  };
};
