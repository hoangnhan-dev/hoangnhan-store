import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {ConfigProvider} from "antd";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <ConfigProvider theme={{
              token: {
                  fontFamily: 'Jost',
              },
              components: {
                  Badge: {
                      indicatorHeight: 18,
                  },
              },
          }}>
              <App/>
          </ConfigProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
