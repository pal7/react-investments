import headerImage from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={headerImage} alt="Investment Calculator Image" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
