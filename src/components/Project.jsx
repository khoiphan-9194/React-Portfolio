// TODO: Add a comment explaining how we are able to extract the key value pairs from props
//this currentPage and handlePageChange were destructed from props
function Project({projects}) {

  const { name, description } = projects;


  return (
    <div className="main-portfolio">
      <h3>Portfolio</h3>
      <div className="grid-item">
        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <a href="https://khoiphan-9194.github.io/Weather-Dashboard/">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <div>
              <h3 class="Main-Text">
                {name}
              </h3>
              <div class="Extra-Text">
                <p>
                  {description}
                </p>
              </div>
            </div>
            <br />
            <br />
          </div>





          <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <a href="https://khoiphan-9194.github.io/Work-Day-Scheduler/">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />
            </a>
            <div>
              <h3 class="Main-Text">
                {name}
              </h3>
              <div class="Extra-Text">
                <p>
                  {description}
                </p>
              </div>
            </div>
            <br />
            <br />
          </div>


          <div class="col-lg-4 mb-4 mb-lg-0">

            <a href="https://blog-tech-4ecff840e9a7.herokuapp.com/">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />
            </a>
            <div>
              <h3 class="Main-Text">
                {name}
              </h3>
              <div class="Extra-Text">
                <p>
                  {description}
                </p>
              </div>
            </div>
            <br />
            <br />
          </div>

          <div class="col-lg-4 mb-4 mb-lg-0">
            <a href="https://festival-hub-g6-02035039c638.herokuapp.com/">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />
            </a>
            <div>
              <h3 class="Main-Text">
                {name}
              </h3>
              <div class="Extra-Text">
                <p>
                  {description}
                </p>
              </div>
            </div>
            <br />
            <br />
          </div>



          <div class="col-lg-4 mb-4 mb-lg-0">
            <a href="https://noke-taker-17f4af4bd0c0.herokuapp.com/">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />
            </a>
            <div>
              <h3 class="Main-Text">
                {name}
              </h3>
              <div class="Extra-Text">
                <p>
                  {description}
                </p>
              </div>
            </div>
            <br />
            <br />
          </div>



          <div class="col-lg-4 mb-4 mb-lg-0">
            <a href="https://khoiphan-9194.github.io/quiz/">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                class="w-100 shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />
            </a>
            <div>
              <h3 class="Main-Text">
                {name}
              </h3>
              <div class="Extra-Text">
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
    </div>


  );
};

export default Project;
