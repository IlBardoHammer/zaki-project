import '../styles/scss/Button.scss';

const Button = ({ children, variant, icon, iconPosition }) => {
  const iconClass = variant === 'primary' ? 'button__icon--white' : 'button__icon--gray';
  return (
    <button className={ `button ${ variant }` }>
      { icon && iconPosition === 'before' && <img src={ icon } alt="" className={`button__icon ${iconClass} button__icon--before`}/> }
      { children }
      { icon && iconPosition === 'after' && <img src={ icon } alt="" className={`button__icon ${iconClass} button__icon--after`}/> }
    </button>
  );
};

export default Button;