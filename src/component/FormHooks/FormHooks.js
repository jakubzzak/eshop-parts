import { createRef, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { motion } from 'framer-motion'
import {
  CheckBox as CheckBoxIcon,
  CheckBoxOutlineBlank,
  RadioButtonChecked,
  RadioButtonUnchecked,
} from '@material-ui/icons';
import './FormHooks.css'


const useFocus = () => {
  const ref = createRef()
  const setFocus = () => { ref.current && ref.current.focus() }

  return { ref, setFocus }
}

export const Input = ({ value, label, onChange = () => {}, onBlur = () => {}, onFocus = () => {}, isError }) => {

  const [isActive, setActive] = useState(false)
  const { ref, setFocus } = useFocus()

  const variants = {
    hidden: {
      scale: 1,
      x: 10,
      y: 0,
      // opacity: 0,
      transition: {
        duration: .2,
      }
    },
    show: {
      scale: .8,
      x: -5,
      y: -20,
      // opacity: 1,
      transition: {
        duration: .2,
      }
    },
  }

  return (
    <div className={ `border-b pt-1 relative w-full rounded ${ isError ? 'border-red-500' : '' }` }>
      <motion.div initial="hidden"
                  animate={ isActive || (value && value.length > 0) ? "show" : "hidden" }
                  variants={ variants }
                  onClick={ () => setFocus() }
                  className="text-gray-500 absolute ml-1 mt-3">
        { label }
      </motion.div>
      <div className="mt-3">
        <input autoComplete='off'
               ref={ ref }
               className={ `outline-none focus:outline-none w-full pl-2 ${ value ? 'rounded' : '' }` }
               value={ value }
               onChange={ (event) => {
                 if (onChange) {
                   onChange(event, event.target);
                 }
                 return event
               } }
               onBlur={ () => {
                 setActive(false)
                 onBlur()
               } }
               onFocus={ () => {
                 setActive(true)
                 onFocus()
               } }
        />
      </div>
    </div>
  )
}

Input.propTypes = {
  value: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}

export const Radio = ({ value, label, onChange = () => {}, onBlur = () => {}, onFocus = () => {}, disabled, checked, isError }) => {

  const handleChange = (event) => {
    onChange(event, { value })
  }

  return (
    <div className="p-2 pb-0 w-full rounded flex items-center">
      { checked ? (
        <RadioButtonChecked className={`cursor-pointer`}/>
      ) : (
        <RadioButtonUnchecked className={`cursor-pointer`} color={isError ? "error":"inherit"} onClick={ handleChange }/>
      ) }
      <div className="mx-3">{ label }</div>
    </div>
  )
}

Radio.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}

export const CheckBox = ({ value, label, onChange = () => {}, onBlur = () => {}, onFocus = () => {}, isError }) => {

  const [isChecked, setChecked] = useState(null)

  const handleChange = (event) => {
    const newValue = !isChecked
    onChange(event, { value: newValue })
    setChecked(newValue)
  }

  useEffect(() => {
    setChecked(value)
  }, [value])

  return (
    <div className="p-2 pb-0 w-full rounded flex items-center">
      { isChecked ? (
        <CheckBoxIcon className={`cursor-pointer`} onClick={ handleChange }/>
      ) : (
        <CheckBoxOutlineBlank className={`cursor-pointer`} color={isError ? "error":"inherit"} onClick={ handleChange }/>
      ) }
      <div className="mx-3">{ label }</div>
    </div>
  )
}

CheckBox.propTypes = {
  value: PropTypes.bool.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}

export const Row = () => {

  return (
    <div className="flex">

    </div>
  )
}