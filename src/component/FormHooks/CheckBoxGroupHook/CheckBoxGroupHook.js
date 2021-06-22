import { useFormContext, Controller } from "react-hook-form";
import PropTypes from 'prop-types';
import '../InputHook/InputHook.module.css'
import { CheckBox } from "../FormHooks";


export const CheckBoxGroupHook = ({ name, items, rules, width, onChange, defaultValue, ...custom }) => {

  const { control, formState: { errors } } = useFormContext()

  const defVal = defaultValue === null || defaultValue === undefined ? '' : defaultValue

  return (
    <Controller control={ control }
                render={ (props) =>
                  <div>
                    { items.map((item, index) =>
                      <CheckBox key={index}
                                value={ props.field.value }
                                label={ item.label }
                                checked={ props.field.value === item.value }
                                onChange={ (event) => {
                                  props.field.onChange(event)
                                  if (onChange) {
                                    onChange(event, event.target);
                                  }
                                  return event
                                } }
                                onBlur={ () => props.field.onBlur() }
                                isError={ errors && errors[name] }
                                { ...custom }
                      />
                    ) }
                  </div>
                }
                rules={ rules }
                name={ name }
                defaultValue={ defVal }
    />
  )
}

CheckBoxGroupHook.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  rules: PropTypes.object,
  onChange: PropTypes.func,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}