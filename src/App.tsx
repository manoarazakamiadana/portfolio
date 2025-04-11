import ManoaImage from './assets/images/Manoa.png'
import Competences from './components/slides/Competences'
import Presentation from './components/slides/Presentation'
import Diplomes from './components/slides/Diplomes'
import Experiences from './components/slides/Experiences'
import Contact from './components/slides/Contact'
import { useState } from 'react'


function App() {

    const slides = [Presentation, Diplomes, Experiences, Competences, Contact]

    const [currentIndex, setCurrentIndex] = useState<number>(0)

    return (
        <div className="min-h-screen w-full bg-[#333] flex justify-center items-center text-white">
            <div className="bg-linear-to-r from-[#444] to-[#555] m-5 max-w-[350px] md:max-w-[700px] lg:max-w-[1000px] px-3 py-8 rounded-xl w-full lg:flex max">
                <div className="w-full md:flex md:justify-evenly md:items-center lg:block lg:w-1/3">
                    <div className='text-center font-semibold'>
                        <h2 className='text-3xl'>RAZAKAMIADNA</h2>
                        <h1 className='text-2xl'><span className='italic underline'>Manoa</span> Fehizoro</h1>
                        <h3 className='uppercase text-xl mt-4'>Web & mobile developper</h3>
                    </div>
                    <div className='my-2 rounded-xl overflow-hidden h-96'>
                        <img src={ManoaImage} alt="" className='w-full h-full object-contain' />
                    </div>
                </div>
                <div className='lg:w-2/3'>
                    <div className='w-full bg-[#333] mt-6 rounded-2xl h-[60vh] overflow-x-hidden relative'>
                        {slides.map((Slide, index) => (
                            <div className='absolute top-0 transition-all w-full h-full px-3 py-2' style={{left: `${(index-currentIndex)*100}%`}}>
                                <Slide />
                            </div>
                        ))}
                    </div>
                    <div className='flex mx-4 mt-6'>
                        {
                            currentIndex == 0 ?
                            <></> :
                            <button
                                className='border border-white hover:bg-[#FFFFFF] hover:text-black py-2 px-4 rounded-full transition-all'
                                onClick={function () {setCurrentIndex(currentIndex-1)}}
                            >
                                Prev
                            </button>
                        }
                        <div className='flex-1'></div>
                        {
                            currentIndex == slides.length - 1 ?
                            <></> :
                            <button
                                className='border border-white hover:bg-[#FFFFFF] hover:text-black py-2 px-4 rounded-full transition-all'
                                onClick={function () {setCurrentIndex(currentIndex+1)}}
                            >
                                Next
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
