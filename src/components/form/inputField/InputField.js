import { Label } from '../Label/Label';

export const InputField = ({
  label, type, value, onChange, placeholder
  }) => {
    return (
      <div>
        <Label >{label}</Label>
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value= {value}
        />
      
      </div>
    );
  };