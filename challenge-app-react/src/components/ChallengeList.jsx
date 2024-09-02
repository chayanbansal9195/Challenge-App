import Challenge from "./Challenge";

function ChallengeList({ challenges }) {
  return (
    <div className="list-group">
      {challenges.map((challenge) => (
        <Challenge challenge={challenge} />
      ))}
    </div>
  );
}

export default ChallengeList;
