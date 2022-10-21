import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Button,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Example@gmail.com" />
                  <Form.Text className="text-muted">
                    We'll never share your email address, trust us!
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="secondary" type="submit">
              Login
            </Button>
          </Form>
          <Card className="mb-3" style={{ color: "#000" }}>
            <CardImg src="https://picsum.photos/200/50" />
            <Card.Body>
              <Card.Title>Card Example</Card.Title>
              <Card.Text>This is an example of react bootstrap cards</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <BreadcrumbItem>Test 1</BreadcrumbItem>
            <BreadcrumbItem>Test 2</BreadcrumbItem>
            <BreadcrumbItem active>Test 3</BreadcrumbItem>
          </Breadcrumb>
          <Alert variant="sucess">This is a button</Alert>
          <Button>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
