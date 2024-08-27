import './loading.css';

export default function LoadingPage() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div className="container">
  <div className="balls">
    <div className="up">
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
    </div>
    <div className="down">
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
    </div>
  </div>
</div>

        </div>
    );

}