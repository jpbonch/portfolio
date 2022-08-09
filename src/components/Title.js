import React from "react";

export default function Title(props) {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "15px",
          borderBottom: "1px solid black",
          textAlign: "center",
          marginBottom: "50px",
          marginTop: "50px",
        }}
      >
        <span
          style={{
            fontWeight: 100,
            backgroundColor: "#F5F5F5",
            padding: "0 10px",
          }}
        >
          {props.text}
        </span>
      </div>
    </div>
  );
}
