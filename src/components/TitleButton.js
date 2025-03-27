import style from '../styles/TitleButton.module.css';

function TitleButton({ title, setClass }) {
  return (
    <div className={setClass}>{title}</div>
  );
}

export default TitleButton;