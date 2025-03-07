import React from 'react'
import './Offer.css'
import '../../App.css'

const Offer = () => {
  return (
    <div className='offer'>
      <div className='offer-top'>
        <h2>Nabídka služeb</h2>
        <p>
        Nám tým Jsme mladý dynamicky tým plný energie orientujeme se v dnešním uspěchaném světě a nebojíme se výzev.
        </p>
        <button>Rezervace</button>
      </div>
      <div className='offer-continer'>
        <div className='off'>
          <h3>Zakládám firmu</h3>
          <p>Provedeme vás všemi povinnostmi k založení s.r.o a OSVČ.</p>
        </div>
        <div className='off'>
          <h3>E-learning</h3>
          <p>Nabízíme levnější a edukativní variantu kdy můžete využít náš program e-learning kde vás zasvětíme ohledně české administrativy, investic a podnikání. </p>
        </div>
        <div className='off'>
          <h3>Zajištění překldu</h3>
          <p>Seženeme za vás soudního překladatele a vše s ním domluvíme.</p>
        </div>
        <div className='off'>
          <h3>Vyřízení trvalého bydliště a občanského průkazu</h3>
          <p>Pomůžeme vám projít náročnými administrativními kroky k dosažení trvalého bydliště a občanského průkazu.</p>
        </div>
        <div className='off'>
          <h3>Ostatní služby</h3>
          <p>Potřebujete pomoct či poradit s něčím jiným? Obraťte se na nás a my uděláme vše co bude v našich silách.   </p>
        </div>
      </div>
    </div>
  )
}

export default Offer
