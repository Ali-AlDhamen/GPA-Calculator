import "../node_modules/bootstrap/dist//css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Display from "./components/Display";
import MainForm from "./components/MainForm";
import Subjects from "./components/Subjects";

function App() {
  const [currentCredit, setCurrentCredits] = useState(0);
  const [currentGpa, setCurrentGpa] = useState(0);
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState({
    name: "",
    grade: "",
    credit: "",
    id: "",
    edit: false,
    hide: false,
  });
  const [editSubject, setEditSubject] = useState({
    name: "",
    grade: "",
    credit: "",
    id: "",
    edit: false,
    hide: false,
  });
  const [Gpa, SetGpa] = useState(0);
  const [credits, setCredits] = useState(0);
  const [courseId, setCourseId] = useState(0);

  useEffect(() => {
    calc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjects]);

  const validate = (values) => {
    const { name, grade, credit } = values;
    const errors = {};

    if (!name) {
      errors.name = "Name is required!";
    }
    if (!grade) {
      errors.grade = "Grade is required!";
    }
    if (!credit) {
      errors.credit = "Credit is required";
    }
    return errors;
  };

  const calcGpa = (e) => {
    e.preventDefault();

    calc();
  };
  const calc = () => {
    const currentPoints = Number(currentGpa) * Number(currentCredit);
    const points = [];
    const credits = [];
    for (const subject of subjects) {
      if (!subject.hide) {
        points.push(Number(subject.grade) * Number(subject.credit));
        credits.push(Number(subject.credit));
      }
    }

    const totalPoints = points.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    const totalCredits = credits.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );

    let finalGpa =
      (currentPoints + totalPoints) / (Number(currentCredit) + totalCredits);
    if (Number.isNaN(finalGpa)) {
      finalGpa = 0;
    }
    SetGpa(finalGpa.toFixed(2));
    setCredits(Number(currentCredit) + totalCredits);
  };
  const deleteCourse = (id) => {
    const course = subjects.find((n) => n.id === id);
    setSubjects(subjects.filter((n) => n.id !== course.id));
  };
  const handleCreditsChange = (event) => {
    setCurrentCredits(event.target.value);
    setSubjects(subjects.filter((n) => n.id !== 909090));
  };
  const handleGpaChange = (event) => {
    setCurrentGpa(event.target.value);
    setSubjects(subjects.filter((n) => n.id !== 909090));
  };

  const handleNameChange = (event) => {
    setNewSubject({
      ...newSubject,
      name: event.target.value,
    });
  };
  const handleGradeChange = (event) => {
    setNewSubject({
      ...newSubject,
      grade: event.target.value,
    });
  };
  const handleCreditChange = (event) => {
    setNewSubject({
      ...newSubject,
      credit: event.target.value,
      id: String(courseId),
    });
  };
  const handleEditNameChange = (event) => {
    setEditSubject({
      ...editSubject,
      name: event.target.value,
    });
  };
  const handleEditGradeChange = (event) => {
    setEditSubject({
      ...editSubject,
      grade: event.target.value,
    });
  };
  const handleEditCreditChange = (event) => {
    setEditSubject({
      ...editSubject,
      credit: event.target.value,
      id: String(courseId),
    });
  };

  const handleHideChange = (id) => {
    const Courses = [];
    for (const course of subjects) {
      if (course.id === id) {
        let show = !course.hide;
        const newCourse = {
          ...course,
          hide: show,
        };
        Courses.push(newCourse);
      } else {
        Courses.push(course);
      }
    }

    setSubjects(Courses);
  };

  const handleSubjectChange = () => {
    const errorsForm = validate(newSubject);

    if (Object.keys(errorsForm).length === 0) {
      setNewSubject({
        ...newSubject,
      });
      setSubjects(subjects.concat(newSubject));
      setNewSubject({
        name: "",
        grade: "",
        credit: "",
        id: "",
        edit: false,
        hide: false,
      });
      setCourseId(Number(courseId) + 1);
    }
  };
  const handleEditChange = (id) => {
    const Courses = [];
    for (const course of subjects) {
      if (course.id === id) {
        const newCourse = {
          ...course,
          edit: true,
        };
        Courses.push(newCourse);
      } else {
        Courses.push(course);
      }
    }
    setSubjects(Courses);
  };

  const editCourse = (id) => {
    const errorsForm = validate(editSubject);

    if (Object.keys(errorsForm).length === 0) {
      const editedCourses = [];

      for (const course of subjects) {
        if (course.id === id) {
          const editedCourse = {
            ...editSubject,
            edit: false,
            id: course.id,
          };
          editedCourses.push(editedCourse);
        } else {
          editedCourses.push(course);
        }
      }
      setEditSubject({
        name: "",
        grade: "",
        credit: "",
        id: "",
        edit: false,
        hide: false,
      });
      setSubjects(editedCourses);
    }
  };

  return (
    <>
      <Container className="m-5 border text-white p-3 w-auto">
        <Header
          header={"GPA Calculator"}
          subHeader={"Enter courses to calculate your GPA 👨‍💻"}
        />
        <MainForm
          calcGpa={calcGpa}
          handleCreditChange={handleCreditChange}
          handleGpaChange={handleGpaChange}
          handleCreditsChange={handleCreditsChange}
          handleGradeChange={handleGradeChange}
          handleNameChange={handleNameChange}
          newSubject={newSubject}
          handleSubjectChange={handleSubjectChange}
          subjects={subjects}
          currentCredit={currentCredit}
          currentGpa={currentGpa}
        />
        <Subjects
          subjects={subjects}
          handleEditCreditChange={handleEditCreditChange}
          handleEditGradeChange={handleEditGradeChange}
          handleEditNameChange={handleEditNameChange}
          editSubject={editSubject}
          editCourse={editCourse}
          handleEditChange={handleEditChange}
          handleHideChange={handleHideChange}
          deleteCourse={deleteCourse}
        />
        <Display Gpa={Gpa} credits={credits} />
      </Container>
      <Footer text={"Made by Ali 🧸"} />
    </>
  );
}

export default App;
