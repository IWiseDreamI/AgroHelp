import './App.css';
import Axios from "axios"
import socketIO from 'socket.io-client';

import Header from "./components/Header"

const socket = socketIO.connect('http://localhost:5000');
console.log(socket)

Axios.defaults.withCredentials = true
Axios.defaults.baseURL = "http://localhost:5000/"

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
