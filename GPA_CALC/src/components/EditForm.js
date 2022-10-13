import { Stack, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const EditForm = ({
  editSubject,
  handleEditCreditChange,
  handleEditNameChange,
  handleEditGradeChange,
  editCourse,
  subject,
}) => {
  return (
    <>
      <Form>
        <Stack direction="horizontal" gap={3}>
          <Col sm="5">
            <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
              <Form.Label>Course</Form.Label>
              <Form.Control
                autoComplete="new-off"
                className="rounded-pill"
                value={editSubject.name}
                onChange={handleEditNameChange}
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
                value={editSubject.credit}
                onChange={handleEditCreditChange}
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
                value={editSubject.grade}
                onChange={handleEditGradeChange}
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
              onClick={() => editCourse(subject.id)}
            >
              <FontAwesomeIcon icon={faCheck} />
            </Button>
          </Col>
        </Stack>
      </Form>
    </>
  );
};

export default EditForm;
