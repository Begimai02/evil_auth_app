import React from "react";
import { useNavigate } from "react-router-dom";
import FormsLogic from "./FormsLogic";
import "./styles/Wrapper.css";

const Wrapper = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="parent">
        <div className="artwork">
          <div className="artwork-img"></div>
          <p className="artwork-attrs">
            Art by{" "}
            <a
              href="https://www.behance.net/TheMukulNegi"
              className="artwork-author"
            >
              Mukul Negi
            </a>
          </p>
        </div>
        <div className="forms">
          <button className="go-back" onClick={() => navigate("/")}>
            Don't want to? <span>Back to home</span>
          </button>

          <FormsLogic title={title} />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
