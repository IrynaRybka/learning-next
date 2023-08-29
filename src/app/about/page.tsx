import Image from "next/image";
import master from "../images/img/master.jpg";
import style from "./About.module.scss";

const About = () => {
  return (
    <section className={style.about}>
      <h1>Про мене</h1>
      <Image src={master} alt="Володимир" width={240}></Image>
      <h2>Майстер Володимир</h2>
      <p>
        Надаю послуги з ремонту телевізорів та встановленння Т2. Я досвідчений
        телемастер з досвідом понад 15 років. Працюю з усіма марками телевізорів
        і можу усунути будь-які несправності. Я використовую сучасне обладнання
        та інструменти, щоб забезпечити якісний ремонт у найкоротші терміни.
      </p>
      <h2>Ви можете мені довіряти тому що:</h2>
      <ul>
        <li><p></p></li>
      </ul>
    </section>
  );
};

export default About;
