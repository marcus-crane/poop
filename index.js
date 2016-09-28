while (true) {
  var el = document.createElement('p')
  el.innerText = String.fromCodePoint(0xD83D, 0xDCA9)
  document.body.appendChild(el)
}
