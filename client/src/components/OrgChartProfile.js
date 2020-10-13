import React from "react";

const OrgChartProfile = (props) => {
  return (
    <div className="self-center max-w-sm">
      <a href="test.com">
        <img
          className="border rounded-full my-0 mx-auto mb-5 p-2 max-w-md"
          src="http://placehold.it/110x110"
          alt="CFO"
        />
        <h4>{props.name}</h4>
        <p>{props.title}</p>
      </a>
    </div>
  );
};

export default OrgChartProfile;
