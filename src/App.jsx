import { useState } from "react";

const initialValues = [
  { title: 'Pretzels', id: 0 },
  { title: 'Crispy Seaweed', id: 1 },
  { title: 'Granola', id: 2 },
]

const App = () => {
  const [items, setItems] = useState(initialValues);
  const [selectedItem, setSelectedItems] = useState(items[0])

  return (
    <div>
      <h1>What's in your travel pack?</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.title}
            {' '}
            <button onClick={() => setSelectedItems(i)}>button</button>
          </li>
        ))}
      </ul>
      <p>In my backpack I have : {selectedItem.title}</p>
    </div>
  )
}

export default App;