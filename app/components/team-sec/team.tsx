import Teambox from "./team-box";
import "./team.css";

export default function OurTeam() {
  return (
    <section className="team-sec">
      <div className="container">
        <div className="team-sec__sec-title">
          <h2>
            <span>OUR</span>
            TEAM
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
        <div className="team-sec__team-info">
          <div className="row">
            {
              Array.from({ length: 4 }, (v, i) => {
                return (
                  <div className="col-md-3 col-sm-6 col-lg-3" key={i}>
                    <Teambox />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}