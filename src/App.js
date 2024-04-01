import React, { createContext, useReducer, useState } from "react";
import { NavLink } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import LoggedInPage from "./Components/LoggedInPage/LoggedInPage";

export const InputContext = createContext("");
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [state, dispatch] = useReducer(reducer, []);
  function reducer(state, action) {
    if (action.type == "basket") {
      let helper = true;
      if (state.length > 0) {
        state.map((item) => {
          if (action.payload.id === item.id) {
            helper = false;
          }
        });
      }

      if (helper === true) {
        return [...state, action.payload];
      } else {
        console.log("sd");
        return state.map((item) => {
          if (action.payload.id === item.id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
      }
    }
    if (action.type === "plus") {
      return state.map((item) => {
        return { ...item, count: item.count + 1 };
      });
    }
    if (action.type === "minus") {
      return state.map((item) => {
        if (item.count === 1) {
          return item;
        } else {
          return { ...item, count: item.count - 1 };
        }
      });
    }
    if (action.type === "delete") {
      return state.filter((item) => item.id !== action.payload.id);
    }
  }

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <InputContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      <div>
        {isLoggedIn ? <LoggedInPage /> : <LoginForm onLogin={handleLogin} />}
      </div>
    </InputContext.Provider>
  );
}

export default App;
