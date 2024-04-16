
// Filename - App.js
import React from "react";
import { MdFoundation } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { GrDocumentPerformance } from "react-icons/gr";
 
const Download = () => {



 const data = [
    {
      id: 1,
      skillName: 'Front-End',
      arraySkill: ["Html5","CSS","JavaScript","APIs","Bootstrap"]
     
    },
    {
      id: 2,
      skillName: 'Back-End',
      arraySkill: ["Html5","CSS","JavaScript","APIs","Bootstrap"]
     
    },
    {
      id: 3,
      skillName: 'Front-End',
      arraySkill: ["Html5","CSS","JavaScript","APIs","Bootstrap"]
     
    },
    {
      id: 4,
      skillName: 'Front-End',
      arraySkill: ["Html5","CSS","JavaScript","APIs","Bootstrap"]
     
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
                    <section className ="solid-line"> </section>
                <button className="downLoad-btn"onClick={onButtonClick}><i className="fa fa-download"></i>
                 <pre>Download Resume</pre> 
                 </button>        
            </center>





    <div className="container overflow-hidden">
            <div className="card-download row gy-5">


            {data.map(({id,skillName,arraySkill})=>
        {
          return(
            <div className="col-6">
            
            <ul className="list-group">
  
              <li className="list-group-item" key={id}>
               {skillName}
               <section className ="solid-line"> </section>
              </li>
              
              {arraySkill.map((e)=>{
                return <ul> <li>{e}</li> </ul>
              })}
               
          </ul>
              </div>


            
          );
        }
        )}

            </div>
                </div>
      



  <div className="container overflow-hidden">
  <div className="card-download row gy-5">

    <div className="col-6">
      <div className="p-3 border cardList-download">Front-End
      <section className ="solid-line"> </section>
      <p className="column-text cardList-download">
            <ul>
              <li className="logo">
                <MdFoundation />
              </li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>APIs</li>
              <li>Bootstrap</li>
              <li>GIT</li>
            </ul>
          </p></div>  
         </div>

         <div className="col-6">
      <div className="p-3 border cardList-download">Back-End
      <section className ="solid-line"> </section>
      <p className="column-text cardList-download">
      <ul>
              <li className="logo">
                <GrTechnology />
              </li>
              <li>Node.Js</li>
              <li>Jest</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>Object-Relational Mapping(ORM)</li>
              <li>Model-View-Controller (MVC)</li>
            </ul>
          </p></div>  
         </div>
   

         <div className="col-6">
      <div className="p-3 border cardList-download">Performance
      <section className ="solid-line"> </section>
      <p className="column-text cardList-download">
      <ul>
              <li className="logo">
                <GrDocumentPerformance />
              </li>
              <li>NoSQL</li>
              <li>Progressive Web Applications (PWA)</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
              <li>React</li>
              <li>MERN</li>
              <li>State</li>
            </ul>
          </p></div>  
         </div>


   <div className="col-6 ">
      <div className="p-3 border cardList-download">Technologies
      <section className ="solid-line"> </section>
      <p className="column-text ">
            <ul>
              <li className="logo">
                <MdFoundation />
              </li>
              <li>NPM Packages</li>
              <li>Insomnia</li>
              <li>Heroku</li>
              <li>PWA</li>
              <li>jQuery</li>
              <li>GIT</li>
            </ul>
          </p></div>  
         </div>

  </div>
</div>
        </>
    );
};
 
export default Download;
