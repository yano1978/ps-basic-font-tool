import { useState, useRef, useEffect } from 'react';

const InfoDetailsMenu = ({ injectDetailsText, injectCopyright, injectContact }) => {
  const [rotateIcon, setRotateIcon] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!btnRef.current.contains(e.target)) {
        setRotateIcon(false);
      }
    };

    document.body.addEventListener('click', closeDropDown);
    return () => document.body.removeEventListener('click', closeDropDown);
  }, []);

  return (
    <>
      <button ref={btnRef} onClick={() => setRotateIcon((prev) => !prev)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`${rotateIcon ? 'rotate-45' : ''} transition-all duration-200 w-6 h-6`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      </button>
      <div
        className={`${
          rotateIcon ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }  text-right relative transition-all duration-200`}
      >
        <div className="flex flex-col absolute right-2 top-10">
          <div
            onClick={() => {
              setRotateIcon((prev) => !prev);
              injectDetailsText();
            }}
            className="cursor-pointer"
          >
            Details
          </div>
          <div
            onClick={() => {
              setRotateIcon((prev) => !prev);
              injectCopyright();
            }}
            className="cursor-pointer"
          >
            Copyright
          </div>
          <div
            onClick={() => {
              setRotateIcon((prev) => !prev);
              injectContact();
            }}
            className="cursor-pointer"
          >
            Contact
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoDetailsMenu;
