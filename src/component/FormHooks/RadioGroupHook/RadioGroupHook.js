import { Controller, useFormContext } from "react-hook-form";
import { Radio } from "../FormHooks";
import { ErrorMessage } from "@hookform/error-message";


const RadioGroupHook = ({ name, items, rules, onChange, defaultValue, ...custom }) => {

  const { control, formState: { errors } } = useFormContext()

  const defVal = defaultValue === null || defaultValue === undefined ? '' : defaultValue

  return (
    <div className="w-full m-2">
      <Controller control={ control }
                  render={ (props) =>
                    <div>
                      { items.map((item, index) =>
                        <Radio key={ index }
                               value={ item.value }
                               checked={ props.field.value === item.value }
                               disabled={ item.disabled === true }
                               label={
                                 <span>
                                   { item.label }
                                   { rules?.required &&
                                   <span className="text-red-600 mx-2">*</span>
                                   }
                                 </span>
                               }
                               onChange={ (event, { value }) => {
                                 props.field.onChange(value)
                                 if (onChange) {
                                   onChange(value);
                                 }
                                 return event
                               } }
                               onBlur={ () => props.field.onBlur() }
                               isError={ errors && errors[name] }
                               { ...custom }
                        />
                      )
                      }
                    </div>
                  }
                  rules={ rules }
                  name={ name }
                  defaultValue={ defVal }
      />
      <div>
        { errors &&
        <ErrorMessage errors={ errors }
                      name={ name }
                      render={ () =>
                        <div className='text-red-600 text-sm'>
                          { errors[name].message }
                        </div>
                      }
        />
        }
      </div>
    </div>
  )
}

export default RadioGroupHook