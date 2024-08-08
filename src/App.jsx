import './App.css';
import {ReactComponent as Hamburger} from './images/Buttons Group.svg'
import {ReactComponent as Vector} from './images/Vector.svg'
import smartfinder from './images/1.svg'
import shells from './images/2.svg'
import waves from './images/3.svg'
import artvenue from './images/4.svg'
import video from './images/Video.png'
import video2 from './images/Video2.png'
import person1 from './images/Picture.png'
import person2 from './images/Picture1.png'
import person3 from './images/Picture2.png'
import personD from './images/PictureDesktop.png'
import person1D from './images/Picture 1Desktop.png'
import person2D from './images/Picture 2Desktop.png'
import {ReactComponent as PlayerIcon} from './images/player-icon.svg'
import {ReactComponent as Dote } from './images/circle-f.svg'
import {ReactComponent as Envelope } from './images/envelope.svg'
import {ReactComponent as VectorWindow } from './images/Vector-window.svg'
import radar from './images/Right.png'
import  icons  from './images/Icons.png'
import sectionMobile from './images/SectionMobile.png'
import containerDesktop from './images/ContainerDesktop.png'
// import { useRef } from 'react';
// import { useState } from 'react';

function App() {
  
  // const myRef = useRef()

  // console.log(myRef.current.offSetHeight)

  return (
    <div className="App ">
      <div className=' font-roboto text-gray-600'>
        <header className='px-4 flex items-center justify-between border border-gray-200 text-gray-900'>
          <p className='py-4 font-bold text-[32px]'>magnifico</p>
          <button className='lg:hidden '><Hamburger /></button>
          <div className='lg:flex gap-2 hidden'>
            <button className='flex px-2 py-3 items-center min-w-fit gap-2'>Products <VectorWindow className='-rotate-90'/></button>
            <button className='flex px-2 py-3 items-center min-w-fit gap-2'>Solutions <VectorWindow className='-rotate-90' /></button>
            <button className='flex px-2 py-3 items-center min-w-fit gap-2'>Services <VectorWindow className='-rotate-90' /></button>
            <button className='flex px-2 py-3 items-center min-w-fit gap-2'>Help Center <VectorWindow className='-rotate-90'/></button>
            <button className='flex px-2 py-3 items-center min-w-fit gap-2'>Pricing</button>
          </div>
          <div className='hidden lg:flex items-center gap-4'>
            <button className='text-blue-600 px-2 py-3'>log in</button>
            <button className='bg-blue-600 text-white flex items-center text-base font-medium p-3 rounded-lg'><p className='px-4'>Sing Up Free </p><Vector className='fill-white'/></button>
          </div>
        </header>
        <div className='max-w-[640px] lg:max-w-none mx-auto'>
          <section className='px-4 mt-12 lg:p-20 lg:m-0 lg:grid lg:grid-cols-2 lg:gap-20 lg:border-b lg:border-gray-200'>
            <div className=' mx-auto  space-y-6 text-gray-900'>
              <p className='text-costom1 font-bold lg:font-extrabold lg:text-7xl '>Teach students worldwide</p>
              <p className='text-base lg:text-lg font'>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>
              <div className='grid lg:flex grid-cols-2 lg:justify-normal gap-2 justify-center text-nowrap'>
                <input className='rounded-lg border lg:hidden px-4 text-[16px] placeholder-gray-600' type="text" placeholder='Enter work email' />
                <div className='rounded-lg border px-4 py-3 text-[16px] items-center hidden gap-2 lg:flex lg:w-full'><Envelope /> <input className='w-full py-0 rounded-lg focus:outline-none' type="text" placeholder='Enter work email' /></div>
                <button className='bg-blue-600 text-white flex items-center p-3 rounded-lg'><p className='px-4'>Sing Up Free </p><Vector className='fill-white'/></button>
              </div>
              <div className='grid grid-cols-2 xl:flex xl:justify-between gap-y-4 xl:gap-y-0 text-gray-400 bg-gray-100 p-2 lg:p-4 rounded-lg'>
                <p className='text-lg font-bold flex mx-auto'><img src={shells} className=' mr-1.5' alt="" />SHELLS</p>
                <p className='text-lg font-bold flex mx-auto'><img src={smartfinder} className=' mr-1.5' alt="" />SmartFinder</p>
                <p className='text-lg font-bold flex mx-auto'><img src={artvenue} className=' mr-1.5' alt="" />ArtVenue</p>
                <p className='text-lg font-bold flex mx-auto'><img src={waves} className=' mr-1.5' alt="" />WAVES</p>
              </div>
            </div>
            <div>
              <div className='mt-8 lg:m-0 border-2 border-gray-100 rounded-[20px] relative'>
                <div className='flex justify-between items-center px-4 py-2'>
                  <div className='flex space-x-[5px]'>
                    <Dote  className='fill-rose-600'/>
                    <Dote  className='fill-amber-400'/>
                    <Dote  className='fill-green-500'/>
                  </div>
                  <div className='bg-slate-100 text-gray-400 text-xs w-1/2 py-1 rounded-[5px]'>
                    <p className='w-fit mx-auto'>app.magnifi.co</p>
                  </div>
                  <div className='flex gap-6'>
                    <VectorWindow className='fill-gray-400'/>
                    <VectorWindow className='-scale-x-100 fill-gray-600'/>
                  </div>
                  
                </div>
                <div>
                  <div className='relative' id='foo' >
                    <img className='w-full rounded-b-[18px]' src={video}/>
                    <PlayerIcon className='absolute h-fit inset-1/2 -translate-x-1/2 -translate-y-1/2' id='videoPlayer'/>
                  </div>
                </div>
                <img src={icons} className='w-44 h-44 lg:absolute hidden -z-10 -translate-y-2/3 -translate-x-2/3 left-full top-full' alt="" />
              </div>
            </div>
          </section>
          <section className='px-4 my-24 lg:items-center lg:grid lg:grid-cols-2 lg:p-20 lg:m-0 lg:gap-20'>
            <div className='lg:order-last text-gray-900'>
              <p className='font-bold text-costom1 lg:text-costom2 lg:font-extrabold '>Enjoy your time working</p>
              <p className='my-6 text-base lg:text-lg'>Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.</p>
              <div className='flex items-center gap-4 my-3 text-blue-600'><a href="#" className='font-medium text-base'>See how it helped others</a><Vector className='fill-blue-600'/></div>
            </div>
            <div className='mt-8 '>
              <div className='flex justify-center gap-1 xs:gap-2 lg:gap-4 h-64 lg:h-[420px] max-w-[400px] lg:max-w-[510px] mx-auto lg:mx-0 lg:ml-auto relative'>
                <img src={person1} className='mt-auto w-1/3 xs:w-auto lg:hidden' alt="" />
                <img src={person2} className='mb-auto w-1/3 xs:w-auto lg:hidden' alt="" />
                <img src={person3} className='my-auto w-1/3 xs:w-auto lg:hidden' alt="" />
                <img src={personD} className='lg:mt-auto w-1/3 hidden lg:block' alt="" />
                <img src={person1D} className='lg:mb-auto w-1/3 hidden lg:block' alt="" />
                <img src={person2D} className='lg:my-auto w-1/3 hidden lg:block' alt="" />
                <img src={icons} className='w-44 h-44 absolute -z-10 -translate-y-1/2 -left-4 lg:-left-16 top-1/2' alt="" />
              </div>
              
            </div>
          </section>
          <section className='px-4 mb-12 lg:p-20 lg:m-0 lg:mb-20'>
            <div className='lg:grid lg:grid-cols-5'>
              <div className='lg:col-span-3 text-gray-900'>
                <p className='text-costom1 lg:text-costom2 lg:font-extrabold font-bold '>Get all the tools your team needs</p>
                <p className='text-lg my-6'>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
                <div className='flex items-center gap-4 my-3 text-blue-600 cursor-pointer'><a href="#" className='font-medium text-base'>Check the tools</a><Vector className='fill-blue-600'/></div>
              </div>
              
              <div className='mx-auto w-fit col-span-2'><img src={radar} alt="" /></div>
            </div>
          </section>  
          <section className='relative'>
            <div className='bg-[#581C87] sm:rounded-3xl lg:mx-20'>
              
              <img src={sectionMobile} className='w-full lg:hidden sm:rounded-3xl opacity-25' alt="" />
              <img src={containerDesktop} className='w-full hidden lg:block opacity-25 rounded-3xl' alt="" />
              <div className='flex flex-col justify-center sm:gap-18 gap-6 top-10 bottom-10 px-6 py-12 text-white absolute lg:w-1/2 lg:right-20'>
                <p className='xs:text-costom1 text-2xl xl:text-costom2 sm:font-extrabold font-bold'>Problems come and get solved with ease</p>
                <p className=' text-base'>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
                <div className='flex items-center gap-4 my-3 cursor-pointer'><a href="#" className='font-medium text-base'>Improve workflow</a><Vector className='fill-white'/></div>
              </div>
            </div>
            
          </section>
          <section className='px-4 my-12 lg:p-20 lg:m-0 lg:my-20 lg:grid lg:grid-cols-2 lg:gap-20'>
            <div>
              <p className='font-bold text-costom1 lg:text-costom2 lg:font-extrabold text-gray-900'>Improve workflow</p>
              <div className='flex w-full font-medium justify-center rounded-lg my-8 text-gray-900'>
                <button className='py-4 bg-slate-100 border-2 border-gray-300 w-full rounded-l-lg'>Research</button>
                <button className='py-4  border-2 border-x-0 border-gray-300 w-full'>Plan</button>
                <button className='py-4  border-2 border-gray-300 w-full rounded-r-lg'>Design</button>
              </div>
              <p className='mb-6 text-base'>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
              <div className='flex items-center gap-4 my-3 text-blue-600'><a href="#" className='font-medium text-base'>Check the tools</a><Vector className='fill-blue-600'/></div>
            </div>
            <div>
              <div className='mt-8 border-2 border-gray-100 rounded-[20px]'>
                <div className='flex justify-between items-center px-4 py-2'>
                  <div className='flex space-x-[5px]'>
                    <Dote  className='fill-rose-600'/>
                    <Dote  className='fill-amber-400'/>
                    <Dote  className='fill-green-500'/>
                  </div>
                  <div className='bg-slate-100 text-gray-400 text-xs w-1/2 py-1 rounded-[5px]'>
                    <p className='w-fit mx-auto'>app.magnifi.co</p>
                  </div>
                  <div className='flex gap-6'>
                    <VectorWindow className='fill-gray-400'/>
                    <VectorWindow className='-scale-x-100 fill-gray-600'/>
                  </div>
                  
                </div>
                <div>
                  <div className='relative' id='foo' >
                    <img className='w-full rounded-b-[18px]' src={video2}/>
                    <PlayerIcon className='absolute h-fit inset-1/2 -translate-x-1/2 -translate-y-1/2' id='videoPlayer'/>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='bg-gradient-to-r from-[#1E40AF] via-[#1E3A8A] to-[#701A75] text-white px-6 py-12 lg:p-20 text-center sm:rounded-3xl sm:mx-4 lg:mx-20'>
              <p className='text-costom1 lg:text-costom2 lg:font-extrabold'>Join the community today</p>
              <p className=' text-base my-6'>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
              <button className='bg-blue-600 lg:min-w-64 text-white flex w-4/5 lg:w-1/4 justify-center px-6 mx-auto items-center p-3 rounded-lg'><p className=' px-6 font-bold text-2xl'>Sing Up Free </p><Vector className='fill-white '/></button>
            </div>
          </section>
        </div>
        <footer className='px-4 my-6 lg:my-24 lg:px-20'>
          <div className='lg:grid lg:grid-cols-5 lg:justify-between'>
            <div className='lg:flex lg:items-center lg:col-span-3 lg:gap-2'>
              <p className='font-medium text-lg text-gray-900'>magnifico</p>
              <p className='my-4 text-gray-600'>@ 2023. All rights reserved.</p>
            </div>
            <div className='my-3 lg:col-span-2 text-gray-600'>
              <div className='w-full flex justify-between py-3'>
                <button>Terms</button>
                <button>Privacy</button>
                <button>Support</button>
                <button>About</button>
                <button>Contact</button>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
