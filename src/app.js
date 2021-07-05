import { useState } from "react";
import { Navigation } from "./components/Navigation";

export const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div id="#home">
      <Navigation setCategory={setCategory} />
    </div>
  );
};
