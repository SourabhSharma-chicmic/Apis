const ShowUser = (props) => {
  const onDeleteHandler = () => {
    props.getDeleteId(props.id);
  };
  const onUpdateHandler = () => {
    props.getUpdateId(props.id);
  };
  return (
    <div className=" card col-md-4 offset-4 mb-5 mt-3 text-center">
      <div className="card-header">
        {props.email}
        <br />
        {props.name}
      </div>
      <div className=" card-footer">
        <button
          onClick={onDeleteHandler}
          type="button"
          className="btn btn-dark btn-md me-3 "
        >
          Delete
        </button>
        <button
          onClick={onUpdateHandler}
          type="button"
          className="btn btn-success btn-md"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default ShowUser;
