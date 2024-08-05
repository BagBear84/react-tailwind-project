import './App.css';
import hamburger from './images/Buttons Group.svg'

function App() {
  return (
    <div className="App w-full">
      <div className=' font-roboto'>
        <header className=' px-4 flex items-center border-b-2 border-gray-200'>
          <p className='py-4 font-bold text-[32px] mr-auto'>magnifico</p>
          <button><img className=' h-fit fill-gray-900' src={hamburger} alt="" /></button>
        </header>
      </div>
    </div>
  );
}

export default App;
