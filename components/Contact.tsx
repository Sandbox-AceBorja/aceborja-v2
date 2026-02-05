import React from 'react'

const Contact = () => {
  return (
    <section id={'contact'} className={'py-24'}>
      <div className={'mx-auto max-w-7xl px-6'}>
        <div
          className={
            'mb-4 text-teal-300 font-semibold tracking-wider text-center'
          }
        >
          What's Next
        </div>
        <div className={'mb-10 text-7xl text-center'}>Get In Touch</div>
        <div className={'text-center'}>
          <span className={'text-teal-300'}>Currently Open</span> to freelance
          work, collaborations, and full-time opportunities.
        </div>
        <div className={'text-center'}>
          I’m always happy to connect. Whether you have a specific inquiry or
          just want <br /> to introduce yourself, I’ll do my best to respond
          promptly.
        </div>
        <div className={'mt-10 text-center'}>
          <a
            href='mailto:sandbox.aceborja@gmail.com'
            className={
              'py-4 px-6 text-sm font-medium text-teal-400 bg-transparent border border-teal-400 rounded hover:bg-teal-400 hover:text-black transition-colors'
            }
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
