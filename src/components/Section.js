const Section = ({ category, images }) => {
  return (
    <div>
      <h3>{category}</h3>
      <div className="carrousel">
        {images.map((item, index) => {
          return <img className="img" src={item} alt="affiche" />;
        })}
      </div>
    </div>
  );
};

export default Section;
