import React from 'react'
import Layout from '../components/layout/layout'

const Gallery = () => {
  return (
    <Layout>
    <section id={"galeri"} className="text-gray-600 body-font">
  <div className="container px-5 py-16 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Galeria de imagenes</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Explore nuestra galería y vea el aprendizaje y la diversión que sucede en nuestras clases de inglés</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/500x300"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/501x301"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/600x360"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://dummyimage.com/601x361"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/502x302"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://dummyimage.com/503x303"/>
        </div>
      </div>
    </div>
  </div>
</section>
</Layout>
  )
}

export default Gallery