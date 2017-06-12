import React from 'react';

export default function App({
  name,
  nameInput,
  setNameInput,
  saveNameInput,
}) {
  return (
    <div>
      <h1>{name}</h1>
      <input type="text" value={nameInput} onChange={setNameInput} />
      <button onClick={saveNameInput}>save</button>
    </div>
  );
}
