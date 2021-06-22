import { useFormContext, Controller } from "react-hook-form";
import PropTypes from 'prop-types';
import '../InputHook/InputHook.module.css'
import { CheckBox } from "../FormHooks";
import { ErrorMessage } from "@hookform/error-message";


export const CheckBoxHook = ({ name, label, rules, width, onChange, defaultValue, ...custom }) => {

  const { control, formState: { errors } } = useFormContext()

  const defVal = defaultValue === true

  return (
    <div className="w-full m-2">
      <Controller control={ control }
                  render={ (props) => {
                    return (
                      <CheckBox value={ props.field.value }
                                label={
                                  <span>
                                  { rules?.validate?.isChecked &&
                                  <span className="text-red-600 mx-2">*</span>
                                  }
                                    { label }
                                </span>
                                }
                                onChange={ (event, { value }) => {
                                  if (onChange) {
                                    onChange(value);
                                  }
                                  props.field.onChange(value)
                                } }
                                onBlur={ () => props.field.onBlur() }
                                isError={errors && errors[name]}
                                { ...custom }
                      />
                    )
                  } }
                  rules={ rules }
                  name={ name }
                  defaultValue={ defVal }
      />
      <div className="pl-2">
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

CheckBoxHook.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rules: PropTypes.object,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}