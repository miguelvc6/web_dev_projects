/* eslint-disable react/prop-types */
function EducationInformation({
  schoolName,
  titleStudy,
  finishDate,
  onChange,
}) {
  return (
    <div>
      <h2>Education Information</h2>
      <form method="post">
        <label htmlFor="school_name">School Name: </label>
        <input
          type="text"
          id="school_name"
          name="school_name"
          value={schoolName}
          onChange={(e) => onChange("schoolName", e.target.value)}
        />
        <br />
        <label htmlFor="title_study">Title of Study: </label>
        <input
          type="text"
          id="title_study"
          name="title_study"
          value={titleStudy}
          onChange={(e) => onChange("titleStudy", e.target.value)}
        />
        <br />
        <label htmlFor="finish_date">Finish Date: </label>
        <input
          type="date"
          id="finish_date"
          name="finish_date"
          value={finishDate}
          onChange={(e) => onChange("finishDate", e.target.value)}
        />
        <br />
      </form>
    </div>
  );
}

export default EducationInformation;
