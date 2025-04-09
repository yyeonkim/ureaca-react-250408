import React, { useCallback, useState } from 'react';
import BaseForm from './components/BaseForm.jsx';
import Header from './components/Header.jsx';
import PostList from './components/PostList.jsx';

const getData = () => {
  const data = localStorage.getItem('data');
  return data ? JSON.parse(localStorage.getItem('data')) : [];
};

const saveData = newData => {
  localStorage.setItem('data', JSON.stringify(newData));
};

export default function App() {
  const [data, setData] = useState(getData);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault(); // 새로고침 방지

    // 유효성 검사
    if (inputValue.trim().length < 2) {
      alert('두 글자 이상 입력하세요.');
      document.querySelector('input').focus();
      return;
    }

    const newData = [...data, inputValue];

    setData(newData);
    setInputValue('');
    saveData(newData);
  };

  const handleChange = newInputValue => {
    setInputValue(newInputValue);
  };

  const handleDeleteItem = useCallback(
    item => {
      const newData = data.filter(prev => prev !== item);
      setData(newData);
      saveData(newData);
    },
    [data]
  );

  return (
    <>
      <Header />
      <main className="mw">
        <BaseForm onSubmit={handleSubmit} value={inputValue} onChange={handleChange} />
        <PostList list={data} onDeleteItem={handleDeleteItem} />
      </main>
    </>
  );
}
