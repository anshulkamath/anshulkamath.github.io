import React from 'react'
import { createRoot } from 'react-dom/client'

import RootPage from 'pages/root'

const container = document.getElementById('root')
if (!container) {
  throw new Error('The webpage does not have a root element to inject into')
}

createRoot(container).render(<RootPage />)
