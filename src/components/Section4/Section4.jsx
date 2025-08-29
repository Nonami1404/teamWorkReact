import "./Section4.css";
import "../../App.css";
import PhoneInput from "../PhoneInput/PhoneInput";
import polyhedron from "./img/Polyhedron.svg";
import discount from './img/discount.png';
import widget from './img/widget.png';

function Section4() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="first_part_four">
            <h2>Бесплатный аудит</h2>
            <div className="main">
              <div className="left">
                <h5>
                  Закажите <br />
                  <span>
                    бесплатный скайп-аудит <br />
                    отдела продаж
                  </span>
                </h5>
                <p>
                  И получите предложение <br /> по решению вашей задачи
                </p>
              </div>
              <div className="right">
                <form action="">
                  <PhoneInput />
                  <div className="btn">
                    <button>Заказать аудит</button>
                    <p>
                      Нажимая «Заказать аудит», я даю согласие <br />
                      на 
                      <a href="">обработку персональных данных</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="secondpart_four">
            <h2>Расчёт стоимости</h2>

            <div className="main">
              <div className="left">
                <h4>
                  Ответьте на 4 вопроса <br />и получите
                  <span>расчёт стоимости внедрения AmoCRM </span>
                </h4>
                <p>И сэкономьте 80% своего времени.</p>
                <img src={polyhedron} alt="" />
              </div>

              <div className="right">
                <h5>
                  При заказе с сайта вы получите <br />
                  4 бонуса от компании:
                </h5>
                <div className="ulpart">
                  <ul>
                    <li>
                      <span className="divider"></span>
                      Аудит с лучшим экспертом компании
                    </li>
                    <li>
                      <span className="divider"></span>
                      30 виджетов
                    </li>
                    <li>
                      <span className="divider"></span>
                      Dashboard с показателями
                    </li>
                    <li>
                      <span className="divider"></span>35 дней AmoCRM
                    </li>
                  </ul>
                </div>
                <div className="questions">
                  <div className="first">
                    <p>1. Пользуетесь amoCRM?</p>
                    <div className="btns">
                      <button className="active">Нет, планирую</button>
                      <button className="passive">Да, меньше года</button>
                      <button className="passive">Да, 1-3 года</button>
                      <button className="passive">Да, более 3-х лет</button>
                    </div>
                  </div>
                  <div className="secondq">
                    <p>2. Сколько менеджеров у вас в штате?</p>
                    <div className="btns">
                      <button className="active">1-3</button>
                      <button className="passive">4-10</button>
                      <button className="passive">11-20</button>
                      <button className="passive">Более 20</button>
                    </div>
                  </div>
                  <div className="third">
                    <p>3. Пользуетесь виджетами?</p>
                    <div className="btns">
                      <button className="active">Нет</button>
                      <button className="passive">Да, 1-3 виджета</button>
                      <button className="passive">Да, 4-8 виджетов</button>
                      <button className="passive">Да, более 8 виджетов</button>
                    </div>
                  </div>
                  <div className="forth">
                    <p>4. Выберите бонус, который хотите получить</p>
                    <div className="btns">
                      <button className="active"><img src={widget} alt="" />30 виджетов</button>
                      <button className="passive"><img src={discount} alt="" /> 20% на доработку AmoCRM</button>
                    </div>
                  </div>
                </div>

                <PhoneInput />
                <div className="btn">
                  <button>Получить расчёт</button>
                  <p>
                    Нажимая «Получить расчёт», я даю согласие <br />
                    на 
                    <a href="">обработку персональных данных</a>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section4;
