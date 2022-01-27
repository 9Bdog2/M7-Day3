import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  addToFav: (job) => dispatch({ type: "ADD_TO_FAV", payload: job }),
});

const Job = ({ data, addToFav }) => {
  const handleAddToFav = () => addToFav(data);

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Button onClick={handleAddToFav}>Add to fav</Button>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={12}>
        <span>{data.location}</span>
      </Col>
    </Row>
  );
};

export default connect((s) => s, mapDispatchToProps)(Job);
