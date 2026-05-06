import { useState } from 'react';
import { initialTravelPlan } from './data/places.js';

function PlaceTree({ id, placesById, onComplete }) {
  const place = placesById[id]
  console.log('place...', place)
  const childIds = place.childIds;
  console.log('childIds...', childIds)
  return (
    <li>
      <span
        style={{
          textDecoration: place.visited ? 'line-through' : 'none',
          color: place.visited ? 'gray' : 'black'
        }}
      >
        {place.title}
      </span>
      <input type='checkbox' checked={place.visited || false} onChange={() => { onComplete(id) }} />
      {childIds.length > 0 && (
        <ol>
          {childIds.map(childId => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  );
}

export default function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);

  function handleComplete(id) {
    const place = plan[id]

    const updatedPlace = {
      ...place,
      visited: !place.visited
    }

    setPlan({
      ...plan,
      [id]: updatedPlace
    })
  }

  const root = plan[0];
  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree key={id} id={id} placesById={plan} onComplete={handleComplete} />
        ))}
      </ol>
    </>
  );
}
