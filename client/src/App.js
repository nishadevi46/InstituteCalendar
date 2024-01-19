import { ChakraProvider } from "@chakra-ui/react";
import './App.css';
import Home from "./components/home/Home";
import Login from './components/account/Login'
import DataProvider from "./context/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <DataProvider>
       <ChakraProvider>
      <BrowserRouter>
        <Routes>
            < Route path='/login' element={<Login/>} />
           < Route path='/' element={<Home/>} />
        
        </Routes>
      </BrowserRouter>
      </ChakraProvider>
    </DataProvider>
  );
}

export default App;
