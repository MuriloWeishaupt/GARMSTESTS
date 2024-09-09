import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import GarmsSimbolo from './components/GarmsSimbolo';


const api = axios.create({
  baseURL: 'http://3.145.65.214:3000',
});

function App() {

  const [cars, setCars] = useState([])
  const [carro, setName] = useState('')
  const [marca, setMarca] = useState('')
  const [placa, setPlaca] = useState('')
  const [ano, setAno] = useState('')

  useEffect(() => {
    api.get('/carros')
      .then((response) => {
        console.log(response.data)
        setCars(response.data)
      })
      .catch(error => console.error('Erro:', error))
  }, [])

  function newAuto() {
    api.post('/carros', { carro, marca, placa, ano })
      .then((response) => {
        setCars([...cars, response.data])
      })
      .catch(error => console.error('Erro ao adicionar carro:', error))
  }

  function deleteAuto(id) {
    api.post('/carros${id}', { carro, marca, placa, ano })
      .then((response) => {
        setCars(cars.filter(car => car.id !== id))
      })
      .catch(error => console.error('Erro ao deletar carro:', error))
  }


  return ( 
    <div>
      <GarmsSimbolo/>
      <Navbar/>
      
      <div className='title'>      
        <h1>Cadastro de Carros</h1>
      </div>
      <h1>Banco de Dados</h1>

      <div className='container'>
        <h2>Adicionar novo carro</h2>
        <input placeholder='Nome' onChange={event => setName(event.target.value)} value={carro} />
        <input placeholder='Marca' onChange={event => setMarca(event.target.value)} value={marca} />
        <input placeholder='Placa' onChange={event => setPlaca(event.target.value)} value={placa} />
        <input placeholder='Ano' onChange={event => setAno(event.target.value)} value={ano} />
        <div>
        <button onClick={newAuto}>Adicionar carro</button>  
        </div>
      </div>

      <div className='lista-banco'>
        <table>
          <thead>
            <tr>
              <th>Carro</th>
              <th>Marca</th>
              <th>Placa</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>
            {cars.map(auto => (
              <tr key={auto.id}>
                <td>{auto.carro}</td>
                <td>{auto.marca}</td>
                <td>{auto.placa}</td>
                <td>{auto.ano}</td>
                <button id="trash-icon" onClick={deleteAuto}><img id='trash-bin-icon' alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CjxwYXRoIGQ9Ik0gMTAgMiBMIDkgMyBMIDUgMyBDIDQuNCAzIDQgMy40IDQgNCBDIDQgNC42IDQuNCA1IDUgNSBMIDcgNSBMIDE3IDUgTCAxOSA1IEMgMTkuNiA1IDIwIDQuNiAyMCA0IEMgMjAgMy40IDE5LjYgMyAxOSAzIEwgMTUgMyBMIDE0IDIgTCAxMCAyIHogTSA1IDcgTCA1IDIwIEMgNSAyMS4xIDUuOSAyMiA3IDIyIEwgMTcgMjIgQyAxOC4xIDIyIDE5IDIxLjEgMTkgMjAgTCAxOSA3IEwgNSA3IHogTSA5IDkgQyA5LjYgOSAxMCA5LjQgMTAgMTAgTCAxMCAxOSBDIDEwIDE5LjYgOS42IDIwIDkgMjAgQyA4LjQgMjAgOCAxOS42IDggMTkgTCA4IDEwIEMgOCA5LjQgOC40IDkgOSA5IHogTSAxNSA5IEMgMTUuNiA5IDE2IDkuNCAxNiAxMCBMIDE2IDE5IEMgMTYgMTkuNiAxNS42IDIwIDE1IDIwIEMgMTQuNCAyMCAxNCAxOS42IDE0IDE5IEwgMTQgMTAgQyAxNCA5LjQgMTQuNCA5IDE1IDkgeiI+PC9wYXRoPgo8L3N2Zz4="/></button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default App
