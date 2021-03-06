import React from 'react';
import {Link} from 'react-router-dom'


export default function Home() {
  return <React.Fragment>
  {/* <!-- header section starts  --> */}

    <header>
      <a href="#" class="logo">St.Joseph's College Notes</a>

      <input type="checkbox" id="menu-bar" />
      <label for="menu-bar" class="fas fa-bars"></label>

      <nav class="navbar">
        {/* <Link to='/'>Home</Link> */}
        <a href="#home">Home</a>
        <a href="#services">services</a>
        <a href="#about">about</a>
        <a href="#team">our team</a>
        <a href="#contact">contact</a>
      {/* <!-- <a href="New Login.html" target="_blank">login</a> -->
      <!-- <a href="">Cool stuff</a> --> */}
      </nav>
    </header>

{/* <!-- header section ends -->

<!-- home section starts  --> */}

    <section class="home" id="home">
      <div class="content">
        <h3>St.Joseph's College <span>(Autonomous), Bengaluru.</span></h3>
        <p>
          This is a student aid website, where we have different services for
          the students of St Josephs College, Bangalore. This website is created
          by a team of four assisted by a mentor. The team includes Ms Sandhya,
          HOD of the computer department, as mentor, Suhail as developer, Adnan
          as creator and tester, Navish and Kaunain as associate developers. All
          the members of this team are third year students of St Joseph College.
          Like our college motto that is "creating men and women for others" The
          main focus of this website is also to help students to excel in their
          studies and make the best out of their academic life at St Josephs and
          become better individuals.
        </p>
      </div>

      <div class="image">
        
        <img src="assests/Image/college1.jpg" />
      </div>
    </section>

    {/* <!-- home section ends -->

    <!-- services section starts  --> */}

    <section class="services" id="services">
      <h1 class="heading">services</h1>

      <div class="box-container">
        <div class="box">
          <img src="assests/Image/f-icon1.png" />
          <h3>Class Notes</h3>
          <p>
            in this section Students will have access to the notes according to
            the semester and subject, that are verified by the respective
            department HOD's.
          </p>
          <Link to='/notes' class='btn'>read more</Link>
          {/* <a href="Notes.html" class="btn">read more</a> */}
        </div>

        <div class="box">
          <img src="assests/Image/f-icon2.png" />
          <h3>College Road Map</h3>
          <p>
            In this section students will have access to a visual representation
            of the course they are in with detailed information about each step.
          </p>
          <Link to='/roadmap' class='btn'>read more</Link>
          {/* <a href="Roadmap.html" class="btn">read more</a> */}
        </div>

        <div class="box">
          <img src="assests/Image/f-icon3.png" />
          <h3>friendly interactions</h3>
          <p>
            In this section students will have access to anonymous counselling
            done by our college official counsellors.
          </p>
          <a href="" class="btn">read more</a>
        </div>
      </div>
    </section>

    {/* <!-- services section ends -->

    <!-- about section starts  --> */}

    <section class="about" id="about">
      <h1 class="heading">about our college</h1>

      <div class="column">
        <div class="image">
          <img src="assests/Image/about-img.png" />
        </div>

        <div class="content">
          <h3>Welcome to St.Joseph's College (Autonomous), Bengaluru.</h3>
          <p>
            At St.Joseph's, we try to create leaders for a better world.
            Leaders, deeply rooted in our philosophy ???Fide et Labore??? (a Latin
            phrase that means 'Faith and Toil'), who commit themselves to excel
            in the fields they choose. That excellence is driven by the values
            and principles of St. Ignatius of Loyola, the founder of the Jesuit
            order that governs St. Joseph's. We make every effort to be
            relevant, innovative, and creative.
          </p>
          <p>
            During the COVID-19 pandemic and its aftermath, Josephites were at
            the forefront of relief and rehabilitation work joining hands with
            the civil officials. Our outreach program 'Bembala' stood in support
            of the suffering. The Jesuit motto ???educating men and women for
            others??? animates our vision to reach out to those most in need.
          </p>
          <a
            href="https://www.sjc.ac.in/aboutus.php"class="btn"target="_blank">read more</a>
        </div>
      </div>
    </section>

    {/* <!-- our team section starts  -->
 */}
    <section class="team" id="team">
      <h1 class="heading">our team</h1>

      <div class="box-container">
        <div class="box">
          <i class="fas fa-quote-right"></i>
          <div class="user">
            <img src="assests/Image/Suhail.jpeg" />
            <h3>
              mohammed suhail - <br />
              developer
            </h3>
            <div class="comment">
              I'm a 3rd-year degree student at St Joseph's College, Bangalore,
              who is pursuing to become a developer or work in a development
              domain. I have played a major role in building the code for this
              website and have given a constant effort to explain it to my
              teammates and in making it look attractive.
            </div>
          </div>
        </div>

        <div class="box">
          <i class="fas fa-quote-right"></i>
          <div class="user">
            <img src="assests/Image/Sandhya ma'am.jpeg" />
            <h3>Sandhya ma'am - <br />mentor</h3>
            <div class="comment">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, qui
              expedita. Eaque accusantium, quaerat nostrum quis, rem
              necessitatibus similique expedita ipsam voluptate, natus
              exercitationem dolore tenetur itaque alias cumque obcaecati optio?
              Unde illo ducimus accusantium.
            </div>
          </div>
        </div>

        <div class="box">
          <i class="fas fa-quote-right"></i>
          <div class="user">
            <img src="assests/Image/Adnan.jpeg" />
            <h3>Syed Adnan - <br />creator and tester</h3>
            <div class="comment">
              I'm a 3rd-year degree student at St Joseph's College, Bangalore,
              who is pursuing to become a Data Scientist. I came up with the
              idea of building this website and has been a constant support in
              developing and testing this website. I have always tried to keep
              the whole team on the same page so that this project becomes a
              complete success.
            </div>
          </div>
        </div>

        <div class="box">
          <i class="fas fa-quote-right"></i>
          <div class="user">
            <img src="assests/Image/Navish.jpeg" />
            <h3>navish - <br />associate developer</h3>
            <div class="comment">
              I'm a 3rd year degree student of St Joseph's College.As a member
              of the developing team, my responsibility was to work on website
              development and collecting source files to upload.I tried to help
              my teammates to build a successful website.
            </div>
          </div>
        </div>

        <div class="box">
          <i class="fas fa-quote-right"></i>
          <div class="user">
            <img src="assests/Image/Kaunian.jpeg" />
            <h3>Kaunian - <br />associate developer</h3>
            <div class="comment">
              i'm a 3rd year degree student of st. joseph's college Bangalore.
              As a member of the developing team and as an associate developer
              of this website. i have assisted with sources and information
              gathering.i always tried to contribute my support toward my team
              and success of this project.
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- review section ends -->

    <!-- contact section starts  --> */}

    <section class="contact" id="contact">
      <div class="image">
        <img src="assests/Image/contact-img.png" />
      </div>

      <form action="https://formspree.io/f/xoqrjjgy" method="post">
        <h1 class="heading">contact us</h1>

        <div class="inputBox">
          <input type="text" id="name" name="name" required />
          <label for="name">name</label>
        </div>

        <div class="inputBox">
          <input type="email" id="email" name="email" required />
          <label for="email">email</label>
        </div>

        <div class="inputBox">
          <input type="number" id="phone" name="phone" required />
          <label for="phone">phone</label>
        </div>

        <div class="inputBox">
          <input
            type="message"
            id="message"
            name="message"
            cols="30"
            rows="10"
            required
          />
          <label for="message">message</label>
        </div>

        <input type="submit" class="btn" value="send message" />
      </form>
    </section>

    {/* <!-- contact section ends -->

    <!-- footer section starts  --> */}

    <div class="footer">
      <div class="box-container">
        <div class="box">
          <h3>about us</h3>
          <p>
            St. Joseph's College is a private, Jesuit, higher educational
            institution.Run by the Karnataka Province of the Society of Jesus in
            Bangalore, Karnataka,India.It is one of the oldest colleges in the
            state of Karnataka with a history of 139 years.
          </p>
        </div>

        <div class="box">
          <h3>quick links</h3>
         <Link to='/'>Home</Link>
          <a href="#services">services</a>
          <a href="#about">about</a>
          <a href="#team">our team</a>
          <a href="#contact">contact</a>
        </div>

        <div class="box">
          <h3>follow us</h3>
          <a href="https://www.facebook.com/sjcbengaluru/" target="_blank">facebook</a>
          <a href="https://www.instagram.com/sjcbengaluru/?hl=en"
            target="_blank">instagram</a>
          <a href="https://www.youtube.com/c/SJCBengaluru" target="_blank">you tube</a>
          <a href="https://twitter.com/sjcbengaluru?lang=en" target="_blank">twitter</a>
        </div>

        <div class="box">
          <h3>contact info</h3>
          <div class="info">
            <i class="fas fa-phone"></i>
            <p>(+91 33) 2227-4079</p>
          </div>
          <div class="info">
            <i class="fas fa-envelope"></i>
            <p>desk@sjc.ac.in</p>
          </div>
          <div class="info">
            <i class="fas fa-map-marker-alt"></i>
            <p>bangalore, india - 560027</p>
          </div>
        </div>
      </div>

      <h1 class="credit">&copy; copyright @ 2022 by St.Joseph's College</h1>
    </div>

    {/* <!-- footer section ends --> */}


  </React.Fragment>;
}
