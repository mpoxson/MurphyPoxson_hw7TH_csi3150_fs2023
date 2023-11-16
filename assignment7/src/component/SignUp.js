import React from "react";

const SignUp = () => {
  const [getter, infoSetter] = React.useState({
    fName: "",
    userName: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    infoSetter((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }

  console.log(getter);

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form-input"
          placeholder="Full Name"
          name="fName"
          value={getter.fName}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Username"
          name="userName"
          value={getter.userName}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Email"
          name="email"
          value={getter.email}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-input"
          placeholder="address"
          name="address"
          value={getter.address}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form-input"
          placeholder="Phone Number"
          name="phoneNumber"
          value={getter.phoneNumber}
          onChange={handleChange}
        />
      </div>
    </main>
  );
};

export default SignUp;
