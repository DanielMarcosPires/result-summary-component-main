import React, { useEffect, useState } from 'react'
import './scss/style.scss'
import jsonDados from './data.json'
export default function Status({status,botao}:any) {

  const [valores, setValores] = useState([0,0,0,0])

  useEffect(()=>{
    const newSoma = valores.reduce((total, value) => total + value, 0);
    const resultado = newSoma/valores.length
    status(resultado);
  },[valores])
  
  function dados(e:React.ChangeEvent<HTMLInputElement>,i:any) {
    const objeto =[...valores]
    objeto[i]= parseInt(e.target.value) <100? parseInt(e.target.value):100
    setValores(objeto)
    console.log(objeto);
    
  }
  
  return (
    <section className='Status'>
        <h2>Sumario</h2>
        <ul>{jsonDados.map((itens,i)=>
        <label htmlFor={`s${i}`} style={{background:itens.secundario}} key={`chave${i}`} className='StatusItem'>
              <div style={{color:itens.primario}}><img src={itens.icon} alt={`ícone ${i}`} /> {itens.category}</div>  <span className=''><input onChange={(e:any)=>{dados(e, i);
              }}  placeholder='0' id={`s${i}`} defaultValue={0} min={0} max={100} type='Number'/> /100</span>
        </label>
        )}
        </ul>
        <button onClick={()=>{alert(`The result is ${botao}`)}} className='statusButton'>Continue</button>
    </section>
  )
}
