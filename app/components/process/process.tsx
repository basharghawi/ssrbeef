
import Image from "next/image";
import "./process.css";

export default function Process() {
  return (
    <section className="our-process">
      <div className="container">
        <div className="our-process__sec-title">
          <h2>
            <span>our</span>
            Process
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
        <div className="our-process__roadmap-wrap">
          <div className="roadmap-wrap__roadmap-item blue">
            <span className="roadmap-item__roadmap-icon">
              <i>
                <Image src="/images/process1.png" alt="process 1" width={130} height={143} />
              </i>
            </span>
            <span className="roadmap-item__roadmap-label">
              <span>
                01
              </span>
            </span>
            <h3>Research Project</h3>
          </div>
          <div className="roadmap-wrap__roadmap-item green">
            <span className="roadmap-item__roadmap-icon">
              <i>
                <Image src="/images/process2.png" alt="process 2" width={130} height={143} />
              </i>
            </span>
            <span className="roadmap-item__roadmap-label">
              <span>
                02
              </span>
            </span>
            <h3>Find Ideas</h3>
          </div>
          <div className="roadmap-wrap__roadmap-item pink">
            <span className="roadmap-item__roadmap-icon">
              <i>
                <Image src="/images/process3.png" alt="process 3" width={130} height={143} />
              </i>
            </span>
            <span className="roadmap-item__roadmap-label">
              <span>
                03
              </span>
            </span>
            <h3>Start Optimize</h3>
          </div>
          <div className="roadmap-wrap__roadmap-item purple">
            <span className="roadmap-item__roadmap-icon">
              <i>
                <Image src="/images/process4.png" alt="process 4" width={130} height={143} />
              </i>
            </span>
            <span className="roadmap-item__roadmap-label">
              <span>
                04
              </span>
            </span>
            <h3>Reach Target</h3>
          </div>
        </div>
      </div>
    </section>
  )
}