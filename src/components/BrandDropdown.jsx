import React from "react";

export default ({ label, onDropdownChange, dataOptions }) => {

  return (
    <div className="form-group">
      <label htmlFor="">
        <h6>{label}</h6>
      </label>
      <select
        className="form-control"
        defaultValue=""
        onChange={onDropdownChange}
      >
        {dataOptions.map(item => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};
