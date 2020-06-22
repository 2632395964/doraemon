import string from './css.js'
let n = 1
demo.innerText = string.substr(0, n)
demo2.innerHTML = string.substr(0, n)

let time = 100

const run = ()=>{
  n += 1
  if (n > string.length) {
    window.clearInterval(id)
    return
  }
  demo.innerText = string.substr(0, n)
  demo2.innerHTML = string.substr(0, n)
  demo.scrollTop = demo.scrollHeight
}

const play = ()=>{
  return setInterval(run, time)
}

let id = play()

slow.onclick = () =>{
  window.clearInterval(id)
  time = 300
  id = play()
}
normal.onclick = () =>{
  window.clearInterval(id)
  time = 100
  id = play()
}
fast.onclick = () =>{
  window.clearInterval(id)
  time = 0
  id = play()
}