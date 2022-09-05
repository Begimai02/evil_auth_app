import React from "react";
import { useNavigate } from "react-router-dom";
import Forms from "./Forms";
import "./styles/Wrapper.css";

const Wrapper = ({ title, imgOrder }) => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="parent">
        {/* <div className={`part1 ${imgOrder === 1 ? "first" : "second"}`}> */}
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
          <button onClick={() => navigate(-1)}>Back</button>

          <Forms title={title} />
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
