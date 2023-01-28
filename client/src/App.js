import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./components/Messenger";
import AccountProvider from "./context/accountprovider";

function App() {
  const clientId = "396490456287-fsgjbr1nsel0couif34eluaduomagura.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}> 
      <div className="App">
        {/* Passing data in component 1. prop, 2. children */}
        <AccountProvider>
          <Messenger />
        </AccountProvider>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
