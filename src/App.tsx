import Pickers from "./components/Pickers.tsx";
import SpriteForm from "./components/SpriteForm.tsx";
import Editor from "./components/Editor.tsx";

const App = () => {

  return (
    <div style={{display: "flex", justifyContent: 'center', padding: 70}}>
      <Pickers/>
      <div style={{marginLeft: 30}}>
        <SpriteForm/>
        <Editor/>
      </div>
    </div>
  );
};

export default App;