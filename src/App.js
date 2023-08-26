import React from 'react';
import './App.css';

function App() {
  const emojis = [
    {
    emoji: '😀',
    name: "test grinning face"
    },
    {
    emoji: '🎉',
    name: "party popper"
    },
    {
    emoji: '💃',
    name: "woman dancing"
    }
   ];
  const displayemojiName  =event => alert(event.target.id)
  const greeting = "greeting";
  const displayaction = false;
    return (
    <div className = "container">
    <h1 id={greeting} >hellow , world</h1>
    {displayaction &&<p>i am using react to create this web app </p>}
    <ul>
{

emojis.map(emoji => (<li key={emoji.name}>
  <button onClick={displayemojiName}>
  <span role="img" aria-label={emoji.name}
  id={emoji.name}>{emoji.emoji}</span> </button> </li>
  ))
}
</ul></div>)
}

export default App;
