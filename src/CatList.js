// write your CatList component here
import React from 'react';

const CatList = props => {
  return (
    <div>
      <h2>CatList</h2>
      {props.catPics.map(cat => <img src={cat.url} alt="Cat Pic!"></img>)}
    </div>
  );
};

export default CatList;
