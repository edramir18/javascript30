document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Loaded')
  function inputHandler (event) {
    if (event.buttons === 0 && event.type === 'mousemove') return
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
  }

  const inputs = document.querySelectorAll('input')
  inputs.forEach(input => {
    input.addEventListener('change', inputHandler)
    input.addEventListener('mousemove', inputHandler)
  })
})
