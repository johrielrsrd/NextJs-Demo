import { useState } from "react";

function Header(props) {
  return <h1>{props.title}</h1>;
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  const [likes, setLikes] = useState(0);

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={() => setLikes(likes + 1)}>Like ({likes})</button>
    </div>
  );
}
