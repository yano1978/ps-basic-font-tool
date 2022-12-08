const FontLink = ({ setLinkActive, id, fontTitle, fontNumber, isActive }) => {
  return (
    <>
      {fontNumber}
      <a href="#" onClick={() => setLinkActive(id)} className={isActive ? 'active' : ''}>
        {fontTitle}
      </a>
    </>
  );
};

export default FontLink;
