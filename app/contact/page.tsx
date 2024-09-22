import { Breadcrumbs } from "../_components/breadcrumbs/breadcrumbs";
import ContactInfo from "./conatct-info";
import ContactForm from "./contact-form";
import './contact.css';

export default function Page() {
  return (
    <>
      <Breadcrumbs type="landing" titleEn="Contact" 
        descEn="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore" 
        titleAr="Contact"
        descAr="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
      />
      <div className="contact-page container">
        <div className="row">
          <div className="col-md-5 col-sm-12 col-lg-4">
            <ContactInfo />
          </div>
          <div className="col-md-7 col-sm-12 col-lg-8">
            <ContactForm />
          </div>
        </div>
        <div className="contact-page__map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463878.29488595825!2d46.82252880000001!3d24.725191849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sjo!4v1722789587570!5m2!1sen!2sjo" width="100%" height="500"  loading="lazy"></iframe>
        </div>
      </div>
    </>
  );
}