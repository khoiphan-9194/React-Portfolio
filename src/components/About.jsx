import React from "react";
import profileImage from "../../public/khoi.jpeg";




function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 className="section-title primary-border">
          About Me
        </h1>
      </div>

      <div>
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} alt="profile" />

          </div>


          <p>
            Greetings! I'm Khoi Phan, a little guy residing in the the Silicon Valley where big tech companied located .
             I'm working at a bank as a teller, I really enjoy the job but also like coding.My motivation made me enroll 6 month
             bootcamp for full stack web development, I've learned a lot from the course. I'm now hoping to land a job in this field,
             Although I originally migrated to San Francisco for my college education
            
          </p>


        </div>
      </div>
    </section>
  );
}

export default About;

