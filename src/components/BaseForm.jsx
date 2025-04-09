import React from 'react';

function BaseForm({ onSubmit, value, onChange }) {
  return (
    <form className="inputField" onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        placeholder="가고싶은 여행지를 입력하세요"
        onChange={e => onChange(e.target.value)}
      />
      <button>
        ADD <i className="fa-solid fa-plus" />
      </button>
    </form>
  );
}

export default BaseForm;
