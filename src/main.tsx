import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {MantineProvider} from "@mantine/core";
import '@mantine/core/styles/Badge.css';
import '@mantine/core/styles/Group.css';

import './App.scss'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MantineProvider>
          <App />
      </MantineProvider>
  </StrictMode>,
)
