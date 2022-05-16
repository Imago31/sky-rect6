/* eslint-disable no-unused-vars */
 
function MinMax({ min = 1, max, current, onChange }) {
  // валидация инпута
  function applyCurrent(num) {
    const validNum = Math.max(min, Math.min(max, num))
    onChange(validNum)
  }

  function parseCurrentStr(e) {
    // Прочти про parseInt ;) https://webformyself.com/chisla-v-javascript-funkciya-parseint/
    const num = parseInt(e.target.value, 10)
    applyCurrent(Number.isNaN(num) ? min : num)
  }

  const inc = () => {
    applyCurrent(current + 1); 
  }

  const dec = () => applyCurrent(current - 1)
  const del = (e) => {
    e.target.parentElement.parentElement.parentElement.remove()
    applyCurrent(current - 1)
  }

function onBlurFunc(e){
  console.log(e.target.value)
  if(!e.target.value){
    e.target.value="Поле не должно быть пустым!"
    e.target.style="color: red"
  }
}

  return (
    <div>

      <button  type="button" onClick={inc} className="addButton">+</button>

      <input type="text" value={current} onBlur={onBlurFunc} onChange={parseCurrentStr} />

      <button type="button" onClick={dec} className="removeButton">-</button>

      <button  type="button" onClick={del} className="removeBookButton">x</button>
      
    </div>
  )
}

export default MinMax
