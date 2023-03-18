import React, { useReducer } from 'react'


const reducer = (state, action) => {
    switch (action.type) {
      case "FORM": {
        let isFormValid = true
        for (const key in state.inputs) {
          if (key === action.id) {
            isFormValid = isFormValid && action.isValid
          } else {
            isFormValid = isFormValid && state.inputs[key].isValid
          }
        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.id]: {
              value: action.value,
              isValid: action.isValid
            }
  
          },
          isFormValid: isFormValid
        }
      }
      default: {
        return state
      }
    }
  }

export default function useForm(inputs , isFormValid) {

    const [formState, dispatch] = useReducer(reducer, {
        inputs,
        isFormValid: isFormValid
      })
    
    
      const formHandler = (id, value, isValid) => {
        dispatch({
          type: "FORM",
          id,
          value,
          isValid
        })
      }

  return [formState , formHandler]
    
  
}
