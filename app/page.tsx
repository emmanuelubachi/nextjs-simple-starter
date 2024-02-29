import React from 'react'

export default function page() {
  return (
    <main>
      <section className='bg-gray-300 pb-section_card_offset'>
        <div className='section_container gap-content grid'>
          <h1 className='text-h1'>Heading 1</h1>
          <h2 className='text-h2'>Heading 2</h2>
          <h3 className='text-h3'>Heading 3</h3>
          <h4 className='text-h4'>Heading 4</h4>
          <h5 className='text-h5'>Heading 5</h5>
          <h6 className='text-h6'>Heading 6</h6>
          <p className='text-p'>Paragraph</p>
        </div>
      </section>

      <section className='pt-0'>
        <div
          className='section_container 
          gap-content md:grid md:grid-cols-1 
          -mt-card_offset
          grid grid-cols-2
          rounded-2xl 
          bg-slate-600 
          p-section_x
          text-white'
        >
          <div className='max-w-[1000px]'>
            <h4 className='text-h4 font-semibold'>Title</h4>
            <p className='line-clamp-4 text-p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              quod dignissimos corrupti totam neque saepe ex quia, iure, quis
              minus iusto? Illo et, facilis temporibus non adipisci est eligendi
              nemo.
            </p>
          </div>

          <div className='m-auto'>
            <button
              className='items-center 
              rounded-2xl border 
              border-white/30
              bg-orange-400
              px-section_y 
              text-[calc(var(--h2)*1.1)]'
              type='button'
            >
              CTA
            </button>
          </div>
        </div>
      </section>

      <section className='pt-0'>
        <div
          className='section_container gap-content
          md:grid md:grid-cols-1 grid 
          grid-cols-2 rounded-2xl
          bg-slate-600 
          p-section_x 
          text-white'
        >
          <div className='max-w-[1000px]'>
            <h4 className='text-h4 font-semibold'>Title</h4>
            <p className='line-clamp-4 text-p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              quod dignissimos corrupti totam neque saepe ex quia, iure, quis
              minus iusto? Illo et, facilis temporibus non adipisci est eligendi
              nemo.
            </p>
          </div>

          <div className='m-auto'>
            <button
              className='items-center 
              rounded-2xl border 
              border-white/30
              bg-orange-400
              px-section_y 
              text-[calc(var(--h2)*1.1)]'
              type='button'
            >
              CTA
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
