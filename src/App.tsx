import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Switch } from './components/Switch'

function App() {
  const [checked, setChecked] = useState(true)
  return (
    <div className="App">
      <h1>Checked Switch</h1>
      <Switch checked={checked} onChange={setChecked}></Switch>

      <h1>Sizes</h1>
      <table>
        <tr>
          <td>Small</td>
          <td>
            <Switch
              size="small"
              checked={checked}
              onChange={setChecked}
            ></Switch>
          </td>
        </tr>
        <tr>
          <td>Medium</td>
          <td>
            <Switch
              size="medium"
              checked={checked}
              onChange={setChecked}
            ></Switch>
          </td>
        </tr>
        <tr>
          <td>Large</td>
          <td>
            <Switch
              size="large"
              checked={checked}
              onChange={setChecked}
            ></Switch>
          </td>
        </tr>
      </table>

      <h1>Un-Checked Switch</h1>
      <Switch
        disabled
        checked={!checked}
        onChange={checked => setChecked(!checked)}
      />
    </div>
  )
}

export default App
