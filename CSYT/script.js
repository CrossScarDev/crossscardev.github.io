const form = document.querySelector('form')
const input = document.querySelector('input')

form.addEventListener('submit', e => {
    e.preventDefault()
    window.location.href = '/CSYT/watch#' + input.value.replace('https://www.youtube.com/watch?v=', "")
})