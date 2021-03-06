import React from "react";

const Character = ({ name, img, portrayed, status, nickname, birthday }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={img} alt="avatar" />
        </div>
        <div className="card-back">
          <h1>{name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong>
              {portrayed}
            </li>
            <li>
              <strong>Nick Name:</strong>
              {nickname}
            </li>
            <li>
              <strong>Birthday: </strong>
              {birthday}
            </li>
            <li>
              <strong>Status: </strong>
              {status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Character;
