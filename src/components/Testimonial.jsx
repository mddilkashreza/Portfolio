import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <h2>Testimonal</h2>

        <section>
            <TestimonialCard
            name={"MD REZA"}
            feedback={"You are good developer"}
            />
             <TestimonialCard
            name={"MD REZA"}
            feedback={"You are good developer"}
            />
             <TestimonialCard
            name={"MD REZA"}
            feedback={"You are good developer"}
            />
        </section>
    </div>
  )
};

const TestimonialCard = ({name, feedback}) =>(
    <article>
        <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" alt="" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial