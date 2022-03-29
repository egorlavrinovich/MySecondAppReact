import React from "react";

const Selection = ({ Name, condition, value, onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)} value={value}>
      <option disabled>{Name}</option>
      {condition.map((item) => (
        <option key={item.value} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Selection;
