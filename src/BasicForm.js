import React, { useState } from "react";
import "./AppPractice.css";

function BasicForm() {
  const [email, setemail] = useState(" ");
  const [password, setpassword] = useState(" ");
  const [allentry, setallentry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    const newentryyy = {
      // id: new Date().getTime().toString(),
      email: email,
      password: password,
    };

    setallentry([...allentry, newentryyy]);
    setemail(" ");
    setpassword(" ");
  };

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            placeholder="enter email id"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            placeholder="enter password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <div>
        {allentry.map((currElem) => {
          return (
            <div className="showDetails" key={currElem.id}>
              <p>
                your email is <strong>{currElem.email}</strong> & password is
                <strong>{currElem.password}</strong>
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BasicForm;
