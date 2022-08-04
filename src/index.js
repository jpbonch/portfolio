import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const characters = [
  {
    name: 'Charlie',
    job: 'Janitor',
  },
  {
    name: 'Mac',
    job: 'Bouncer',
  },
  {
    name: 'Dee',
    job: 'Aspring actress',
  },
  {
    name: 'Dennis',
    job: 'Bartender',
  },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App characterData={characters}/>);