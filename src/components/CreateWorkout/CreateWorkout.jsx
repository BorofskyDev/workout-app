import React, { useState } from 'react';
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
          <div className="workout__box sets">
            <label htmlFor="sets" className="workout__label">
              Enter number of sets
            </label>
            <input
              type="text"
              onChange={handleChange}
              name="sets"
              value={formData.value}
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
              onChange={handleChange}
              name="reps"
              value={formData.reps}
              className="workout__number"
              maxLength={3}
              required
            />
          </div>
          <div className="workout__box weight-type">
            <label htmlFor="isWeight" className="workout__label">
              Uncheck box if exercise uses body weight
            </label>
            <input
              type="checkbox"
              id="isWeight"
              checked={formData.isWeight}
              onChange={handleChange}
              name="isWeight"
              className="workout__check "
              required
            />
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
          <div className="workout__box submit-btn">
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreateWorkout;
