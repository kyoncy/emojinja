/* eslint-disable no-undef */
import React from 'react';
import penguin from '../statics/penguin.png'

const ClipBoard = () => {
  const copyImage = async () => {
    try {
      const data = await fetch(penguin);
      const blob = await data.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      console.log('Image copied.');
    } catch(e) {
      console.error(e);
    }
  }

  return (
    <button onClick={copyImage}>
      sample button
    </button>
  )
}

export default ClipBoard;
