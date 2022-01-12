import SmilingMan from '../images/smiling-man.jpg';

function TestimonialCard() {
    return (
      <div className="TestimonialCard">
        <div className="testimonialCardInner">
            <div className="testimonialImage">
                <img src={SmilingMan}></img>
            </div>
            <div className="testimonialInfo">
                <h3>Testimonial Name</h3>
                <h4>Testimonial Title</h4>
            </div>
            <div className="testimonialBio">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed suscipit eros, vel egestas mi. Morbi porttitor sed nibh vel sodales. Aenean ut risus viverra, volutpat dolor id, interdum leo.</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default TestimonialCard;