const ExpenseFilter = ({ onSelectCategory  }) => {
    return (
        <select
            className='form-select'
            onChange={(evt) => onSelectCategory(evt.target.value)}>
            <option value=''>All categories</option>
            <option value='Groceries'>Groceries </option>
            <option value='Utilities'>Utilities</option>
            <option value='Entertainment'>Entertainment</option>
        </select>
    );
};

export default ExpenseFilter;
