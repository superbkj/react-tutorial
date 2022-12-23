import Button from "./Button.jsx";
import Input from "./Input.jsx";

function App() {
  function handleButtonClick() {
    //
  }

  function handleLastNameInput() {
    //
  }

  return (
    <div style={{display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap"}}>
        <Input placeholder="First name" />
        <Input placeholder="Last name" onInput={handleLastNameInput} />
        <Input placeholder="Email" type="email" required />
    </div>
  )
}

export default App
