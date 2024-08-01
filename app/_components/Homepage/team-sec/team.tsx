"use client"

import { HomeSection } from "@/app/_interfaces/HomeSection.interface";
import Teambox from "./team-box";
import "./team.css";
import { FunctionComponent } from "react";

interface Props {
  data: HomeSection[]
}

const OurTeam: FunctionComponent<Props> = ({ data }) => {
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
              data.map((item, i) => {
                return (
                  <div className="col-md-3 col-sm-6 col-lg-3" key={i}>
                    <Teambox data={item} />
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

export default OurTeam