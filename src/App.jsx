import React from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import { Context as ExpenseContext } from "./Context/ExpenseContext";
import {
    EXPENSE_CATEGORY,
    EXPENSE_DELETE,
} from "./Context/ExpenseContext/types";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

const App = () => {
    const { dispatch, visibleExpenses, handleSubmit } =
        React.useContext(ExpenseContext);
    return (
        <div className='container'>
            <div className='my-3'>
                <ExpenseForm onSubmit={(evt) => handleSubmit(evt)} />
            </div>
            <div className='my-3'>
                <ExpenseFilter
                    onSelectCategory={(value) =>
                        dispatch({ type: EXPENSE_CATEGORY, payload: value })
                    }
                />
            </div>
            <ExpenseList
                expenses={visibleExpenses}
                onDelete={(id) =>
                    dispatch({ type: EXPENSE_DELETE, payload: id })
                }
            />
        </div>
    );
};

export default App;
