import React from 'react'
import Header from './components/Header.jsx'
import InputField from './components/InputField.jsx'
import PostList from './components/PostList.jsx'

export default function App() {
  const data = [
    '송도 센트럴파크',
    '파주 프로방스 / 헤이리 마을',
    '춘천 소양강 스카이워크',
    '이천 별빛정원우주',
  ]

  return (
    <>
      <Header />
      <main className="mw">
        <InputField />
        <PostList list={data} />
      </main>
    </>
  )
}
