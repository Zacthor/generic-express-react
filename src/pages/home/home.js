import React from 'react';
import PropTypes from 'prop-types';

export default function Home({
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

Home.propTypes = {
  name: PropTypes.string.isRequired,
  nameInput: PropTypes.string,
  setNameInput: PropTypes.func.isRequired,
  saveNameInput: PropTypes.func.isRequired,
}
