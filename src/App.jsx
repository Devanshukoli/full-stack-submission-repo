import { useState } from "react";

const initialValues = [
  { title: 'Pretzels', id: 0 },
  { title: 'Crispy Seaweed', id: 1 },
  { title: 'Granola', id: 2 },
]

const App = () => {
  const [items, setItems] = useState(initialValues);
  const [selectedId, setSelectedId] = useState(0)

  const selectedItem = items.find(item => item.id === selectedId)
  
  const handleItemChange = (id, e) => {
    setItems(items.map((item) => {
      if (item.id === id) {
        return { ...item, title: e.target.value }
      } else {
        return item
      }
    }))
  }

  return (
    <div>
      <h1>What's in your travel pack?</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            <input value={i.title} onChange={(e) => handleItemChange(i.id, e)}></input>
            {' '}
            <button onClick={() => setSelectedId(i.id)}>choose</button>
          </li>
        ))}
      </ul>
      <p>In my backpack I have : {selectedItem.title}</p>
    </div>
  )
}

export default App;