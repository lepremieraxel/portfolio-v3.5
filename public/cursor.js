const cursor = document.createElement('div')
cursor.classList.add('cursor')
document.body.appendChild(cursor)

const moveCursor = (e) => {
  let mouseX = e.pageX
  let mouseY = e.pageY
  let width = window.innerWidth
  let height = window.innerHeight
  if(width-mouseX < 5){
    mouseX -= 5
  }
  if(mouseX < 5){
    mouseX += 5
  }
  if(height-mouseY < 5){
    mouseY -= 5
  }
  if(mouseY < 5){
    mouseY += 5
  }
  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
}

window.addEventListener('mousemove', moveCursor)