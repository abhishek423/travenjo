<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/abhishek423/travenjo">
    <img src="frontend/img/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Travenjo</h3>

  <p align="center">
    A smart trip management application
    <br />
    <a href="https://docs.google.com/presentation/d/1bXMIz3JP3yOKPUr2ObKw-qCrv80Y5WIdqxuimEvnQcs/edit#slide=id.g251d9112ad_1_0"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://drive.google.com/file/d/1VonFK_aLL87hhhIyzf6N_lFXabvvadau/view?usp=sharing">View Demo</a>
    ·
    <a href="https://github.com/abhishek423/travenjo/issues">Report Bug</a>
    ·
    <a href="https://github.com/abhishek423/travenjo/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <!-- <li><a href="#acknowledgments">Acknowledgments</a></li> -->
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

An intra city trip management application with following benifits

1. Reduce cancellation from rider and driver end.
2. Cost optimization for both rider and driver.
3. Built up on the top of the existing cab provider systems.
4. Providing better pricing and a wide range of riding options under a single platform.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* Java
* Spring Boot
* MySQL
* HTML
* CSS
* JavaScript

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Your system should have below mandatory setups
* Java 11 (minimum)
* MySQL server
* Gradle installed ([Gradle Installation Step](https://gradle.org/install/))
* Any Webserver for Frontend - Apache / Nginx etc
* Google Map API Key ([Steps to Generate](https://console.cloud.google.com/apis/credentials)) 



### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/abhishek423/travenjo.git
   ```

2. Backend Setup
  
   i) Database Setup

      - Run the MySQL server

      - Create database named <b>travenjo</b> in your SQL server 
      
      - Import the DB from <b>resource</b> folder of <b>backend</b> mentioned [here](https://github.com/abhishek423/travenjo/blob/master/backend/src/main/resources/travenjo.sql) for required sql setup in local

   ii) Copy the <b>backend</b> folder in your respected workspace
  
   iii) Run below command inside the <b>backend</b> folder to build the application in your workspace
   ```sh
   gradle build
   ```

   iv) Similarly run below command for start the application after successful build
   ```sh
   java -jar .\build\libs\travenjo-0.0.1-SNAPSHOT.jar
   ```

3. Frontend Setup

   i) Copy the <b>frontend</b> folder in any websever (e.g. Apache / Nginx) and it should work.

   ii) Please update the API key in <b>rider/book-ride.html</b> file to connect with google map API service. You can look for the script import of Google Map API and replace your key in the place <b>"Your_Key_here"</b>. You can generate an API key from [here](https://console.cloud.google.com/apis/credentials)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Please refer 
* [Wireframe](https://docs.google.com/presentation/d/1bXMIz3JP3yOKPUr2ObKw-qCrv80Y5WIdqxuimEvnQcs/edit?usp=sharing)
* [API Documentation](http://locathost:8080/swagger-ui/index.html) - We have used swagger for API documentation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Normal Ride Booking for External Cabs Service (Ola, Uber)
- [x] Split Ride for External Cabs Service (Ola, Uber)
- [x] Emergency Ride for External Cabs Service (Ola, Uber)
- [ ] Confirm trip to External Cabs Service (Ola, Uber)
- [ ] Extra fare for reaching to a rider for pickup
- [ ] Extra fare for reaching to a better location after drop off 
- [ ] Extend to inter-city trips as well
- [ ] Schedule Future Ride


See the [open issues](https://github.com/abhishek423/travenjo/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact
Owners:
* Kousik Mandal - kousik348@gmail.com
* Pradipto Chaudhury - chaudhury.pradipto@gmail.com
* Abhishek Sarkar - abhishek.sarkar423@gmail.com

Project Link: [https://github.com/abhishek423/travenjo](https://github.com/abhishek423/travenjo)

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/abhishek423/travenjo.svg?style=for-the-badge
[contributors-url]: https://github.com/abhishek423/travenjo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/abhishek423/travenjo.svg?style=for-the-badge
[forks-url]: https://github.com/abhishek423/travenjo/network/members
[stars-shield]: https://img.shields.io/github/stars/abhishek423/travenjo.svg?style=for-the-badge
[stars-url]: https://github.com/abhishek423/travenjo/stargazers
[issues-shield]: https://img.shields.io/github/issues/abhishek423/travenjo.svg?style=for-the-badge
[issues-url]: https://github.com/abhishek423/travenjo/issues
[license-shield]: https://img.shields.io/github/license/abhishek423/travenjo.svg?style=for-the-badge
[license-url]: https://github.com/abhishek423/travenjo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[java-url]: https://www.java.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
