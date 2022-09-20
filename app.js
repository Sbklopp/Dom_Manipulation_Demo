/////////////////////////////////////////////////////////////
// VARIABLES FOR HIDING AND SHOWING
////////////////////////////////////////////////////////////

const demo_input = document.getElementById('demo_input_container')
const radio_button = document.getElementById('radio_button_container')
const output_a_hide = document.getElementById('output_A_container')
const output_b_hide = document.getElementById('output_B_container')


/////////////////////////////////////////////////////////////
const button_container = document.getElementById('button_container')
const button_hide = document.getElementById('demo_button_hide')

///////////////////////////////////////////////////////////////
const option1 = document.getElementById('option_1')
const option2 = document.getElementById('option_2')

//////////////////////////////////////////
//input variables
//////////////////////////////////////
const number = document.getElementById('demo_input')


/////////////////////////////////////////////////////
// OUTPUT VARIABLES
////////////////////////////////////////////////////
const output_a = document.getElementById('output_A')
const output_b = document.getElementById('output_B')



function hideFields() {
    demo_input.style.display = 'none'
    radio_button.style.display = 'none'
    output_a_hide.style.display = 'none'
    output_b_hide.style.display = 'none' 
}


function showFields() {
    demo_input.style.display = 'block'
    radio_button.style.display = 'block'
    output_a_hide.style.display = 'block'
    output_b_hide.style.display = 'block' 
}

function hide_stuff(){
    button_container.addEventListener('click', (e) => {
        if (e.target.id === 'demo_button_hide') {
            hideFields()
        }
    }
)}

function show_stuff(){
    button_container.addEventListener('click', (e) => {
        if (e.target.id === 'demo_button_show') {
            showFields()
        }
    }
)}

//////////////////////////////////////////////////////



hide_stuff()
show_stuff()
// hide_stuff()


function doMath(){
    radio_button.addEventListener('click', (e) => {
        if (e.target.id === 'option_1') {
            // number.addEventListener('input')
            output_a.value = number.value
        }
        else if (e.target.id === 'option_2') {
            output_b.value = number.value * 2
        }




    })
}


doMath()