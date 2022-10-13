const Display = ({ Gpa, credits }) => {
  const rating = (grade) => {
    grade = Number(grade);

    if (grade === 0) {
      return "";
    } else if (grade >= 4.5) {
      return "Excellent";
    } else if (grade >= 3.75) {
      return "Very Good";
    } else if (grade >= 2.75) {
      return "Good";
    } else {
      return "Get Good";
    }
  };
  return (
    <>
      <br />
      <div>
        Your GPA: {Gpa}
        <br />
        Total credits: {credits}
        <br />
        Grade : {rating(Gpa)}
      </div>
    </>
  );
};

export default Display;
