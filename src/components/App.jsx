import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import CreateArea from './CreateArea'

function App() {
  const [items, setItems] = useState([])
  const [count, setCount] = useState(2)

  function addItem(note) {
    setItems([...items, note])
    setCount(count + 1)
  }

  function deleteItem(id) {
    setItems(items.filter((item, index) => index !== id))
    setCount(count - 1)
  }

  return (
    <div>
      <Header countOfNotes={count} />
      <CreateArea addItem={addItem} />
      {items.map((item, index) => (
        <Note
          deleteItem={deleteItem}
          id={index}
          key={index}
          title={item.title}
          content={item.content}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App
