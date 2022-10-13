import { Stack, Row, Col, Button, Form } from "react-bootstrap";
const MainForm = ({
  calcGpa,
  currentCredit,
  handleCreditChange,
  handleCreditsChange,
  currentGpa,
  handleGpaChange,
  handleNameChange,
  newSubject,
  subjects,
  handleGradeChange,
  handleSubjectChange,
}) => {
  return (
    <>
      <Form onSubmit={calcGpa} autoComplete="off">
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Current Units</Form.Label>
              <Form.Control
                className="rounded-pill"
                value={currentCredit}
                onChange={handleCreditsChange}
                type="number"
                placeholder="Enter Credits"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Current Gpa</Form.Label>
              <Form.Control
                className="rounded-pill"
                value={currentGpa}
                onChange={handleGpaChange}
                type="number"
                placeholder="Enter Gpa"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Stack direction="horizontal" gap={3}>
            <Col sm="5">
              <Form.Group className="mb-3 text-center">
                <Form.Label>Course</Form.Label>
                <Form.Control
                  autoComplete="new-off"
                  className="rounded-pill w-100"
                  value={newSubject.name}
                  onChange={handleNameChange}
                  type="text"
                  placeholder="e.g. intro to cs"
                />
              </Form.Group>
            </Col>

            <Col sm="2">
              <Form.Group className="mb-3 text-center">
                <Form.Label>Credit</Form.Label>
                <Form.Control
                  className="rounded-pill"
                  value={newSubject.credit}
                  onChange={handleCreditChange}
                  type="number"
                  placeholder="Credits"
                />
              </Form.Group>
            </Col>
            <Col sm="2">
              <Form.Group className="mb-3 text-center">
                <Form.Label>Grade</Form.Label>
                <Form.Select
                  className="rounded-pill"
                  value={newSubject.grade}
                  onChange={handleGradeChange}
                  type="number"
                  placeholder="Grade"
                >
                  <option value="0">#</option>
                  <option value="5">A+</option>
                  <option value="4.75">A</option>
                  <option value="4.5">B+</option>
                  <option value="4">B</option>
                  <option value="3.5">C+</option>
                  <option value="3">C</option>
                  <option value="2.5">D+</option>
                  <option value="2">D</option>
                  <option value="1">F</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col className="pt-2">
              <Button
                type="submit"
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "2rem",
                }}
                onClick={handleSubjectChange}
              >
                +
              </Button>
            </Col>
          </Stack>
        </Row>
      </Form>
    </>
  );
};

export default MainForm;
