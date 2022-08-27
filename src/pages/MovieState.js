//Import Images
// import athlete from "../images/athlete-small.png";
// import goodtimes from "../images/goodtimes-small.png";
import theracer from "../images/theracer-small.png";
import quizapp from "../images/quiz-app.png"
import quizapp1 from "../images/quiz-app1.png"
// import athlete2 from "../images/athlete2.png";
import newsapp from "../images/news-app.png"
import musicapp1 from "../images/music-app.png"
import musicapp2 from "../images/music-app2.png"
import goodtimes2 from "../images/good-times2.jpg";
import theracer2 from "../images/the-racer2.jpg";

export const MovieState = () => {
  return [
    {
      title: "Hiccup Music",
      mainImg: musicapp1,
      secondaryImg: musicapp2,
      url: "/project/music-app",
      link: "https://hiccupaashish.github.io/music-app/",
      codelink: "https://github.com/HiccupAashish/music-app",
      awards: [
        {
          title: "Intro",
          description:
            "This is the first application , i have build after learning React.",
        },
        {
          title: "Description",
          description:
            "I love music and for a very long time i wanted myself to make a music application for myself. ",
        },
      ],
    },
    {
      title: "Quiz Application",
      mainImg: quizapp,
      url: "/project/react-quiz",
      secondaryImg: quizapp1,
      link: "https://hiccupaashish.github.io/Aashish-React-Project/",
      codelink: "https://github.com/HiccupAashish/Aashish-React-Project",
      awards: [
        {
          title: "Intro",
          description:
            "During my bootcamp this is the first React Project that i made. We had to make a project using Javascript and API and this was my final project.",
        },
        {
          title: "Description",
          description:
            "I used API fetching in my previous project. So, i wanted to do something different in here. I made my own Databse in Github and use the link as an API to fetch the question and answers. The question are probably stupid but i wanted to make my own API and to store the game scores i have used firebase to keep all those datas.",
        },
      
      ],
    },
    {
      title: "Javascript News",
      mainImg: newsapp,
      url: "/project/news-app",
      link: "https://hiccupaashish.github.io/Javascript-API-project/",
      codelink: "https://github.com/HiccupAashish/Javascript-API-project",
      awards: [
        {
          title: "My First Javascript Project",
          description:
            "It was my first Javascript Project, where i learned how to use Javascrpt codes and the basic concepts of API fetching request.",
        },
        {
          title: "Description",
          description:
            "I used a news API from news.API platform to make this application. This application also has a favourates tab where we can like a news, so it can be saved in favourates tab for future reading.",
        },
      
      ],
    },
  
  ];
};
