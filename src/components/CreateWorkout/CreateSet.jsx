import React from 'react';

function CreateSet(props) {
  return (
    <div className="workout__set">
      <div className="workout__box sets">
        <label htmlFor="sets" className="workout__label">
          Enter number of sets
        </label>
        <input
          type="text"
          onChange={props.handleChange}
          name="sets"
          value={props.value}
          className="workout__number"
          maxLength={3}
          required
        />
      </div>
      <div className="workout__box reps">
        <label htmlFor="reps" className="workout__label">
          Enter number of reps
        </label>
        <input
          type="text"
          onChange={props.handleChange}
          name="reps"
          value={props.reps}
          className="workout__number"
          maxLength={3}
          required
        />
      </div>
    </div>
  );
}

export default CreateSet;
