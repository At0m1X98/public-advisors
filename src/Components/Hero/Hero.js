import React from 'react'
import './Hero.css'
import '../../App.css'

const Hero = () => {

  return (
    <div className='hero'>
        <div className='hero-container'>
            <div className='hero-left'>
                <h1>Public <br/>Advisors</h1>
                <p>
                    Vítejte v Public Advisors, vašem spolehlivém partnerovi pro zakládání firem, 
                    administrativní služby, personální řešení a vzdělávací kurzy. Nabízíme 
                    komplexní služby, které zahrnují vše od zakládání firem až po zajišťování 
                    administrativních úkonů, čímž vám usnadňujeme podnikání. S Public Advisors 
                    je vaše podnikání efektivnější, snadnější a připravené na růst. Ceník služeb 
                    Naše služby zahrnují, zakládání firem, zajištění překladatelů a pomoc při vyřizování víz, 
                    trvalého bydliště i občanského průkazu. Zajistíme také další administrativní úkony, také nabízené 
                    naše vzdělávací kurzy ohledně založení firem OSVČ a to ve vybraných jazycích abyste se mohli plně soustředit 
                    na své podnikání. S Public Advisors mate vše potřebné pro hladký chod vaší společnosti.
                </p>
                <button>Rezervace</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
