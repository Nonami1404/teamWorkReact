import "./Section3.css";
import "../../App.css";
import functional from "./img/functional.png";
import teach from "./img/teach.png";
import sells from "./img/sells.png";

function Section3() {
  return (
    <div>
      <section className="third">
        <div className="container">
          <div className="firstpart_third">
            <h2>О нас</h2>
            <h5>
              WelbeX — крупный интегратор <br />
              AmoCRM <span>в Росcии и ещё 8 странах</span>
            </h5>
            <ul>
              <li>
                <p>11</p>
                <span>
                  лет в програмировании <br />
                  и автоматизации
                </span>
              </li>
              <li>
                <p>30</p>
                <span>
                  сотрудников <br />
                  в компании
                </span>
              </li>
              <li>
                <p>+350</p>
                <span>
                  внедрений <br />
                  АмоCRM
                </span>
              </li>
            </ul>
          </div>
          <div className="secondpart_third">
            <h2>Мы решаем проблемы</h2>
            <div className="main">
              <div className="left">
                <h5>
                  <span>
                    99% компаний откладывают <br />
                    внедрение AmoCRM
                  </span>{" "}
                  или не доводят
                  <br /> систему до результата
                </h5>
                <p>Компания работает без AmoCRM</p>
                <ul className="ul_third">
                  <li>
                    <div className="divider"></div>Нет времени <br />
                    на самостоятельное изучение <br />
                    и внедрение CRM системы.
                  </li>
                  <li>
                    <div className="divider"></div>Отсутствие понимания <br />
                    для чего надо внедрять CRM <br />
                    систему. Какую пользу это <br />
                    принесёт бизнесу.
                  </li>
                  <li>
                    <div className="divider"></div>Страх, что вложенные средства
                    <br />
                    не окупятся.
                  </li>
                </ul>
              </div>
              <div className="right left">
                <h5>
                  Всё это приводит к самой главной <br />
                  проблеме — потере денег.
                </h5>
                <p>AmoCRM не даёт результата</p>
                <ul className="ul_third">
                  <li>
                    <div className="divider"></div>
                    Работа отдела продаж <br />
                    не является системной. Отдел <br />
                    является чёрным ящиком, <br />
                    работу которого нельзя <br />
                    спрогнозировать.
                  </li>
                  <li>
                    <div className="divider"></div>
                    Невозможно определить, <br />
                    какие сделки являются <br />
                    самыми прибыльными <br />
                    для компании, а какие <br />
                    не приносят результата.
                  </li>
                  <li>
                    <div className="divider"></div>
                    Информация о клиентах <br />
                    хранится лично у менеджеров, <br />
                    что тормозит проект, <br />
                    если сотрудник не на месте. <br />
                    Также это даёт возможность <br />
                    увести клиентов из компании.
                  </li>
                  <li>
                    <div className="divider"></div>
                    Сложно оценить <br />
                    эффективность работы <br />
                    отдельного сотрудника.
                  </li>
                </ul>
              </div>
            </div>
            <div className="end">
              <h4>
                После <span>бесплатного аудита</span> мы
              </h4>
              <ul>
                <li>
                  <img src={functional} alt="" />
                  <h5>Продумаем функционал</h5>
                  <p>
                    Составим ТЗ с продуманным <br />
                    функционалом, что сократит ваш <br />
                    бюджет в будущем.
                  </p>
                </li>
                <li>
                  <img src={teach} alt="" />
                  <h5>Обучим до результата</h5>
                  <p>
                    Составим подробную инструкцию
                    <br /> по работе с решениями. Обучим <br />
                    одного из ваших сотрудников.
                  </p>
                </li>
                <li>
                  <img src={sells} alt="" />
                  <h5>Настроим продажи на максимум</h5>
                  <p>
                    Сделаем работу отдела системной <br />
                    и легко прогнозируемой,
                    <br /> а сотрудников эффективными.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section3;
