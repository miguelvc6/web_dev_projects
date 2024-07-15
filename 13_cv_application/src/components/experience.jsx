/* eslint-disable react/prop-types */
function ExperienceInformation({
  companyName,
  positionTitle,
  mainResponsibilities,
  birthday,
  onChange,
}) {
  return (
    <div>
      <h2>Job Experience</h2>
      <form method="post">
        <label htmlFor="company_name">Company Name: </label>
        <input
          type="text"
          id="company_name"
          name="company_name"
          value={companyName}
          onChange={(e) => onChange("companyName", e.target.value)}
        />
        <br />
        <label htmlFor="position_title">Position Title: </label>
        <input
          type="text"
          id="position_title"
          name="position_title"
          value={positionTitle}
          onChange={(e) => onChange("positionTitle", e.target.value)}
        />
        <br />
        <label htmlFor="main_responsibilities">Main Responsibilities: </label>
        <textarea
          id="main_responsibilities"
          name="main_responsibilities"
          value={mainResponsibilities}
          onChange={(e) => onChange("mainResponsibilities", e.target.value)}
        ></textarea>
        <br />
        <label htmlFor="bday">Birthday: </label>
        <input
          type="date"
          id="bday"
          name="bday"
          value={birthday}
          onChange={(e) => onChange("birthday", e.target.value)}
        />
      </form>
    </div>
  );
}

export default ExperienceInformation;
