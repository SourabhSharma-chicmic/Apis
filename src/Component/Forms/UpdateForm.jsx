import { useParams ,useHistory } from "react-router";
import { useSelector } from "react-redux";
import chalk from "jest-matcher-utils/node_modules/chalk";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { PutData } from "../../Redux/Actions/Index";

const UpdateForm = (props) => {
  //getting latest data from store using useSelector
  const Users = useSelector((state) => state.SaveUser.Users);
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  // getting data matched to id send by the upate button
  const filterdValue = Users.filter((item) => item.id == id);

  const obj = {
    ...filterdValue[0], //filter value is array it will return object with keys and here we have only one object so we kown key of fireest is 0 so thats y we wriet ....filtervlaue[0] if we dont witer then we do ....filtervalue and then again take and new object and spread old object in wheich we did ...filtevalue
  };


  const [updateData, setUpdateData] = useState(obj)

  const onChangeHandler=(e)=>{
      
    setUpdateData({...updateData, [e.target.name] :e.target.value})
  }

  const onSubmitHandler=(e)=>{
      e.preventDefault();
      const obj ={
          id:id,
          name :updateData.name,
          email:updateData.email
      }
     dispatch(PutData(obj)); 
      setTimeout(() => {
        history.replace("/display");
      }, 2000);
      

  }
  return (
    <div className="row ">
      <div className="col-md-4  offset-3 border border-2  border-dark mt-5 ">
        <h2 className="bg-danger mt-5 text-capitalize text-center p-2">
          Update Form
        </h2>

        <form onSubmit={onSubmitHandler}>
          <input
             onChange={onChangeHandler}
            type="text"
            className="form-control mt-4"
            name="name"
            placeholder="Enter name"
           value={updateData.name}
          />
          <br />
          <input
             onChange={onChangeHandler}
            type="text"
            className="form-control mt-1"
            name="email"
            placeholder="Enter email"
             value={updateData.email}
          />
          <br />
          <button className="btn btn-dark btn-lg mt-1 mb-5" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
