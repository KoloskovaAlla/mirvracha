import classes from './HomePage.module.scss';
import { MythsAndRealitySection, TherapySection } from 'widgets';

const HomePage = () => {
  return (
    <main className={classes.homepage}>      
      {<MythsAndRealitySection />}
      {<TherapySection />}     
    </main>
  );
};

export default HomePage;
