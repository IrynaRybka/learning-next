import style from "../styles/Hero.module.scss"
const TheHero = () => {

    return (
        
        <div className={style.hero_container}>
        <h1 className={style.hero_tagline}>Ремонт телевізорів та підключення Т2 у місті Дніпро</h1>
        <p className={style.hero_description}>Швидко, якісно, вигідно, у Вас вдома в зручний для вас час.</p>

        <ul className={style.hero_list}>
            <li>
            <a href="tel:0637967425">(063) 796-74-25</a>
            <p>WatsApp Viber</p>
            </li>
            <li>
            <a href="tel:0669708107">(066) 970-81-07</a>
            </li>
            <li>
            <a href="tel:0673362127">(067) 336-21-27</a>
            <p>Telegram</p>
            </li>
        </ul>

       
        </div>
    )
}

export {TheHero};