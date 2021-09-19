import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext()

  
  return (
  <section className="hero" onMouseOver={closeSubmenu}>
    <div className="hero-center">
      <article className='hero-info'>
        <h1> Payments Infrastructure</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat esse architecto dicta officia fugit nobis nesciunt ducimus. Doloremque, repellendus iusto.</p>
        <button className='btn'> Start now
        </button>
      </article>
      <article className="hero-images">
        <img src={phoneImg} className='phone-img' alt="phone" />
      </article>
    </div>
  </section>
  )}

export default Hero
