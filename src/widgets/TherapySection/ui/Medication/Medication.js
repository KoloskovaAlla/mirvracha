import classes from './Medication.module.scss';

export const Medication = ({ medication }) => {
  return (
    <div className={classes.medication}>
      <div className={classes.image}>
        <img src={medication.pharmacyImage.source} alt='pharmacy' />
      </div>      
      <h4 className={classes.title}>{medication.pharmacyType}</h4>
      <div className={classes.copy}>
        {medication.pharmacyTexts}
      </div>
    </div>
  )
};