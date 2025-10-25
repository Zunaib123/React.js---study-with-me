import React from "react";
import Card from "./components/Card";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import pic from "./assets/pic.jpg";
import pic2 from "./assets/pic2.jpg";
import pic3  from "./assets/pic3.jpg";
import pic4  from "./assets/pic4.jpg";

const App = () => {
  const usersArray = [
    {
      user: "Zunaib Khan",
      position: "Frontend - Developer",
      img: pic,
      desc: "React | Frontend - Engineer| UI/UX | Web Apps",
      link: "https://linkedin.com/in/zunaibkhan",
      insta: "https://www.instagram.com/__zunaib_khan__/",
      whatsapp: "https://wa.me/+919504348289/",
    },
    {
      user: "Adiba Khan",
      position: "Analyst Trainee",
      img: pic2,
      desc: "Intern @Deloitee | B.Tech CS in Data Science",
      link: "https://www.linkedin.com/in/adiba-khan-a50b23264/",
      insta: "https://www.instagram.com/adibaaa.khann/",
      whatsapp: "https://wa.me/+918779040033/",
    },
    {
      user: "Sukannya Dhak",
      position: "Salesforce Developer",
      img: pic3,
      desc: "SalesforceDeveloper@Deloitte | Ex-@Capgemini | 2x salesforce certified | JavaScript",
      link: "https://www.linkedin.com/in/sukannya-dhak-8232a820a/",
      insta: "https://www.instagram.com",
      whatsapp: "https://wa.me/+918494949493/",
    },
    {
      user: "Harshita Khiyani",
      position: "Risk Analyst",
      img: pic4,
      desc: "Risk Analyst at EY | FRM (L1) cleared | Finance | Learner",
      link: "https://www.linkedin.com/in/harshitakhiyani/",
      insta: "https://www.instagram.com/harshitakhiyani_",
      whatsapp: "https://wa.me/+9184935887645/",
    },
  ];

  return (
    <CustomCard
      effectColor="transparent"
      color="rgba(220, 192, 192, 0.05)"
      blur={20}
      borderRadius={20}
      style={{
        margin: "30px",
        padding: "1px",
        minHeight: "calc(100vh - 50%)",
        border: "2px solid rgba(255,255,255,0.3)",
      }}
    >
      <div className="parent">
        {usersArray.map((user, index) => (
          <Card
            key={index}
            user={user.user}
            position={user.position}
            img={user.img}
            desc={user.desc}
            link={user.link}
            insta={user.insta}
            whatsapp={user.whatsapp}
          />
          
        ))}
        
      </div>
    </CustomCard>
  );
};
  

export default App;
