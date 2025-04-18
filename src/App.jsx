import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import MainContent from './componets/MainContent';

import './App.css'


function App() {
  
{/* Stefano, io ho avuto dei problemi di connessione per via di lavvori svolti
  all interno del mio palazzo e non sono riuscito a fare tutto quello che volevo. Te lo dico solo per 
  specificare le poche implemetazioni e non mi andava di disturbarti nel weekend. Quindi ho fatto quello che sono riuscito
  a fare. Poi ho avuto un problema con le icone:nonostante mi sembra di ave implementato tutto correttamente, non si visualizzavano. 
  Se puoi lasciarmi un commento con la spiegazioe del perchè. Grazie in anticipo */}
  return (
    <>
     <div className=' h-100 min-vh-100' >
      <main >
<MainContent/>
</main>
     </div>
    </>
  )
}

export default App
