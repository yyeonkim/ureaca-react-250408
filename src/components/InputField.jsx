import React from 'react'

function InputField() {
  return (
    <form className="inputField">
      <input type="text" placeholder="가고싶은 여행지를 입력하세요" />
      <button>
        ADD <i className="fa-solid fa-plus" />
      </button>
    </form>
  )
}

export default InputField
