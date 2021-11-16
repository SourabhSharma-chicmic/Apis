import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import AddData from "./Component/Forms/AddData";
import ShowUsersData from "./Component/View/ShowUsersData";

const App = () => {
  return (
    <div className="container">
      <AddData />
      <ShowUsersData />
    </div>
  );
};

export default App;
