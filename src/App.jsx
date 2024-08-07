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
import {ReactComponent as PlayerIcon} from './images/player-icon.svg'
import {ReactComponent as Dote } from './images/circle-f.svg'
import {ReactComponent as VectorWindow } from './images/Vector-window.svg'
import radar from './images/Right.png'
import  icons  from './images/Icons.png'
import sectionMobile from './images/SectionMobile.png'
// import { useRef } from 'react';
// import { useState } from 'react';

function App() {
  
  // const myRef = useRef()

  // console.log(myRef.current.offSetHeight)

  return (
    <div className="App w-full">
      <div className=' font-roboto '>
        <header className='px-4 flex items-center border border-gray-200'>
          <p className='py-4 font-bold text-[32px] mr-auto'>magnifico</p>
          <button><Hamburger /></button>
        </header>
        <section className='px-4 my-12'>
          <div className=' mx-auto  space-y-6 '>
            <p className='text-[40px] font-bold'>Teach students worldwide</p>
            <p className='text-base font'>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>
            <div className='grid grid-cols-2 gap-2 justify-center text-nowrap'>
              <input className='rounded-lg border px-4 text-[16px]' type="text" placeholder='Enter work email' />
              <button className='bg-blue-600 text-white flex items-center p-3 rounded-lg'><p className='px-4'>Sing Up Free </p><Vector className='fill-white'/></button>
            </div>
            <div className='grid grid-cols-2 gap-y-4 text-gray-400 bg-gray-100 p-2 rounded-lg'>
              <p className='text-lg font-bold flex mx-auto'><img src={shells} className=' mr-1.5' alt="" />SHELLS</p>
              <p className='text-lg font-bold flex mx-auto'><img src={smartfinder} className=' mr-1.5' alt="" />SmartFinder</p>
              <p className='text-lg font-bold flex mx-auto'><img src={artvenue} className=' mr-1.5' alt="" />ArtVenue</p>
              <p className='text-lg font-bold flex mx-auto'><img src={waves} className=' mr-1.5' alt="" />WAVES</p>
            </div>
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
                  <img className='w-full rounded-b-[18px]' src={video}/>
                  <PlayerIcon className='absolute h-fit inset-1/2 -translate-x-1/2 -translate-y-1/2' id='videoPlayer'/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='px-4 my-12'>
          <div>
            <p className='font-bold text-[40px]'>Enjoy your time working</p>
            <p className='my-6 text-base'>Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.</p>
            <div className='flex items-center gap-4 my-3 text-blue-600'><a href="#" className='font-medium text-base'>See how it helped others</a><Vector className='fill-blue-600'/></div>
          </div>
          <div className='mt-8'>
            <div className='flex justify-between gap-2 h-64 relative'>
              <img src={person1} className='mt-auto' alt="" />
              <img src={person2} className='mb-auto' alt="" />
              <img src={person3} className='my-auto' alt="" />
              <img src={icons} className='w-44 h-44 absolute -z-10 -translate-y-1/2 -left-4 top-1/2' alt="" />
            </div>
            
          </div>
        </section>
        <section className='px-4 my-12'>
          <div>
            <p className='text-[40px] font-bold'>Get all the tools your team needs</p>
            <p className='text-lg my-6'>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
            <div className='flex items-center gap-4 my-3 text-blue-600 cursor-pointer'><a href="#" className='font-medium text-base'>Check the tools</a><Vector className='fill-blue-600'/></div>
            <div className='mx-auto w-fit '><img src={radar} alt="" /></div>
          </div>
        </section>  
        <section className='relative'>
          <div className='bg-[#581C87]'>
            
            <img src={sectionMobile} className='w-full opacity-25' alt="" />
          </div>
          <div className='flex flex-col top-0 bottom-0 px-6 py-12 text-white justify-between absolute'>
            <p className='text-[40px] '>Problems come and get solved with ease</p>
            <p className=' text-base'>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
            <div className='flex items-center gap-4 my-3 cursor-pointer'><a href="#" className='font-medium text-base'>Check the tools</a><Vector className='fill-white'/></div>
          </div>
        </section>
        <section className='px-4 my-12'>
          <div>
            <p className='font-bold text-[40px]'>Improve workflow</p>
            <div className='flex w-full justify-center rounded-lg my-8'>
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
          <div className='bg-gradient-to-br from-[#312E81] via-[#1E3A8A] to-[#701A75] text-white px-6 py-12 text-center'>
            <p className='text-[40px] '>Join the community today</p>
            <p className=' text-base my-6'>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
            <button className='bg-blue-600 text-white flex w-4/5 justify-center mx-auto items-center p-3 rounded-lg'><p className=' px-6 font-bold text-2xl'>Sing Up Free </p><Vector className='fill-white '/></button>
          </div>
        </section>
        <footer className='px-4 my-6'>
          <p className='font-medium text-lg'>magnifico</p>
          <p className='my-4'>@ 2023. All rights reserved.</p>
          <div className='my-3'>
            <div className='w-full flex justify-between'>
              <button>Terms</button>
              <button>Privacy</button>
              <button>Support</button>
              <button>About</button>
              <button>Contact</button>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
