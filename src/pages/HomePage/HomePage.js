import classes from './HomePage.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useLang, useHomePage, useDocumentTitle } from 'shared/hooks';
import { MythsAndRealitySection, TherapySection } from 'widgets';

const HomePage = () => {
  const dispatch = useDispatch();

  // const homePageState = useHomePage();

  // const title = lang === 'en'
  //   ? 'ZEN | Where finance meet ZEN'
  //   : 'ZEN | Когда финансы постигают Дзен';

  // useDocumentTitle(title);

  // useEffect(() => {
  //   dispatch(homePageState.getHomePage(lang));
  // }, [lang, homePageState.getHomePage, dispatch]);

  return (
    <main className={classes.homepage}>
      
      {<MythsAndRealitySection />}
      {<TherapySection />}
     
    </main>
  );
};

export default HomePage;
