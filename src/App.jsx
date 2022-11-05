const App = () => {
  return (
    <>
      <nav className='bg-black px-2 sm:px-4 py-2.5'>
        <div className='container flex flex-wrap justify-between items-center mx-auto text-white'>
          <a href='/'>Ps Basic</a>

          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <ul className='flex flex-col p-4 mt-4 bg-black md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
              <li className='flex'>
                <label htmlFor='volume' className='mr-2'>
                  Size
                </label>
                <input
                  type='range'
                  id='volume'
                  name='volume'
                  min='0'
                  max='11'
                />
              </li>
              <li className='flex'>
                <label htmlFor='volume' className='mr-2'>
                  Kern
                </label>
                <input
                  type='range'
                  id='volume'
                  name='volume'
                  min='0'
                  max='11'
                />
              </li>
              <li className='flex'>
                <label htmlFor='volume' className='mr-2'>
                  Leading
                </label>
                <input
                  type='range'
                  id='volume'
                  name='volume'
                  min='0'
                  max='11'
                />
              </li>
              <li>
                <a href='#'>
                  <div className='w-5 h-5 border border-white rounded-full'></div>
                </a>
              </li>
              <li>
                <a href='#'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6v12m6-6H6'
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className='text-white text-[60px] p-20'>Type here...</main>
    </>
  );
};

export default App;
