import React from 'react'
import App from './App.jsx'
import {createRoot} from "react-dom/client"
import ContextProvider from './1_ContextApi/ContextProvider';

createRoot(document.getElementById("root")).render(<ContextProvider><App/></ContextProvider>)