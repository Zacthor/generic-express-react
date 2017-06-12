import React from 'react';

export default function App(crap) {
  const { name } = crap;
  return (
    <div>
      <h1 data-find="asshole">{name}</h1>
    </div>
  );
}
