

import { FunctionComponent } from "react";
import "./facts.css";
import { HomeSection } from "@/app/_interfaces/HomeSection.interface";

interface Props {
  data: HomeSection[]
}

const Facts: FunctionComponent<Props> = ({ data }) => {
  return (
    <section className="facts">
      <div className="container">
        <div className="facts-wrap">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-lg-3">
              <div className="facts-box">
                <div className="facts-box__icon">
                  <svg id="svg-icon" width="60px" height="60px" viewBox="0 0 512 512">
                    <g>
                      <path fill="#fff" d="M463 20.3L315.6 75.65 368.5 109C274 228 137.3 301.3 21.8 329.2l32.72 59.6C184.3 346.5 321.7 270.2 410.2 135.4l40.3 25.4L463 20.3zm7.7 116.7l-4.8 54.8-51.3-32.4c-1.8 2.7-3.7 5.3-5.6 8V487h78V137h-16.3zM320.1 265c-12.7 11-25.8 21.4-39.1 31.2V487h78V265h-38.9zm-123.7 84c-14.4 7.6-28.8 14.6-43.4 21.2V487h78V349h-34.6zM25 393v94h78v-94h-5.68c-14.82 5.5-29.63 10.6-44.35 15.3l-7.06 2.2-9.6-17.5H25z" />
                    </g>
                  </svg>
                </div>
                <h4>Projects Done</h4>
                <div className="facts-box__counter">
                  <span>2500</span>
                  <sup>+</sup>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-lg-3">
              <div className="facts-box">
                <div className="facts-box__icon">
                  <svg id="svg-icon" width="60px" height="60px" viewBox="0 0 14 14" fill="transparent">
                    <g id="SVGRepo_iconCarrier">
                      <rect width="14" height="14" x="0" y="0" id="canvas" />
                      <path fill="#fff" stroke="none" d="M 0,0 0,1 1,1 2,11 12,11 12,10 3,10 2.875,9 12,9 14,3 2.34375,3 2,0 z m 3,12 c -0.552285,0 -1,0.447715 -1,1 0,0.552285 0.447715,1 1,1 0.552285,0 1,-0.447715 1,-1 0,-0.552285 -0.447715,-1 -1,-1 z m 8,0 c -0.552285,0 -1,0.447715 -1,1 0,0.552285 0.447715,1 1,1 0.552285,0 1,-0.447715 1,-1 0,-0.552285 -0.447715,-1 -1,-1 z" id="supermarket" /> 
                    </g>
                  </svg>
                </div>
                <h4>Success Rate</h4>
                <div className="facts-box__counter">
                  <span>98</span>
                  <sup>%</sup>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-lg-3">
              <div className="facts-box">
                <div className="facts-box__icon">
                  <svg id="svg-icon" fill="#fff" height="60px" width="60px" viewBox="0 0 508 508" stroke="#fff">
                    <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M379.3,282.425v-59.3l41.9-41.9c5.5-5.5,5.5-14.4,0-19.9l-41.9-41.9v-59.3c0-7.8-6.3-14.1-14.1-14.1h-59.3L264,4.125 c-5.5-5.5-14.4-5.5-19.9,0l-42,41.9h-59.3c-7.8,0-14.1,6.3-14.1,14.1v59.3l-41.9,41.9c-5.5,5.5-5.5,14.4,0,19.9l41.9,41.9v59.3 c0,7.8,6.3,14.1,14.1,14.1h40.1l-77.4,152.7c-4.1,11.1,1.4,22.3,15.1,20.3l41.1-7.4l18.4,37.6c5.6,10.9,20.9,9.7,25.2,0.2 l48.6-95.8l48.6,95.8c5.9,10.8,19.4,10.8,25.2-0.2l18.4-37.6c0,0,42.8,7.6,43.6,7.6c18.4,1.1,15.3-17.1,11.8-22.1l-76.6-151.1H365 C372.9,296.525,379.3,290.225,379.3,282.425z M193.1,461.925l-10.7-21.8c-3.7-6.6-8.2-8.4-15.2-7.7l-23.7,4.3l66.9-131.9 l33.7,33.7c2.5,2.5,6,4,9.6,4.1L193.1,461.925z M364.5,436.725l-23.7-4.3c-6.2-1.1-12.4,2-15.2,7.7l-10.7,21.8l-45.1-89l31.2-61.5 L364.5,436.725z M351.1,217.325v51h-51c-3.7,0-7.3,1.5-10,4.1l-36.1,36l-36.1-36c-2.6-2.6-6.2-4.1-10-4.1h-51v-51 c0-3.7-1.5-7.3-4.1-10l-36.1-36.1l36.1-36.1c2.6-2.6,4.1-6.2,4.1-10v-51h51c3.7,0,7.3-1.5,10-4.1l36.1-36l36.1,36.1 c2.6,2.6,6.2,4.1,10,4.1h51v51c0,3.7,1.5,7.3,4.1,10l36.1,36.1l-36.1,36.1C352.5,210.025,351.1,213.625,351.1,217.325z"/> </g> </g> <g> <g> <path d="M254,94.025c-42.6,0-77.3,34.7-77.3,77.3s34.7,77.3,77.3,77.3c42.6,0,77.3-34.7,77.3-77.3 C331.3,128.725,296.6,94.025,254,94.025z M254,220.425c-27.1,0-49.1-22-49.1-49.1c0-27.1,22-49.1,49.1-49.1 c27.1,0,49.1,22,49.1,49.1C303.1,198.425,281.1,220.425,254,220.425z"/> </g> </g> </g>
                  </svg>
                </div>
                <h4>Awards</h4>
                <div className="facts-box__counter">
                  <span>70</span>
                  <sup>+</sup>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-lg-3">
              <div className="facts-box">
                <div className="facts-box__icon">
                  <svg id="svg-icon" fill="#fff" width="800px" height="800px" viewBox="0 0 260 260" stroke="#fff">
                    <g id="SVGRepo_iconCarrier"> <path d="M218,94h3.023C228.057,108.874,232,125.484,232,143c0,63.411-51.589,115-115,115S2,206.411,2,143S53.589,28,117,28 c17.516,0,34.126,3.943,49,10.977V42v9.574l-7.979,7.979C145.64,53.441,131.715,50,117,50c-51.28,0-93,41.72-93,93s41.72,93,93,93 s93-41.72,93-93c0-14.716-3.441-28.641-9.552-41.022L208.426,94H218z M164,143c0,25.916-21.084,47-47,47s-47-21.084-47-47 s21.084-47,47-47c1.472,0,2.926,0.077,4.363,0.21l18.351-18.351C132.596,75.37,124.957,74,117,74c-38.047,0-69,30.953-69,69 s30.953,69,69,69s69-30.953,69-69c0-7.957-1.37-15.596-3.859-22.714l-18.35,18.35C163.923,140.074,164,141.528,164,143z M218,74 l40-40h-32V2l-40,40v17.857l-61.425,61.425c-2.373-0.828-4.92-1.283-7.575-1.283c-12.703,0-23,10.297-23,23 c0,12.703,10.297,23,23,23c12.703,0,23-10.297,23-23c0-2.655-0.455-5.202-1.283-7.575L200.143,74H218z"/> 
                    </g>
                  </svg>
                </div>
                <h4>Success Rate</h4>
                <div className="facts-box__counter">
                  <span>700</span>
                  <sup>+</sup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Facts