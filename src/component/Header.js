import React from 'react'
import logo from '../assets/Logo.png'

export const Header = () => {
  return (
    <main>
        <section className='header'>
            <div>
                <img src={logo} alt="logo" className='logoImage'/>
            </div>
            <div>
                <span>Already have an account?</span> <a href='#0' className='text-primary'>Sign in</a>
            </div>
        </section>
    </main>
  )
}
