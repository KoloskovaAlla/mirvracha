import classes from './MythsAndRealitySection.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMyths } from 'shared/hooks';
import { MythOrRealityLink } from './ui';

export const MythsAndRealitySection = () => {
  const dispatch = useDispatch();
  const mythsState = useMyths();

  useEffect(() => {
    dispatch(mythsState.getMyths());
  }, [dispatch, mythsState.getMiths]);   

  const backgroundImageStyle = {
    backgroundImage: `url(${mythsState?.mythsAndRealitySection?.title?.background.source})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  
  return (
     <section className={classes.section}>
      <div className={classes.wrapper}>       
        <h1 className={`${classes.title}`} style={backgroundImageStyle}>
          {mythsState?.mythsAndRealitySection?.title.content}
        </h1>
        <ul className={classes.list}>
            {mythsState?.mythsAndRealitySection?.myths && (Object.keys(mythsState?.mythsAndRealitySection?.myths).map((mythKey) =>
              <li key={mythKey}>                
                <MythOrRealityLink
                  mythKey={mythKey}
                  myth={mythsState?.mythsAndRealitySection?.myths[mythKey]}
                />
              </li>
            ))}
          </ul>
      </div>
    </section>
  )
};
