import { useEffect, useState } from "react";
import "./App.css";
import ChallengeList from "./components/ChallengeList";
import axios from "axios";
import AddChallenge from "./components/AddChallenge";

function App() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    fetchChallenges();
  }, []);
  const fetchChallenges = async () => {
    try {
      const response = await axios.get("http://localhost:8080/challenges");
      setChallenges(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChallengeAdded = () => {
    fetchChallenges();
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Montly Challenges</h1>
      <AddChallenge onChallengeAdded={handleChallengeAdded}/>
      <ChallengeList challenges={challenges} />
    </div>
  );
}

export default App;
