
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useHistory } from "react-router-dom";
import { DeleteData, GetData, PutData } from "../../Redux/Actions/Index";
import Loading from "../Loader/Loading";
import ShowUser from "./ShowUser";

const ShowUsersData = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.SaveUser.Users);
  
  useEffect(() => {
    dispatch(GetData());
  }, []);

  const DeleteHandler = (id) => {
    dispatch(DeleteData(id));
    setTimeout(() => {
      dispatch(GetData());
    }, 1000);
  };

  const UpdateHandler = (id) => {
     history.replace(`Update/${id}`);
    //history.push(`Update/${id}`);
  };
  return (
    <div className="row text-center">
      <div className="col-md-6 offset-2 align-content-center mt-5">
      <h2 className="bg-danger mt-5 text-capitalize text-center p-2">List of Users</h2>
    {Users.length==0 && <Loading/>}
        {Users.map((item) => {
          return (
            <ShowUser
              getDeleteId={DeleteHandler}
              getUpdateId={UpdateHandler}
              key={item.id}
              name={item.name}
              email={item.email}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowUsersData;
