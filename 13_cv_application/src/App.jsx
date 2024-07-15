import GeneralInformation from "./components/general.jsx";
import ExperienceInformation from "./components/experience.jsx";
import EducationInformation from "./components/education.jsx";
import { Button } from "./components/top_buttons.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [generalInformationValues, setGeneralInformationValues] = useState({
    firstName: "",
    lastName: "",
    eMail: "",
    birthday: "",
  });

  const [educationValues, setEducationValues] = useState({
    schoolName: "",
    titleStudy: "",
    finishDate: "",
  });

  const [experienceValues, setExperienceValues] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    birthday: "",
  });

  function setExampleValues() {
    const exampleInfo = {
      firstName: "John",
      lastName: "Doe",
      eMail: "john_at_work@company.com",
      birthday: "1997-12-12",
    };
    setGeneralInformationValues(exampleInfo);

    const exampleEducationInfo = {
      schoolName: "Harvard University",
      titleStudy: "Bachelor of Science in Computer Science",
      finishDate: "2020-05-15",
    };
    setEducationValues(exampleEducationInfo);

    const exampleExperienceInfo = {
      companyName: "Tech Solutions Inc.",
      positionTitle: "Software Engineer",
      mainResponsibilities:
        "Developing and maintaining web applications, collaborating with cross-functional teams, writing clean and efficient code.",
      birthday: "1995-08-25",
    };
    setExperienceValues(exampleExperienceInfo);
  }

  function resetDefaultValues() {
    setGeneralInformationValues({
      firstName: "",
      lastName: "",
      eMail: "",
      birthday: "",
    });
    setEducationValues({
      schoolName: "",
      titleStudy: "",
      finishDate: "",
    });
    setExperienceValues({
      companyName: "",
      positionTitle: "",
      mainResponsibilities: "",
      birthday: "",
    });
  }

  const [displayCV, setDisplayCV] = useState(false);

  function displayFullCV() {
    setDisplayCV(!displayCV);
  }

  function handleGeneralInfoChange(field, value) {
    setGeneralInformationValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  }

  function handleEducationChange(field, value) {
    setEducationValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  }

  function handleExperienceChange(field, value) {
    setExperienceValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  }

  if (displayCV) {
    return (
      <div className="cv-container">
        <h1>Curriculum Vitae</h1>
        <section className="cv-section">
          <h2>General Information</h2>
          <p>
            <strong>First Name:</strong> {generalInformationValues.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {generalInformationValues.lastName}
          </p>
          <p>
            <strong>Email:</strong> {generalInformationValues.eMail}
          </p>
          <p>
            <strong>Birthday:</strong> {generalInformationValues.birthday}
          </p>
        </section>
        <section className="cv-section">
          <h2>Education Information</h2>
          <p>
            <strong>School Name:</strong> {educationValues.schoolName}
          </p>
          <p>
            <strong>Title of Study:</strong> {educationValues.titleStudy}
          </p>
          <p>
            <strong>Finish Date:</strong> {educationValues.finishDate}
          </p>
        </section>
        <section className="cv-section">
          <h2>Experience Information</h2>
          <p>
            <strong>Company Name:</strong> {experienceValues.companyName}
          </p>
          <p>
            <strong>Position Title:</strong> {experienceValues.positionTitle}
          </p>
          <p>
            <strong>Main Responsibilities:</strong>{" "}
            {experienceValues.mainResponsibilities}
          </p>
          <p>
            <strong>Birthday:</strong> {experienceValues.birthday}
          </p>
        </section>
        <Button onClick={displayFullCV} htmlText={"Back to Edit"} />
      </div>
    );
  } else {
    return (
      <>
        <Button onClick={setExampleValues} htmlText={"Load Example"} />
        <Button onClick={resetDefaultValues} htmlText={"Reset CV"} />
        <GeneralInformation
          firstName={generalInformationValues.firstName}
          lastName={generalInformationValues.lastName}
          eMail={generalInformationValues.eMail}
          birthday={generalInformationValues.birthday}
          onChange={handleGeneralInfoChange}
        />
        <EducationInformation
          schoolName={educationValues.schoolName}
          titleStudy={educationValues.titleStudy}
          finishDate={educationValues.finishDate}
          onChange={handleEducationChange}
        />
        <ExperienceInformation
          companyName={experienceValues.companyName}
          positionTitle={experienceValues.positionTitle}
          mainResponsibilities={experienceValues.mainResponsibilities}
          birthday={experienceValues.birthday}
          onChange={handleExperienceChange}
        />
        <Button onClick={displayFullCV} htmlText={"Submit"} />
      </>
    );
  }
}

export default App;
