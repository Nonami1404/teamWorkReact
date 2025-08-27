import "./Section2.css";
import "../../App.css";
import welbex_photo from './img/welbex_photo.png';
import play_video_icon from './img/play_icon.png';
import michael_backphoto from './img/michael_back.png';
import michael_photo from './img/photo_michael.png';

function Section2() {
  return (
    <div>
      <section class="second">
        <div className="second_section container">
          <h2>Давайте знакомиться</h2>
          <div className="smallpart_second">
            <div className="leftpart_second">
              <h3>
                <span>Посмотрите минутное видео</span> <br /> от основателя
                компании
              </h3>
              <div className="videopart_second">
                <img src={welbex_photo} alt="" />
                <div className="small">
                  <button>
                    <img src={play_video_icon} alt="" />
                  </button>
                  <p>
                    Посмотрите видео <br />и получите подарок
                  </p>
                </div>
              </div>
            </div>
            <div
              className="rightpart_second"
              style={{ backgroundImage: `url(${michael_backphoto})` }}
            >
              <h3>
                Михаил Доброхвалов <br /> — основатель WelbeX.
              </h3>
              <img src={michael_photo} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Section2;