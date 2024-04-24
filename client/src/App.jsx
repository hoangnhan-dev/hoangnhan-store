import {useRoutes} from "react-router-dom";
import {router} from "@/router/index.jsx";

function App() {
  return <div>{useRoutes(router)}</div>
}

export default App
