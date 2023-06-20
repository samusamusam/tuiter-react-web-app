import AuthContext from "./tuiter/user/auth-context";
import Labs from "./labs";
import Tuiter from "./tuiter";
import "./App.css";
import { BrowserRouter, Link, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import Assignment3 from "./labs/a3";
import Assignment4 from "./labs/a4";
import Routing from "./labs/a3/routing";
import Navigation from "./nav";
import HelloWorld from "./labs/a3/hello-world";
import Todos from "./todos";
import TodosRedux from "./todos-redux";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/todos-redux/*" element={<TodosRedux />} />
          <Route path="/todos/*" element={<Todos />} />
          <Route path="/" element={<Navigate to="/labs/" />} />
          <Route path="/labs/*" element={<Labs />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/tuiter/*" element={<Tuiter />} />
          <Route path="/labs/a3" element={<Assignment3 />} />
          <Route path="/labs/a4" element={<Assignment4 />} />
          <Route path="/labs/a3/routing/*" element={<Routing />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
