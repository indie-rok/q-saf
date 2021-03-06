import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import { store, history } from "./redux/store";
import Login from "./screens/Login";
import NavBar from "./components/NavBar";
import Courses from "./screens/Courses";
import CourseDetail from "./screens/CourseDetail";
import Settings from "./screens/Settings";
import Students from "./screens/Students";
import ViewCertificate from "./screens/ViewCertificate";
import NewCourse from "./screens/NewCourse";
import TopSubMenu from "./components/TopSubMenu";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (

      <ReduxProvider store={store}>
        <ConnectedRouter history={history}>
          <div className="app-container">
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route>
                <LoggedInContainer />
              </Route>
            </Switch>
          </div>
        </ConnectedRouter>
      </ReduxProvider>
    );
  }
}

const LoggedInContainer = () => (
  <>
    <NavBar />
    <div className="page-container">
      <TopSubMenu />
      <div className="white-frame">
        <Route path="/courses" component={Courses} />
        <Route path="/students" component={Students} />
        <Route path="/settings" component={Settings} />
        <Route path="/newCourse" component={NewCourse} />
        <Route path="/coursesDetail/:courseId" component={CourseDetail} />
        <Route path="/certificate/:certificateId" component={ViewCertificate} />
      </div>
    </div>
  </>
);

export default App;
