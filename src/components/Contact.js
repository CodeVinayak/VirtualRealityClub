const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Contact Us"
          data-align="center"
        >
          Contact Us
        </h3>
        <div className="fn_cs_contact_info">
          <ul>
            <li>
              <div className="item">
                <p>
                   Get in Touch with VIT Chennai VR Club
                </p>
                <p>
                We'd love to hear from you! If you have any questions, suggestions, or just want to chat about all things virtual reality and tech, feel free to reach out to us. Here's how you can get in touch.
                </p>
              
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="label">Phone</h4>
                <h3>
                  <a href="tel:+91 9630576848">+91 9630576848</a>
                </h3>
                <h4 className="lable">Email</h4>
                <h3>
                  <a href="mailto:Hello@vinayaksingh.com">
                  Hello@vinayaksingh.com
                  </a>
                </h3>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="label">Office</h4>
                <h3>D1 Block,Room 723,<br></br>VIT Chennai</h3>
              </div>
            </li>
          </ul>
        </div>
        <div className="fn_cs_contact_form">
          <form
            action="/"
            method="post"
            className="contact_form"
            id="contact_form"
            autoComplete="off"
          >
            <div className="input_list">
              <ul>
                <li>
                  <input id="name" type="text" placeholder="Your Name *" />
                </li>
                <li>
                  <input id="email" type="text" placeholder="Your Email *" />
                </li>
                <li>
                  <input
                    id="tel"
                    type="text"
                    placeholder="Your Phone (optional)"
                  />
                </li>
                <li>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject (optional)"
                  />
                </li>
                <li className="full">
                  <textarea
                    id="message"
                    placeholder="Your Message *"
                    defaultValue={""}
                  />
                </li>
                <li className="full">
                  <label className="fn__checkbox">
                    <input type="checkbox" />
                    <span className="fn__checkmark">
                      <img src="/svg/checked.svg" alt="" className="fn__svg" />
                    </span>
                    <p>
                      I’m okay with getting emails and having that activity
                      tracked to improve my experience.
                    </p>
                  </label>
                  <div className="mw300">
                    <a
                      id="send_message"
                      href="#"
                      className="metaportal_fn_button full"
                    >
                      <span>Send Message</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="returnmessage"
              data-success="Your message has been received, We will contact you soon."
            />
            <div className="empty_notice">
              <span>! Please Fill Required Fields !</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
