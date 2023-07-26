import React from 'react'
import "./Portofolio.css"
import Card from './Card'
import DataPorto from './DataPorto'



const Portofolio = () => {


  return (
    <div data-section id="section3">
      <section className='portofolio w-full px-5 py-5 md:py-24 md:px-10 my-10 md:my-0' id='portofolio'>
        <div className="w-full flex justify-center flex-col">
          <div className="w-full flex flex-col items-center gap-3">
            <h3 className='subTitle'>portofolio saya</h3>
            <h3 className='title'>my portofolio</h3>
          </div>

          <div className="project grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20 mx-2">
            {DataPorto.map((value, index) => {
              return <Card key={index}
                image={value.image}
                category={value.category}
                title={value.title}
                desc={value.desc}
              />

            })}
          </div>

        </div>
      </section>
    </div>
  )
}

export default Portofolio