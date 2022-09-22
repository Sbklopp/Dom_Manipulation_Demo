/////////////////////////////////////////////////////////////
// VARIABLES FOR HIDING AND SHOWING 
////////////////////////////////////////////////////////////

const demoInput = document.getElementById('demo-input-container')
const radioButton = document.getElementById('radio-button-container')
const outputContainerA = document.getElementById('output-A-container')
const outputContainerB = document.getElementById('output-B-container')
const outputContainerC = document.getElementById('output-C-container')


/////////////////////////////////////////////////////////////
const buttonContainer = document.getElementById('button-container')
const buttonHide = document.getElementById('demo-button-hide')
const buttonClear = document.getElementById('demo-button-clear')

///////////////////////////////////////////////////////////////
// const button_option1 = document.getElementById('button-option-1')
const doubleInput = document.getElementById('double-input-button')

////////////////////////////////////////////////////////////////
//input variables
/////////////////////////////////////////////////////////////////
const inputNumber = document.getElementById('demo-input')


/////////////////////////////////////////////////////
// OUTPUT VARIABLES
////////////////////////////////////////////////////
const outputA = document.getElementById('output-A')
const outputB = document.getElementById('output-B')
const outputC = document.getElementById('output-C')

///////////////////////////////////////////////////////////////////
// Functions to hide and show div elements and clear input/output fields
////////////////////////////////////////////////////////////////////

// NOTE: These functions are defined here but called below,
// Remember functions must be called in order to have any effect.


function hideFields() {
    demoInput.style.display = 'none'
    radioButton.style.display = 'none'
    outputContainerA.style.display = 'none'
    outputContainerB.style.display = 'none'
    outputContainerC.style.display = 'none' 
}


function showFields() {
    demoInput.style.display = 'block'
    radioButton.style.display = 'block'
    outputContainerA.style.display = 'block'
    outputContainerB.style.display = 'block' 
    outputContainerC.style.display = 'block'
}

function clearFields(){
    inputNumber.value = ''
    outputA.value = ''
    outputB.value = ''
    outputC.value = ''
}

///////////////////////////////////////////////////////////////////////



// When the hide button is clicked the hideFields function is called

buttonContainer.addEventListener('click', (e) => {
    if (e.target.id === 'demo-button-hide') {
        hideFields()
    }
})


// When the show button is clicked the showFields button is called 

buttonContainer.addEventListener('click', (e) => {
    if (e.target.id === 'demo-button-show') {
        showFields()
    }
})


// When the clear button is clicked the clearFields function is called 

buttonContainer.addEventListener('click', (e) => {
    if (e.target.id === 'demo-button-clear') {
        clearFields()
    }
})

////////////////////////////////////////////////////////////////////////////




radioButton.addEventListener('click', (e) => {
    if (e.target.id === 'double-input-button') {
        outputB.value = outputA.value * 2
        outputC.value = Number(outputA.value) + Number(outputB.value)  
    }
})



inputNumber.addEventListener('input', () => {
    outputC.value = Number(outputA.value) + Number(outputB.value)  
})


inputNumber.addEventListener('input', () =>{
    outputA.value = inputNumber.value
    outputC.value = Number(outputA.value) + Number(outputB.value)  
})




doMath()
total()
