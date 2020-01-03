const $ = el => document.querySelectorAll(el)

$('.btn').forEach(el => {
    el.addEventListener('mousedown', function(e) {

        let ripple = document.createElement('span')
        ripple.className = 'btn-ripple'
        this.appendChild(ripple)

        let rect = this.getBoundingClientRect()

        let width = rect.width
        let height = rect.height

        let posX = e.pageX - rect.left
        let posY = e.pageY - rect.top

        let rippleStyle = new RippleStyle(width, height, posX, posY)

        ripple.style.width = `${rippleStyle.width}px`
        ripple.style.height = `${rippleStyle.height}px`
        ripple.style.top = `${rippleStyle.top}px`
        ripple.style.left = `${rippleStyle.left}px`

        ripple.addEventListener('animationend', function () {
            this.remove()
        })
    })
})

function RippleStyle(width, height, posX, posY) {
    this.width = (width <= height) ? height : width
    this.height = (width <= height) ? height : width
    this.top = posY - (this.height * 0.5)
    this.left = posX - (this.width * 0.5)
}
