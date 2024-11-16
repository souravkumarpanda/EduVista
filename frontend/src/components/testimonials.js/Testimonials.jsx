import React from 'react'
import "./testimonials.css";
import Localimage1 from "./WhatsApp Image 2024-08-15 at 17.30.49_97cb1d2a.jpg";
import Localimage2 from "./WhatsApp Image 2024-08-14 at 23.25.13_0e2d2f7b.jpg";
import Localimage3 from "./WhatsApp Image 2024-08-14 at 23.27.37_065b529c.jpg";
import Localimage4 from "./WhatsApp Image 2024-08-15 at 17.38.37_8be9567a.jpg";

const Testimonials = () => {
    const testimonialsData = [
        {
          id: 1,
          name: "Sourav Kumar Panda",
          position: "Student",
          message:
            "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
          image:
            Localimage1,
        },
        {
          id: 2,
          name: "Bikas Ch. Maharana",
          position: "Student",
          message:
            "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
          image:
            Localimage2,
        },
        {
          id: 3,
          name: "Subham Mahapatra",
          position: "Student",
          message:
            "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
          image:
            Localimage3,
        },
        {
          id: 4,
          name: "Bhabani sankar sahoo",
          position: "Student",
          message:
            "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
          image:
            Localimage4,
        },
      ];
  return (
     <section className="testimonials">
        <h2>What our students say</h2>
        <div className="testimonials-cards">
            {
                testimonialsData.map((e)=>(
                    <div className='testimonial-card' key ={e.id}>
                        <div className="student-image">
                            <img src={e.image} alt=""/>
                        </div>
                        <p className="message">{e.message}</p>
                        <div className='info'>
                            <p className='name'>{e.name}</p>
                            <p className="position">{e.position}</p>
                        </div>
                    </div>
                ))
            }
        </div>
     </section>
  )
}

export default Testimonials