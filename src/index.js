import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Propsfile from "./Propsfile";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const employeesinfo = [
  {
    fisrtname: "Mani",
    email: "mani@gmail.com",
    age: "21"
  },
  {
    fisrtname: "Ram",
    email: "Ram@gmail.com",
    age: "21"
  },
  {
    fisrtname: "arun",
    email: "arun@gmail.com",
    age: "21"
  },
  {
    fisrtname: "dev",
    email: "dev@gmail.com",
    age: "21"
  }
];
root.render(
  <StrictMode>
    <App />
    {employeesinfo.map((employee) => {
      const { firstname, email, age } = employee;
      /*return <Propsfile firstname={firstname} email={email} age={age} />;*/
      return <Propsfile {...employee} />;
    })}

    {/* <Propsfile name="hari" email="hari@gmail.com" age="21" /> 
    <Propsfile name="ravi" email="ravi@gmail.com" age="21" />
    <Propsfile name="arjun" email="arjun@gmail.com" age="21" /> */}
  </StrictMode>
);
