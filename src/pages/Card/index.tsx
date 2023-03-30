import React, { useEffect, useState } from 'react'

import './scss/style.scss'

import Resultados from '../../Components/Resultados'
import Status from '../../Components/Status'

export default function Card() {

  const [valor, setValor] = useState(0)
  
  function atualizandoValor(novoValor:number) {
    setValor(novoValor);
  }
  console.log(valor);
  
  return (
    <div className='Card'>
      <Resultados resultado={valor} />
      <Status botao={valor}  status={atualizandoValor}/>
    </div>
  )
}
