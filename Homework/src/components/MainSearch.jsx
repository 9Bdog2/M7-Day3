import { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import uniqid from "uniqid";
import { connect } from "react-redux";
class MainSearch extends Component {
  state = {
    query: "",
    jobs: [],
  };

  baseEndpoint = "https://strive-jobs-api.herokuapp.com/jobs?search=";

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      this.baseEndpoint + this.state.query + "&limit=10"
    );

    if (!response.ok) {
      alert("Error fetching results");
      return;
    }

    const { data } = await response.json();

    this.setState({ jobs: data });
  };

  handleConsoleLogFav = () => {
    console.log(this.props.jobsSearches.jobs);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1>Remote Jobs Search</h1>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                type="search"
                value={this.state.query}
                onChange={this.handleChange}
                placeholder="type and press Enter"
              />
            </Form>
            <Button className="mt-3" onClick={this.handleConsoleLogFav}>
              Favourites
            </Button>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {this.state.jobs.map((jobData) => (
              <Job key={uniqid()} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect((s) => s)(MainSearch);
