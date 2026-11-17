import { useState } from "react";

import "./App.css";
import Activity from "./components/Activity";
import activities from "./data/activities.json";
function App() {
  // const [page, setPage] = useState("home");
  return (
    // <div className="max-w-xl m-auto">
    <div className="p-10">
      <header className="text-text">
        INTENT <span className="text-green">.</span>
      </header>
      <h1 className="text-text text-2xl">Wat verdient vandaag je aandacht?</h1>
      <span>Wat heb je nodig?</span>
      <main className="grid grid-cols-2 border-2 border-border rounded-2xl bg-gradient">
        {activities.map((activity) => (
          <Activity
            key={activity.id}
            text={activity.text}
            icon={activity.icon}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
