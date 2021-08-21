// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Col, Row } from "react-bootstrap";
import TaskBar from "./components/TaskBar";
import HomeScreen from "./screens/HomeScreen";
// // fontawesome
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// library.add(fab, fas);

const App: React.FC = () => {
  return (
    <>
      <div className="app-container">
        <Row className="m-0">
          <Col></Col>
          <Col md={8}>
            <HomeScreen />
          </Col>
        </Row>
      </div>
      <TaskBar />
    </>
  );
};

export default App;
