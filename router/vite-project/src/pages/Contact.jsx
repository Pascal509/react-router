import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import Email from "./EmailMe";
import ReachMe from "./ReachMe";

function Contact() {
  const { id } = useParams();
//   const {new} = useParams();
  return (
    <>
      <h1>Find Me Here{id}</h1>
      <Link to="/ReachMe" element={<ReachMe/>}>Reach me</Link>
      <br />
      <Link to="/Lets Talk">Email Me</Link>
      <Outlet context={{ hello: "World" }} />
    </>
  );
}

export default Contact;
