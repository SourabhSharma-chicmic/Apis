import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import AddData from "./Component/Forms/AddData";
import ShowUsersData from "./Component/View/ShowUsersData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Menu/Navbar";
import UpdateForm from "./Component/Forms/UpdateForm";
import LoginForm from "./Authentication/LoginForm";
const App = () => {
  return (
    <div className="container-fluid"> 
    <Navbar/>
      
           <Switch>
             <Route exact path="/">
                 <LoginForm/>
              </Route>
              <Route exact path="/adduser">
                 <AddData />
              </Route>
              <Route path="/display">
                
                 <ShowUsersData />
              </Route>
              <Route path="/update/:id" component={UpdateForm}/>
                
              <Route path="*">
                 <AddData/>
              </Route>
          </Switch>
      
    </div>
  );
};

export default App;
