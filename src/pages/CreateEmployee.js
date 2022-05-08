import { EmployeeForm } from '../components/employeeForm/EmployeeForm';
import {Modal} from 'anissa_p14_modal'
import { useState } from 'react';


export const CreateEmployee = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    return (
 <>
        <Modal
          show={modalIsOpen}
          setShow={setModalIsOpen}
        
          text="Employee has been created!"
        
        />
        <EmployeeForm setModalIsOpen={setModalIsOpen} />
        </>
    );
  };
     
    