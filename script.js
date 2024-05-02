
const div = document.querySelector('div')
const buttons = div.querySelectorAll('button')
const spanContainer = document.querySelector('span')
const spanChildren = spanContainer.querySelectorAll('span')

spanChildren[0].textContent = 0
// spanChildren[1].textContent = 'persons'

div.style.backgroundColor = '#f54'
div.style.width = '25%'
div.style.padding = '1rem'
div.style.borderRadius = '0.8rem'
div.style.display = 'flex'
div.style.justifyContent = 'center'
div.style.cursor = 'pointer'

buttons.forEach((button)=>{
    button.style.color = '#fff'
    button.style.backgroundColor = 'transparent'
    button.style.border = 'none'
    button.style.cursor = 'pointer'

    button.addEventListener('mouseover', ()=>{
        if (button == buttons[0]) {
            button.style.transform = 'translateX(-6px) scale(150%, 150%)'
            div.style.backgroundImage = 'linear-gradient(to left, #f54, #a54)'
        } else {
            button.style.transform = 'translateX(6px) scale(150%, 150%)'
            div.style.backgroundImage = 'linear-gradient(to right, #f54, #a54)'
        }
    })

    button.addEventListener('mouseout', ()=>{
        if (button == buttons[0]) {
            button.style.transform = 'none'
            div.style.backgroundImage = 'none'
        } else {
            button.style.transform = 'none'
            div.style.backgroundImage = 'none'
        }
    })

    button.addEventListener('click', ()=>{
        if (button == buttons[0]) {
            spanChildren[0].textContent--
            // console.log(spanChildren[0].textContent);
            if (spanChildren[0].textContent <= 0) {
                spanChildren[0].textContent = 0
            }
        } else {
            spanChildren[0].textContent++
            // console.log(spanChildren[0].textContent);
        }
    })
})

// spanChildren[0].outerHTML === 1 ? spanChildren[1].textContent = 'person' : 'persons'
// console.log(spanChildren[1].);


spanContainer.style.color = '#ddd'