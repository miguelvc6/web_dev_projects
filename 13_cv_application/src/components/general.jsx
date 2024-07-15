/* eslint-disable react/prop-types */
function GeneralInformation({
  firstName,
  lastName,
  eMail,
  birthday,
  onChange,
}) {
  return (
    <div>
      <h2>General Information</h2>
      <form method="post">
        <label htmlFor="fname">First Name: </label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={firstName}
          onChange={(e) => onChange("firstName", e.target.value)}
        />
        <br />
        <label htmlFor="lname">Last Name: </label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={lastName}
          onChange={(e) => onChange("lastName", e.target.value)}
        />
        <br />
        <label htmlFor="email">E-mail: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={eMail}
          onChange={(e) => onChange("eMail", e.target.value)}
        />
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

export default GeneralInformation;
