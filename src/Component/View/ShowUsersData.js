import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetData } from "../../Redux/Actions/Index";
import ShowUser from "./ShowUser";

const ShowUsersData = () => {
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.SaveUser.Users);
  console.log(Users);
  useEffect(() => {
    dispatch(GetData());
  }, []);

  const DeleteHandler = (id) => {
      console.log("Delete",id);
  };

  const UpdateHandler = (id) => {
      console.log("Update",id);
  };
  return (
    <div className="row">
      <div className="col-md-12">
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
