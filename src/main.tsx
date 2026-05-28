import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; 

import App from './App.tsx'
import { MantineProvider } from "@mantine/core";

import '@mantine/core/styles/Badge.css';
import '@mantine/core/styles/Group.css';

import './App.scss'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </MantineProvider>
    </StrictMode>,
)