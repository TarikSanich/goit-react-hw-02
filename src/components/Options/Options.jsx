import css from './Options.module.css';

export default function Options({ option, total, reset }) {
  return (
    <div className={css.buttons}>
      <button onClick={() => option('good')}>Good</button>
      <button onClick={() => option('neutral')}>Neutral</button>
      <button onClick={() => option('bad')}>Bad</button>
      {total > 0 && <button onClick={reset}>Reset</button>}
    </div>
  );
}

// import css from "./Options.module.css";

// const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {

//   return (        
//   <ul className={css.optionsList}>
//     <button className={css.optionsBtn} onClick={() => updateFeedback('good')}>Good</button>
//     <button className={css.optionsBtn} onClick={() => updateFeedback  ('neutral')}>Neutral</button>
//     <button className={css.optionsBtn} onClick={() => updateFeedback('bad')}>Bad</button>
//     {totalFeedback !== 0 && (<button className={css.optionsBtn} onClick={resetFeedback}>Reset</button>)}      
//   </ul>  
//   )
// };

// export default Options;