import React, { useState } from 'react';

function BaseForm({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    onSubmit(value);
    setValue('');
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  return (
    <form className="inputField" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="가고싶은 여행지를 입력하세요"
        onChange={handleChange}
      />
      <button>
        ADD <i className="fa-solid fa-plus" />
      </button>
    </form>
  );
}

export default BaseForm;
