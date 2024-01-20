import Router from "Router";
import authService from "Services/authService";
import httpService from "Services/httpService";
import { useEffect } from "react";

const userToken = authService.getToken();
httpService.setToken(userToken);

function App() {
  useEffect(() => {}, []);

  // Data to display
  return <>{Router}</>;
}

export default App;
