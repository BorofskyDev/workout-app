import React, { useState } from 'react';
import CreateSet from './CreateSet';
import './CreateWorkout.css';

function CreateWorkout() {
  const [formData, setFormData] = useState({
    exerciseName: '',
    sets: '',
    reps: '',
    isWeight: true,
    restPeriod: '',
    workoutType: '',
  });
  const [displaySet, setDisplaySet] = useState([])
  
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    const limit = 3;
    setFormData(event.target.value.slice(0, limit));
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function addSet(){
    setDisplaySet(displaySet.concat(<CreateSet key={displaySet.length} />))
  }

  return (
    <section className="workout">
      <h2 className="workout__title">Create Workout</h2>
      <div className="workout__main">
        <form className="workout__form">
          <div className="workout__box exercise-name">
            <label htmlFor="exerciseName" className="workout__label">
              Enter exercise name
            </label>
            <input
              type="text"
              placeholder="Exercise Name"
              onChange={handleChange}
              name="exerciseName"
              value={formData.exerciseName}
              className="workout__input"
              maxLength={25}
              required
            />
          </div>
            <div className="workout__add-set">
              <p onClick={addSet}>Add Set</p>
              {displaySet}
            </div>
          <div className="workout__box rest-period">
            <label htmlFor="restPeriod" className="workout__label">
              Enter rest duration in seconds
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="restPeriod"
              value={formData.restPeriod}
              className="workout__number"
              maxLength={3}
            />
          </div>
          <div className="workout__box workout-type">
            <label htmlFor="workoutType" className="workout__label">
              Select Exercise Type
            </label>
            <select
              name="workoutType"
              id="workoutType"
              onChange={handleChange}
              value={formData.workoutType}
              className="workout__selection"
            >
              <option value="upperBody">Upper Body</option>
              <option value="upperBody">Lower Body</option>
              <option value="upperBody">Core (Abs)</option>
              <option value="upperBody">Cardio</option>
              <option value="upperBody">Other</option>
            </select>
          </div>
          <div className="workout__box submit-button">
            <button className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateWorkout;
