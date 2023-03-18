import React from 'react'


export default function Validator(value, validations) {

    let arrey = []

    validations.map(validation => {
        if (validation.name === "min") {
            value.trim().length < validation.min && arrey.push(false)
        } else if(validation.name === "max"){
            value.trim().length > validation.max && arrey.push(false)
        }
         else if(validation.name === "email"){
            !value.includes("@")   && arrey.push(false)
        }
    })

    if (arrey.length > 0) {
        return false
    } else {
        return true
    }

}
