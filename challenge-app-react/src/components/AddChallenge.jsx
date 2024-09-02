import axios from "axios";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AddChallenge({ onChallengeAdded }) {
  const [month, setMonth] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/challenges", {
        month,
        description,
      });
      setMonth("");
      setDescription("");
      onChallengeAdded();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card my-5">
      <div className="card-header">Add New Challenge</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="month" className="form-label">
              Month
            </label>
            <input
              className="form-control"
              type="text"
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              placeholder="e.g., January"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control mb-3"
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="describe the challenge"
              required
            />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddChallenge;
