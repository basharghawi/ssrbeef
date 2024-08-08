const ContactForm = () => {
  return (
    <div className="conatct-form">
      <h2>Send a Message</h2>
      <form>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-6">
            <div className="form-group">
              <label className="visually-hidden" htmlFor="first_name">first name</label>
              <input type="text" id="first_name" name="first_name" placeholder="First Name" required />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <div className="form-group">
              <label className="visually-hidden" htmlFor="last_name">last name</label>
              <input type="text" id="last_name" name="last_name" placeholder="Last Name" required />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <div className="form-group">
              <label className="visually-hidden" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <div className="form-group">
              <label className="visually-hidden" htmlFor="phone">Phone</label>
              <input type="number" id="phone" name="phone" placeholder="Phone" />
            </div>
          </div>
          <div className="col-md-12 col-sm- col-lg-12">
            <div className="form-group">
              <textarea name="message" id="messgae" placeholder="Message"></textarea>
            </div>
          </div>
        </div>
        <button className="conatct-form__btn" type="submit">
          Send A Message
        </button>
      </form>
    </div>
  )
}

export default ContactForm