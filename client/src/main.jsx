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
                  colorPrimary: '#111111',
              },
              components: {
                  Badge: {
                      indicatorHeight: 18,
                  },
                  Input: {
                      activeBorderColor: '#111111',
                      activeShadow: 'none',
                      hoverBorderColor: 'none',
                  },
              },
          }}>
              <App/>
          </ConfigProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
