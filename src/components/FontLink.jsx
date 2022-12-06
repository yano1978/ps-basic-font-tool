const FontLink = ({ setLinkActive, id, fontTitle, isActive }) => {
  return (
    <a href="#" onClick={() => setLinkActive(id)} className={isActive ? 'active' : ''}>
      {fontTitle}
    </a>
  );
};

export default FontLink;
