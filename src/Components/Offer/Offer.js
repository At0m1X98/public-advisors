import React from 'react'
import './Offer.css'
import '../../App.css'

const Offer = () => {
  return (
    <div className='offer'>
      <div className='offer-top'>
        <h2>CENÍK SLUŽEB</h2>
        <p>
          Naše služby zahrnují zakládání firem, účetnictví, 
          zajištění překladatelů a pomoc při vyřizování víz, 
          trvalého bydliště i občasného průkazu. Zajistíme také 
          další administrativní úkony, abyste se mohli plně soustředit 
          na své podnikání. S Public Partners máte vše potřebné pro hladký 
          chod vaší společnosti.
        </p>
        <button>Rezervace</button>
      </div>
      <div className='offer-continer'>
        <div className='off'>
          <h3>Zakládám firmu</h3>
          <p>Some text</p>
        </div>
        <div className='off'>
          <h3>Účetnictví</h3>
          <p>Some text</p>
        </div>
        <div className='off'>
          <h3>Zajištění překldu</h3>
          <p>Some text</p>
        </div>
        <div className='off'>
          <h3>Vyřízení Víza</h3>
          <p>Some text</p>
        </div>
        <div className='off'>
          <h3>Vyřízení trvalého bydliště</h3>
          <p>Some text</p>
        </div>
        <div className='off'>
          <h3>Vyřízení občanského průkazu</h3>
          <p>Some text</p>
        </div>
        <div className='off'>
          <h3>Administrativa</h3>
          <p>Some text</p>
        </div>
      </div>
    </div>
  )
}

export default Offer
