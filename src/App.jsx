import './App.css';
import {ReactComponent as Hamburger} from './images/Buttons Group.svg'
import vector from './images/Vector.svg'
import smartfinder from './images/1.svg'
import shells from './images/2.svg'
import waves from './images/3.svg'
import artvenue from './images/4.svg'
import video from './images/Video.png'
import {ReactComponent as Dote } from './images/circle-f.svg'
import {ReactComponent as VectorWindow } from './images/Vector-window.svg'

function App() {
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
              <button className='bg-blue-600 text-white flex items-center p-3 rounded-lg'><p className='px-4'>Sing Up Free </p><img src={vector} alt="" /></button>
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
              <div >
                <img className='w-full rounded-b-[18px]' src={video}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
