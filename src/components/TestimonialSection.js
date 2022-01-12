import TestimonialColumn from './TestimonialColumn';
import TestimonialCard from "./TestimonialCard";
import './TestimonialCard.css';

function TestimonialSection() {
    return (
      <div className="TestimonialSection">
        <div class="testimonialSectionInner">
            <TestimonialColumn>
                <TestimonialCard></TestimonialCard>
            </TestimonialColumn>
            <TestimonialColumn>
                <TestimonialCard></TestimonialCard>
            </TestimonialColumn>
            <TestimonialColumn>
                <TestimonialCard></TestimonialCard>
            </TestimonialColumn>
        </div>
      </div>
    );
  }
  
  export default TestimonialSection;