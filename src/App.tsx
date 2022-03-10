import { useState } from "react";
import MainButton from "./components/MainButton";
import { MainContainer } from "./styles/global";

function App() {
  const [start, setStart] = useState(true);
  return (
    <div>
      {start ? (
        <MainContainer>
          <MainButton setStart={setStart} />
        </MainContainer>
      ) : null}
      <MainContainer></MainContainer>
    </div>
  );
}

export default App;
