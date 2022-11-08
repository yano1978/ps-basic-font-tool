import DropdownMenu from './components/DropdownMenu';
import TextInput from './components/TextInput';

const App = () => {
  return (
    <>
      <nav className="mx-5 pt-4">
        <div className="flex flex-wrap justify-start tablet:justify-between items-center mx-auto text-white">
          <a href="/">Ps Basic</a>
          <div className="ml-20 tablet:ml-0">
            <DropdownMenu />
          </div>
          <div className="flex w-full tablet:w-auto">
            <ul className="flex flex-col tablet:flex-row w-full [&_li]:px-3.5 pr-10 pb-4 tablet:p-0 fixed bottom-0 tablet:relative tablet:top-0 bg-black">
              <li className="flex">
                <label htmlFor="size" className="mr-2">
                  Size
                </label>
                <input type="range" id="size" name="size" min="0" max="100" />
              </li>
              <li className="flex">
                <label htmlFor="kern" className="mr-2">
                  Kern
                </label>
                <input type="range" id="kern" name="kern" min="0" max="100" />
              </li>
              <li className="flex">
                <label htmlFor="leading" className="mr-2">
                  Leading
                </label>
                <input type="range" id="leading" name="leading" min="0" max="100" />
              </li>
            </ul>
          </div>
          <div className="flex absolute right-5 tablet:right-0 tablet:relative">
            <a href="#">
              <div className="w-4 h-4 border border-white rounded-full mr-3.5 mt-1 relative overflow-hidden">
                <div className="bg-white  absolute w-1/2 h-full"></div>
              </div>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
      <main className="text-white pt-20 px-14 h-full">
        <TextInput />
      </main>
    </>
  );
};

export default App;
