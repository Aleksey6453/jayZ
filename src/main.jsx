import React from 'react'
import ReactDOM from 'react-dom/client'
import  Router  from './components/ui/Router'
import App from './App.jsx'
import './assets/styles/global.css'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&family=Quicksand:wght@300;500;700&display=swap');
</style>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
