import classes from './MythOrRealityLink.module.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Complication } from './ui';
import { ReactComponent as IconClickPreview } from './blue.svg';
import { ReactComponent as IconClickFull } from './green.svg';

export const MythOrRealityLink = ({ mythKey, myth }) => { 
  const backgroundImageStyle = {
    backgroundImage: `url(${myth?.title?.background?.source})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat', 
    display: 'flex',
    alignItems: 'center', 
  };
  const [isPreview, setIsPreview] = useState(true);

  const handleMythClick = () => {
    setIsPreview(!isPreview);
  };

  useEffect(() => {
    console.log(myth?.fullVersion?.title?.content)
  }, []);

  if (isPreview) return (  
        <div className={classes.myth}>
          <IconClickPreview 
            onClick={handleMythClick}
            className={classes.iconClick} 
          /> 
          <div className={classes.image}>
            <img src={myth?.image?.source} alt='alternate img' />
          </div>
          <div className={classes.backgroundImage}>
              <h3 className={classes.title} style={backgroundImageStyle}>
                {myth?.title?.content}
              </h3>
          </div>
        
          <div className={classes.previewArticle}>
            {myth?.previewArticle?.map((text, index) => (
              <p
                className={classes.copy}
                key={index}
              >
                {text}
              </p>
            ))}
          </div>        
        </div>   
  )
  else return (
    <div>
        <div className={classes.fullVersionMyth}>
          <IconClickFull
            onClick={handleMythClick}
            className={classes.iconClick} 
          />      
          <div className={classes.article}>
            {myth?.article?.map((text, index) => (
              <p
                className={classes.copy}
                key={index}
              >
                {text}
              </p>
            ))}
          </div>  
          
          <h4 className={classes.fullVersionTitle}>{myth?.fullVersion?.title?.content}</h4>
          <ul className={classes.complications}>
            {myth?.fullVersion?.complications.map((complication, index) =>
              <li key={index}>  
                <Complication complication={complication} />              
              </li>
            )}
          </ul>            
              
        </div> 
    </div>
  )
};