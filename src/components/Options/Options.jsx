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