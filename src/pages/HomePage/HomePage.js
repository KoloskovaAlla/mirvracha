import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useLang, useHomePage, useDocumentTitle } from 'shared/hooks';
import { MythsAndRealitySection } from 'widgets';

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
    <div>
      
      {<MythsAndRealitySection/>}
     
    </div>
  );
};

export default HomePage;
