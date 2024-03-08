import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useLang, useHomePage, useDocumentTitle } from 'shared/hooks';
// import { SectionBase, Cashback } from 'widgets';

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
      Главная страница
      {/* {homePageState.homePage?.download && <SectionBase data={homePageState.homePage.download} type='primary' />} */}
     
    </div>
  );
};

export default HomePage;
