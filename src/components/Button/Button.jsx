import './Button.css';

export const Button = ({ onClick }) => {
  return (
    <button className="button" type="button" onClick={onClick}>
      Load more
    </button>
  );
};
