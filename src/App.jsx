import React, { useCallback, useState } from 'react';
import BaseForm from './components/BaseForm.jsx';
import Header from './components/Header.jsx';
import PostList from './components/PostList.jsx';
import { getData, saveData } from './utils/localStorage.js';

export default function App() {
  const [data, setData] = useState(getData('data'));

  const handleSubmit = inputValue => {
    // 유효성 검사
    if (inputValue.trim() === '') {
      alert('여행지를 입력하세요.');
      document.querySelector('input').focus();
      return;
    }
    // 데이터 저장
    const newData = [...data, inputValue];
    setData(newData);
    saveData('data', newData);
  };

  const handleDeleteItem = useCallback(
    item => {
      const newData = data.filter(prev => prev !== item);
      setData(newData);
      saveData('data', newData);
    },
    [data]
  );

  return (
    <>
      <Header />
      <main className="mw">
        <BaseForm onSubmit={handleSubmit} />
        <PostList list={data} onDeleteItem={handleDeleteItem} />
      </main>
    </>
  );
}
