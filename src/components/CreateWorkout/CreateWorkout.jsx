import React, { useState } from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa';

function CreateWorkout() {
    const [formData, setFormData] = useState({
        exerciseName: "",
        sets: "",
        reps: "",
        weightType: "",
        useWeight: true,
        restPeriod: ""
    })
  return (
    <section className="workout">
      <h2 className="workout__title">Create Workout</h2>
      <div className="workout__main">
        <form  className="workout__form">
            <input type="text" placeholder="Exercise Name"  className="workout__input" />
        </form>
      </div>
    </section>
  );
}

export default CreateWorkout