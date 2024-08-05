import './App.css';
import hamburger from './images/Buttons Group.svg'
import vector from './images/Vector.svg'
import smartfinder from './images/1.svg'
import shells from './images/2.svg'
import waves from './images/3.svg'
import artvenue from './images/4.svg'

function App() {
  return (
    <div className="App w-full">
      <div className=' font-roboto '>
        <header className='px-4 flex items-center border border-gray-200'>
          <p className='py-4 font-bold text-[32px] mr-auto'>magnifico</p>
          <button><img className=' h-fit fill-gray-900' src={hamburger} alt="" /></button>
        </header>
        <section className='px-4'>
          <div className=' mx-auto mt-12 space-y-6 '>
            <p className='text-[40px] font-bold'>Teach students worldwide</p>
            <p className='text-[16px] font'>Amet nunc diam orci duis ut sit diam arcu, nec. Eleifend proin massa tincidunt viverra lectus pulvinar. Nunc ipsum est pellentesque turpis ultricies.</p>
            <div className='grid grid-cols-2 gap-2 justify-center text-nowrap'>
              <input className='rounded-lg border px-4 text-[16px]' type="text" placeholder='Enter work email' />
              <button className='bg-blue-600 text-white flex items-center p-3 rounded-lg'><p className='px-4'>Sing Up Free </p><img src={vector} alt="" /></button>
            </div>
            <div className='grid grid-cols-2 gap-y-4 text-gray-400 bg-gray-100 p-2 rounded-lg'>
              <p className='text-[18px] font-bold flex mx-auto'><img src={shells} className=' mr-1.5' alt="" />SHELLS</p>
              <p className='text-[18px] font-bold flex mx-auto'><img src={smartfinder} className=' mr-1.5' alt="" />SmartFinder</p>
              <p className='text-[18px] font-bold flex mx-auto'><img src={artvenue} className=' mr-1.5' alt="" />ArtVenue</p>
              <p className='text-[18px] font-bold flex mx-auto'><img src={waves} className=' mr-1.5' alt="" />WAVES</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
