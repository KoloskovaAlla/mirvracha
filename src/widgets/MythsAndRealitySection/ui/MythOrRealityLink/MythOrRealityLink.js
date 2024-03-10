import classes from './MythOrRealityLink.module.scss';
import { Link } from 'react-router-dom';

export const MythOrRealityLink = ({ mythKey, myth }) => { 
const backgroundImageStyle = {
  backgroundImage: `url(${myth?.title?.background?.source})`,
  backgroundSize: 'cover', 
  backgroundPosition: 'right center',
  backgroundRepeat: 'no-repeat', 
  display: 'flex',
  alignItems: 'center', 
};
  return (
    <Link className={classes.myth}>
      <div className={classes.image}>
        <img src={myth?.image?.source} alt='alternate img' />
      </div>
      <div className={classes.backgroundImage}>
          <h3 className={`${classes.title}`} style={backgroundImageStyle}>
            {myth?.title?.content}
          </h3>
      </div>
     
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
      
    </Link>
  );
};