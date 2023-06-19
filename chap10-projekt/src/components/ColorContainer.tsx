type ColorContainerProps = {
  color: string,
  hexColor: string,
  isDarkText: boolean,
}

const ColorContainer = ({color, hexColor, isDarkText }: ColorContainerProps) => {
  
  return (
    (

      (color.trim() && color !== '') ? (
      <div className="ColorContainer">
      <p>Color Container</p>
      <div className="ColorFill" style={{backgroundColor: color, color: isDarkText ? '#000' : '#eee' }}>
        <p>{hexColor}</p>
      </div>
    </div>
      ) :
      <div className="ColorContainer">
      <p>Color Container</p>
      <div className="ColorFill">
        <p>No Color Yet</p>
      </div>
    </div>
    )
    
  );
};

export default ColorContainer;
