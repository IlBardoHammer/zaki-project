import '../styles/components/Button.scss';

import '../styles/components/Button.scss';

const Button = ({ children, variant, icon, buttonSize, iconPosition, iconSize, className, altColor, iconColor }) => {
  const iconClassColor = iconColor === 'white' ? 'button__icon--white' : iconColor === 'grey' ? 'button__icon--gray' : iconColor === 'accent' ? 'button__icon--accent' : '';
  const sizeClass = buttonSize === 'small' ? 'button__small' : '';
  const iconSizeClass = `button__icon--${iconSize}`;

  // Applica la classe per il colore alternativo solo se `variant` è 'alt'
  const altTextClass = variant === 'alt' && altColor === 'white' ? 'button__alt-color--white' : variant === 'alt' && altColor === 'dark-grey' ? 'button__alt-color--dark-grey' : '';

  const buttonClass = `button ${variant} ${sizeClass} ${altTextClass} ${className || ''}`.trim();

  return (
    <button className={buttonClass}>
      {icon && iconPosition === 'before' && (
        <img src={icon} alt="" className={`button__icon  ${iconClassColor} ${iconSizeClass} button__icon--before`} />
      )}
      {children}
      {icon && iconPosition === 'after' && (
        <img src={icon} alt="" className={`button__icon  ${iconClassColor} ${iconSizeClass} button__icon--after`} />
      )}
    </button>
  );
};

export default Button;

