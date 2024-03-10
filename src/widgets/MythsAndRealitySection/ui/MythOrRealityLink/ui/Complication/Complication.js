import classes from './Complication.module.scss';
import { ReactComponent as IconHeart} from './assets/1.svg';
import { ReactComponent as IconHeartAttack } from './assets/2.svg';
import { ReactComponent as IconBladder } from './assets/3.svg';

export const Complication = ({ complication }) => {
  if (complication) console.log(complication.id);
  return (
    <div className={classes.complication}>
      <div className={classes.image}>
        {complication.id === 'heart' && <IconHeart />}
        {complication.id === 'heartAttack' && <IconHeartAttack />}
        {complication.id === 'bladder' && <IconBladder />}
      </div>
      <div className={classes.percentage}>
        {complication?.percentage}
      </div>
      <div className={classes.complicationFact}>
        {complication?.complicationFact}
      </div>
      <div className={classes.research}>
        {complication?.research}
      </div>
    </div>
  )
};
