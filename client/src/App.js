import { ChakraProvider } from "@chakra-ui/react";
import './App.css';
import Login from './components/account/Login'
function App() {
  return (
    <ChakraProvider>
    <Login />
  </ChakraProvider>
  );
}

export default App;
