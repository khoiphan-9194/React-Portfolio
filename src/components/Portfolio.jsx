// TODO: Add a comment explaining how we are able to extract the key value pairs from props
//this currentPage and handlePageChange were destructed from props

function Portfolio() {

  const data = [
    {
      id: 1,
      name: 'Weather Dashboard',
      description: 'This application will give a 5 day forecast',
      link: 'https://khoiphan-9194.github.io/Weather-Dashboard/',
      img: './public/weather.webp',
      img_description: 'Weather Forecast Display'
    },
    {
      id: 2,
      name: 'Workday Scheduler',
      description: 'This will set up a schedule for a day',
      link: 'https://khoiphan-9194.github.io/Weather-Dashboard/',
      img: './public/workday-schedule.jpg',
      img_description: 'Boat on Calm Water/'
    },
    {
      id: 3,
      name: 'Tech Blog',
      description: 'user can create a blog',
      link: 'https://khoiphan-9194.github.io/Weather-Dashboard/',
      img: './public/tech-blog.jpeg',
      img_description: 'Boat on Calm Water/'
    },
    {
      id: 4,
      name: 'Music Festival Booking App',
      description: 'user can book a festival event',
      link: 'https://khoiphan-9194.github.io/Weather-Dashboard/',
      img: './public/music-festival.jpeg',
      img_description: 'Boat on Calm Water/'
    },
    {
      id: 5,
      name: 'Note Taker',
      description: 'user can create their own notes',
      link: 'https://khoiphan-9194.github.io/Weather-Dashboard/',
      img: './public/note-taker.jpg',
      img_description: 'Boat on Calm Water/'
    },
    {
      id: 6,
      name: 'Pop Quiz',
      description: 'giving a quiz',
      link: 'https://khoiphan-9194.github.io/Weather-Dashboard/',
      img: './public/quiz.jpeg',
      img_description: 'Boat on Calm Water/'
    },
  ];


  return (

    <div id="portfolio" className="main-portfolio">
      <h4>Work Portfolio</h4>
      
        <div className="grid-portfolio">
        {data.map(({ id, name, description, link, img, img_description }) => {
          return (
            <div className="grid-item">
            <div className="row"key={id}>
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <a href={link}>
              <img
                src={img}
                className="shadow-1-strong rounded mb-4"
                alt={img_description}
              />
            </a>
            <div>
              <h3 className="Main-Text">
                {name}
              </h3>
              <div className="Extra-Text">
                <p>
                 {description}
                </p>
              </div>
            </div>
            <br />
            <br />
            </div>
              </div>
              </div>
            );
          })}
        </div>
     
      

             
          
       
    </div>
    


  );
};

export default Portfolio;


