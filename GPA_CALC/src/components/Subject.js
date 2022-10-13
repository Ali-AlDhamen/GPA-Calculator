import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faTrash,
  faEyeSlash,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

const Subject = ({
  subject,
  handleHideChange,
  handleEditChange,
  deleteCourse,
}) => {
  const gradeLetter = (grade) => {
    grade = Number(grade);
    if (grade === 5) {
      return "A+";
    } else if (grade === 4.75) {
      return "A";
    } else if (grade === 4.5) {
      return "B+";
    } else if (grade === 4) {
      return "B";
    } else if (grade === 3.5) {
      return "C+";
    } else if (grade === 3) {
      return "C";
    } else if (grade === 2.5) {
      return "D+";
    } else if (grade === 2) {
      return "D";
    } else if (grade === 1) {
      return "F";
    }
  };
  return (
    <div
      key={subject.id}
      className="text-start bg-light bg-opacity-25 ps-2 d-flex justify-content-between align-content-center m-1"
    >
      <div>
        {subject.hide ? (
          <p
            className="pt-2"
            style={{
              textDecoration: "line-through",
            }}
          >
            {subject.name} ({subject.credit}): {gradeLetter(subject.grade)}
          </p>
        ) : (
          <p className="pt-2">
            {subject.name} ({subject.credit}): {gradeLetter(subject.grade)}
          </p>
        )}
      </div>
      <div className="d-flex p-2">
        <button className="s">
          {subject.hide ? (
            <FontAwesomeIcon
              icon={faEye}
              className="p-2"
              onClick={() => handleHideChange(subject.id)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faEyeSlash}
              className="p-2"
              onClick={() => handleHideChange(subject.id)}
            />
          )}
        </button>
        <button>
          <FontAwesomeIcon
            icon={faPen}
            className="p-2"
            onClick={() => handleEditChange(subject.id)}
          />
        </button>
        <button onClick={() => deleteCourse(subject.id)}>
          {" "}
          <FontAwesomeIcon icon={faTrash} className="p-2" />
        </button>
      </div>
    </div>
  );
};

export default Subject;
