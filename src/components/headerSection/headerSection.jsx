import './headerSection.css';
import backgroundImage from "./img/background.png";
import logo from "./icon/logo_welbex.svg";
import telegram from "./icon/telegram.svg";
import call from "./icon/call.svg";
import whatsApp from "./icon/whatsapp.svg";



function HeaderSection(){
    return(
        <div>
            <div className="section">
                <div className="header_wrapper">
                    <div className="right">
                        <div className="navLogo">
                            <div className="icon_wrapper">
                                <img src={logo} alt="" />
                            </div>
                            <ul>
                                <li><a href="">Услуги</a></li>
                                <li><a href="">Виджеты</a></li>
                                <li><a href="">Интеграции</a></li>
                                <li><a href="">Кейсы</a></li>
                                <li><a href="">Сертификаты</a></li>
                            </ul>
                        </div>
                        <div className="left">
                            <h2>+7 495 471-41-63</h2>
                            <div className="logoWrapper">
                                <a href=""><img src={telegram} alt="" /></a>
                                <a href=""><img src={call} alt="" /></a>
                                <a href=""><img src={whatsApp} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <span>крупный интегратор AmoCRM в Росcии и ещё 8 странах</span>
                </div>
                <div className="Section1">
                    <div className="rightPartInSection1">
                        <h1>Зарабатывайте больше <div className="flameColorText">с AmoCRM.</div></h1>
                        <p>Развиваем и контролируем продажи за вас</p>
                    </div>
                    <div className="leftPartInSection2">
                        <h2>Вместе с  <div className="flameColorText">бесплатной консультацией</div> мы дарим:</h2>
                        <div className="miniCardWrapperInSection1">
                            <div className="miniCard">
                                <div className="title">Виджеты</div>
                                <div className="simpleText">30 готовых решений</div>
                            </div>
                            <div className="miniCard">
                                <div className="title">Dashboard</div>
                                <div className="simpleText">с показателям вашего бизнеса</div>
                            </div>
                            <div className="miniCard">
                                <div className="title">Skype Аудит</div>
                                <div className="simpleText">отдела продажи CRM системы</div>
                            </div>
                            <div className="miniCard">
                                <div className="title">35 дней</div>
                                <div className="simpleText">использования AmoCRM</div>
                            </div>
                        </div>
                        <button className="getConsultation">Получить консультацию</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
};
export default HeaderSection;