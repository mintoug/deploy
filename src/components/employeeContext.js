import React, {useState, createContext} from "react";





export const EmployeeContext = createContext(null);

export const EmployeeProvider = ({children}) => {
    const [employees, setEmployees] = useState([]);
	const addEmployee = (newItem) => {
		const updatedData = [...employees, newItem];
		setEmployees(updatedData);
	};
 
    return (
        <div>
           <EmployeeContext.Provider value={{employees, addEmployee}}>
                      {children}
           </EmployeeContext.Provider>
        </div>
    );
}


