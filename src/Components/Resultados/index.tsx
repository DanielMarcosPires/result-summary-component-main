import React from 'react'
import './scss/style.scss'

export default function Resultados({resultado}:any) {
  return (
    <aside className='resultados'>
      <h2>Result</h2>
      <div>
        <h1>{resultado}</h1>
        <p>of 100</p>
      </div>
      <p>You scored highter than {resultado}% of the people who have taken thse tests.</p>
    </aside>
  )
}
