import { Col, Row } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <div className="window h-100">
      <div className="title-bar">
        <div className="title-bar-text">Home - Obi Fortune Dubem</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body m-0">
        <div className="status-bar">
          <div className="ms-2">
            <span className="stbtn">File</span>
            <span className="stbtn">Edit</span>
            <span className="stbtn">View</span>
            <span className="stbtn">Favorites</span>
            <span className="stbtn">Tool</span>
            <span className="stbtn">Help</span>
          </div>
        </div>
        <Row>
          <Col>
            <div className="image-window">
              <img src="./assets/images/myPic.jpg" alt="" />
            </div>
          </Col>
          <Col md={8}>
            <section className="window-section">
              <h1>OBI FORTUNE DUBEM</h1>
              <hr />
              <h3>Student / Web developer</h3>
            </section>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeScreen;
