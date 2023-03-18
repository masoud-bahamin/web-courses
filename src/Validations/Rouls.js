
const minValid = (min) => {
    return {
        name : "min" ,
        min
    }
}
const maxValid = (max) => {
    return {
        name : "max" ,
        max
    }
}

const emailValid = () => {
    return{
        name:"email"
    }
}

export { maxValid , minValid , emailValid} 