import Link from 'next/link'
import React from 'react'

const ContactPage = () => {
  return (
    <section className="h-screen bg-accents flex items-center justify-center">
      <div className='bg-white rounded-[40px] w-[80%] max-w-md p-10'>
        <div className='text-center flex flex-col items-center gap-5 text-accents/85'>

        <h1 className='uppercase font-bold text-2xl'>Contact</h1>
        <p>Reach out on all social media platforms <br /> (click on the link below) </p>
        <Link href={"https://li.sten.to/pelumiadeleke"}>https://li.sten.to/pelumiadeleke</Link>
        <Link href={"https://pelumiadeleke0142@gmail.com"}>pelumiadeleke0142@gmail.com</Link>
        <p>+2349035809433</p>
        </div>
      </div>
    </section>
  )
}

export default ContactPage