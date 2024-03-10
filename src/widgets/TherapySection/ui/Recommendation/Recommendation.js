import classes from './Recommendation.module.scss';

export const Recommendation = ({ recommendation }) => {
  return (
    <div className={classes.recommendation}>   
      <div className={classes.copy}>
        {recommendation.texts}
      </div>
    </div>
  )
};
