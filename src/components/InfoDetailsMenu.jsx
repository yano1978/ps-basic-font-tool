import { useState } from 'react';

const InfoDetailsMenu = () => {
  const [rotateIcon, setRotateIcon] = useState(false);
  let [detailsText, setDetailsText] = useState('');
  let [copyright, setCopyright] = useState('');
  let [contact, setContact] = useState('');

  const injectDetailsText = () => {
    detailsText = `
        PS Basic; a structural type system drawn on a rigid grid of twelve hundred square units, divided into twenty three vertical paths (12 columns and 11 intervals). Consisting of  60 styles, 5 widths and 6 weights, from light to bold, narrow to wide, including italics. Also containing alternative character sets.
        Its name is derived from its meaning, the concept is an experiment to align two subtly opposing modernist teachings in Switzerland  circa 1957, one in Basel, the other in Zurich. When the release of both Helvetica and Univers occurred, modernist values and education was at its height. In Basil, Emil Ruder, teacher at Allgemeine Gewerbeschule Basel often proclaimed Univers to be the superior (and only necessary) font, designed by Adrian Frutiger. 
        However, many modernist graphic designers in Zurich at the time opted to use Helvetica, such as Josef Muller Brockmann. Hence the name ‘Bas’ from ‘Basel’, and ‘ic’ from’Zurich’, the name ‘Basic’ contains ethos and mantras of both similar, yet subtly different views. Old style characters such as the lowercase ‘g’, the tail on the lowercase ‘l’ etc give reference to the pre-and-post war era, while appearing classical yet enhancing readability through their differentiation.
        The design of this font is aimed at combining elements of both fonts, systematically created as a homage to both. Subtle details in the vector paths, all characters drawn individually (no interpolation). The incremental increase in width variants reference the golden ratio. The detail also includes precise three units ink traps, giving the font a constructed, industrial appearance.
    `;
    setDetailsText(detailsText);
    console.log(detailsText);
  };

  const injectCopyright = () => {
    copyright = 'Some Copyright';
    setCopyright(copyright);
    console.log(copyright);
  };

  const injectContact = () => {
    contact = 'Some Contact';
    setContact(contact);
    console.log(contact);
  };

  return (
    <>
      <button onClick={() => setRotateIcon((prev) => !prev)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`${rotateIcon ? 'rotate-45' : ''} transition-all duration-200 w-8 h-8 mt-1`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      </button>
      <div
        className={`${
          rotateIcon ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }  text-right relative transition-all duration-200`}
      >
        <div className="flex flex-col absolute right-2.5 top-10">
          <div onClick={injectDetailsText} className="cursor-pointer">
            Details
          </div>
          <div onClick={injectCopyright} className="cursor-pointer">
            Copyright
          </div>
          <div onClick={injectContact} className="cursor-pointer">
            Contact
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoDetailsMenu;
