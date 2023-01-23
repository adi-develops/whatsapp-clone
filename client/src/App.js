import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./components/Messenger";

function App() {
  const clientId = "396490456287-fsgjbr1nsel0couif34eluaduomagura.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        <Messenger />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
