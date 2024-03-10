import classes from './TherapySection.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTherapy } from 'shared/hooks';
import { Medication, Recommendation } from './ui'

export const TherapySection = () => {
  const dispatch = useDispatch();
  const therapyState = useTherapy();  

  const backgroundImageTitleStyle = {
    backgroundImage: `url(${therapyState?.therapySection?.title?.background.source})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const backgroundImageSubtitleStyle = {
    backgroundImage: `url(${therapyState?.therapySection?.subtitle?.background.source})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  useEffect(() => {
    dispatch(therapyState.getTherapy());
  }, [dispatch, therapyState.getTherapy]);   

  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>         
        <h2 className={`${classes.title}`} style={backgroundImageTitleStyle}>
          {therapyState?.therapySection?.title.content}
        </h2>
        <h3 className={classes.subtitle} style={backgroundImageSubtitleStyle}>
          {therapyState?.therapySection?.subtitle.content}
        </h3>
        <h4 className={classes.pharmacytitle}>
          {therapyState?.therapySection?.pharmacy?.pharmacyTitle}
        </h4>
        <ul className={classes.medications}>
          {therapyState?.therapySection?.pharmacy.medications && (therapyState?.therapySection?.pharmacy?.medications.map((medication, index) =>
            <li key={index}>  
              <Medication medication={medication} /> 
            </li>
          ))}
        </ul>
        <div className={classes.arrows}>
          <div className={classes.leftarrow}>
            <img src={therapyState?.therapySection?.pharmacy?.arrow.source} alt='arrow for therapy method' />
          </div>
          <div className={classes.rightarrow}>
            <img src={therapyState?.therapySection?.pharmacy?.arrow.source} alt='arrow for therapy method' />
          </div>
        </div>
        <ul className={classes.recommendations}>
          {therapyState?.therapySection?.pharmacy?.recommendations.map((recommendation, index) =>
            <li key={index}>  
              <Recommendation recommendation={recommendation} /> 
            </li>
          )}
        </ul>
       </div>
    </section>    
  )
};
