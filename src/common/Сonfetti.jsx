import React from "react";
import style from './Confetti.module.css'

const Confetti = ()=>{
    const createElement = (x, y) => {
        const wrapper= document.querySelector('body')
        const element = document.createElement('span')
        const left = x
        const top = y
        const size = Math.round(Math.random() * 20 + 5)
        const duration = Math.round(Math.random() * 6 + 1)
        const borderRadius = Math.round(Math.random() * 1 + 0) === 0 ? 0 : 90
        const transformX = Math.round(Math.random() * 400 + -200)
        const transformY = Math.round(Math.random() * -800 + -200)
        const transformZ = Math.round(Math.random() * 300 + -200)
        const rotateDeg = Math.round(Math.random() * 360 + 0)

        const rgb1 = Math.round(Math.random() * 255 + 0)
        const rgb2 = Math.round(Math.random() * 255 + 0)
        const rgb3 = Math.round(Math.random() * 255 + 0)

        const color = `rgb(${rgb1}, ${rgb2}, ${rgb3})`

        element.style.left = `${left}px`
        element.style.top = `${top}px`
        element.style.height = `${size}px`
        element.style.width = `${size}px`
        element.style.backgroundColor = color
        element.style.borderRadius = `${borderRadius}px`

        element.animate([
            {
                transform: 'translate3D(0, 0, 0)',
                opacity: 1
            },
            {
                transform: `translate3D(${transformX}px, ${transformY}px, ${transformZ}px) rotate(${rotateDeg}deg)`,
                opacity: 0,
            },
        ], {
            duration: duration * 1000,
            iterations: Infinity,
        })

        wrapper.appendChild(element)
        setTimeout(() => {
            element.remove()
        }, duration * 1000)
    }
const render = console.log('Render')

    const onClick = (e) => {
        let elementCount = Math.round(Math.random() * 300 + 200)
        let elementArr = []
        for (let i = 0; i <= elementCount; i++) {
            elementArr.push(i)
        }
        const yg = window.innerHeight-50
        console.log(yg, window.innerHeight)

        elementArr.forEach(el => createElement(200, yg))
        elementArr.forEach(el => createElement(window.innerWidth-200, yg))
    }
    return (
        <div>
            {render}
            <button onClick={onClick}></button>
            <div className={style.wrapper}></div>
        </div>
    )
}

export default Confetti
