
// Filename - App.js
import React from "react";
import { FaAtom } from "react-icons/fa";

const Download = () => {

  const data = [
    {
      id: 1,
      skillName: 'Front-End',
      arraySkill: ["Html5", "CSS", "JavaScript", "APIs", "Bootstrap", "GIT"]

    },
    {
      id: 2,
      skillName: 'Technologies',
      arraySkill: ["NPM Packages", "Insomnia", "Heroku", "jQuery", "Handlebars"]

    },
    {
      id: 3,
      skillName: 'Back-End',
      arraySkill: ["Node.Js", "Jest", "Express.js", "MySQL", "Sequelize", "Object-Relational Mapping(ORM)", "Model-View-Controller (MVC)"]

    },

    {
      id: 4,
      skillName: 'Performance Tech',
      arraySkill: ["NoSQL", "Progressive Web Applications (PWA)", "MongoDB", "Mongoose", "GraphQL", "React", "MERN", "State"]

    }
  ];




  // Function will execute on click of button
  const onButtonClick = () => {

    // using Java Script method to get PDF file
    fetch("./public/banker.pdf").then((response) => {
      response.blob().then((blob) => {

        // Creating new object of PDF file
        const fileURL =
          window.URL.createObjectURL(blob);
        alert(fileURL);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "KhoiPhan-resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <center className="downLoad">
        <h1> My Resume </h1>
        
        <section className="solid-line"> </section>
        <button className="downLoad-btn" onClick={onButtonClick}><i className="fa fa-download"></i>
          
          <pre>Download Resume</pre>

        </button>
   
      </center>
      <br />
     <center>
           <p>
                Please feel free to check out my list of Developer
                Proficiencies!
          </p>
     </center>


  
    

      <div className="container overflow-hidden">
        <div className="card-download column gy-5">
      
          {data.map(({ id, skillName, arraySkill }) => {
            return (
              <div className="col-4">
             
                <ul>

                  <li className="list-group-item" key={id}>
              
                    <div className="p-3 border cardList-download">
          
                    <FaAtom/> {skillName}    
                
                      <section className="solid-line"> </section>
                      <p className="column-text cardList-download">
                        {arraySkill.map((e) => {
                          return <ul>
                            <li>{e}</li>
                          </ul>
                        })}
                      </p>
                    </div>
                  </li>

                </ul>
              </div>

            );
          }
          )}

        </div>
      </div>

 

    </>
  );
};

export default Download;
