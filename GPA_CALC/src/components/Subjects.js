import EditForm from "./EditForm";
import Subject from "./Subject";
const Subjects = ({
  subjects,
  editSubject,
  handleEditCreditChange,
  handleEditNameChange,
  handleEditGradeChange,
  editCourse,
  handleHideChange,
  handleEditChange,
  deleteCourse,
}) => {
  return (
    <div className="pt-3">
      {subjects.map((subject) => {
        return (
          <>
            {subject.edit ? (
              <EditForm
                subject={subject}
                handleEditCreditChange={handleEditCreditChange}
                handleEditGradeChange={handleEditGradeChange}
                handleEditNameChange={handleEditNameChange}
                editSubject={editSubject}
                editCourse={editCourse}
              />
            ) : (
              <Subject
                subject={subject}
                handleEditChange={handleEditChange}
                handleHideChange={handleHideChange}
                deleteCourse={deleteCourse}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default Subjects;
