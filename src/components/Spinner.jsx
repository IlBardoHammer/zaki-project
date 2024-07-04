import "../styles/components/Spinner.scss";
import s1 from "../assets/spinner/step1.png";
import s2 from "../assets/spinner/step2.png";
import s3 from "../assets/spinner/step3.png";
import s4 from "../assets/spinner/step4.png";


const Spinner = () => {
  return (
    <div className="spinner-container">
      <img src={s1} className="spinner-container__circle" alt="Step 1" />
      <img src={s2} className="spinner-container__circle" alt="Step 2" />
      <img src={s3} className="spinner-container__circle" alt="Step 3" />
      <img src={s4} className="spinner-container__circle" alt="Step 4" />
    </div>
  );
};

export default Spinner;