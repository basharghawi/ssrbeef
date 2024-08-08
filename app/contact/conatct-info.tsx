import Image from "next/image"
import { FunctionComponent } from "react"
import SocialLinks from "../_components/social-links/social-links"


interface BoxProps {
  icon: string,
  h3: string,
  p: string
}

const ContactInfoBox:FunctionComponent<BoxProps> = ({ icon, h3, p }) => {
  return (
    <div className="conatct-info__box">
      <figure className="box-icon">
        <Image src={icon} alt="box icon" width={50} height={50} />
      </figure>
      <div className="box-info">
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
    </div>
  )
}

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>Get in Touch</h2>
      <p>Metamax is a USA search engine marketing agency, that deliver digital</p>
      <ContactInfoBox 
        icon="/images/location-pin.svg" 
        h3="Visit Us:" 
        p="Saudi Arabia-Ryadh" 
      />
      <ContactInfoBox 
        icon="/images/email.svg" 
        h3="Mail Us:" 
        p="Info@reellance.com" 
      />
      <ContactInfoBox 
        icon="/images/smart-phone.svg" 
        h3="Phone Us:" 
        p="+9665544123123" 
      />
      <SocialLinks />
    </div>
  )
}

export default ContactInfo