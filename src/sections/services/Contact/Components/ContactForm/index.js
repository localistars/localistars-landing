import React from 'react'
import Form from './style';
 
export default function ContactForm({...rest}){
return(
<Form {...rest}>
  <h3 className="form-title">Send Message</h3>
  <div className="contact-form">
    <form action="./">
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="form-floating">
            <input className="form-control" placeholder="Leave a comment here" id="floatinginput" />
            <label htmlFor="floatinginput">Your Email</label>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="form-floating">
            <input className="form-control" placeholder="Leave a comment here" id="floatinginput2" />
            <label htmlFor="floatinginput2">Phone number</label>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="form-floating">
            <input className="form-control" placeholder="Your Website" id="floatinginput3" />
            <label htmlFor="floatinginput3">Your Website</label>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: 100}} defaultValue={""} />
            <label htmlFor="floatingTextarea">Your Message Here </label>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="row align-items-center mt-3">
            <div className="col-md-8 col-lg-7 col-md-6 col-xl-8 pt-3">
              <div className="form-check d-flex align-items-center">
                <input className="form-check-input bg-white float-none mt-0" type="checkbox" defaultValue id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Breath of that universal love which bears and sustains us, as it floats
                </label>
              </div>
            </div>
            <div className="col-md-4 col-lg-5 col-xl-4 text-md-end pt-3">
              <button className="btn btn-torch-red btn--lg-2 shadow--torch-red-3 rounded-55 text-white">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</Form>

)
}
