import { useFormContext, Controller } from "react-hook-form";
import PropTypes from 'prop-types';
import './InputHook.module.css'
import { Input } from "../FormHooks";
import { ErrorMessage } from '@hookform/error-message';


export const InputHook = ({ name, label, rules, width, onChange, defaultValue, ...custom }) => {

  const { control, formState: { errors } } = useFormContext()

  const defVal = defaultValue === null || defaultValue === undefined ? '' : defaultValue

  return (
    <div className="w-full m-2">
      <Controller control={ control }
                  render={ (props) => {
                    return (
                      <Input value={ props.field.value }
                             label={
                               <span>
                               { label }
                                 { rules?.required &&
                                 <span className="text-red-600 mx-2">*</span>
                                 }
                             </span>
                             }
                             onChange={ (event) => {
                               props.field.onChange(event)
                               if (onChange) {
                                 onChange(event, event.target);
                               }
                               return event
                             } }
                             onBlur={ () => props.field.onBlur() }
                             name={ name }
                             isError={ errors && errors[name] }
                             { ...custom }
                      />
                    )
                  } }
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

InputHook.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rules: PropTypes.object,
  width: PropTypes.number,
  onChange: PropTypes.func,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}