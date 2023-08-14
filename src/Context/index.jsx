import React from "react";
import { Provider as ExpenseContext } from "./ExpenseContext";

const Context = React.createContext(null);

const Provider = ({ children }) => {
    return (
        <Context.Provider value={{}}>
            <ExpenseContext>{children} </ExpenseContext>
        </Context.Provider>
    );
};

export { Context, Provider };
