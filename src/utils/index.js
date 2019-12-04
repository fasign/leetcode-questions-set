export function appendRes (title, res) {
  let el = document.createElement('p')
  el.innerText = title + ' ' + res
  document.querySelector('#answer').append(el)
}

export function appendDelimiter (title) {
  let el = document.createElement('p')
  el.innerText = title
  el.style.fontSize = 20 + 'px'
  document.querySelector('#answer').append(el)
}
