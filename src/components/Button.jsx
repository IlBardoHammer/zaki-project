import '../styles/components/Button.scss';

import '../styles/components/Button.scss';

const Button = ({ children, variant, icon, size, iconPosition, iconSize, className, textColor }) => {
  const iconClass = variant === 'primary' ? 'button__icon--white' : 'button__icon--gray';
  const textClass = textColor === 'white' ? 'button__color--white' : 'button__color--dark';
  const sizeClass = size === 'small' ? 'button__small' : '';
  const iconSizeClass = `button__icon--${ iconSize }`;

  const buttonClass = `button ${variant} ${sizeClass} ${textClass} ${className}`;
  return (
    <button className={buttonClass}>
      { icon && iconPosition === 'before' && (
        <img src={ icon } alt="" className={ `button__icon ${ iconClass } ${ iconSizeClass } button__icon--before` }/>
      ) }
      { children }
      { icon && iconPosition === 'after' && (
        <img src={ icon } alt="" className={ `button__icon ${ iconClass } ${ iconSizeClass } button__icon--after` }/>
      ) }
    </button>
  );
};

export default Button;

