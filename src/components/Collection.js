import Link from "next/link";
import { useEffect } from "react";

const Collection = () => {
  useEffect(() => {
    const collection = document.querySelector(".fn_cs_collection");
    var items = collection.querySelectorAll(".item");
    var itemsLength = items.length;
    setInterval(function () {
      var numberOne = Math.floor(Math.random() * itemsLength);
      var numberTwo = Math.floor(Math.random() * itemsLength);

      while (numberTwo === numberOne) {
        numberTwo = Math.floor(Math.random() * itemsLength);
      }
      var firstDiv = items[numberOne];
      var secondDiv = items[numberTwo];
      var firstImage = firstDiv.querySelector("input").value;
      var secondImage = secondDiv.querySelector("input").value;
      firstDiv.classList.add("ready");
      secondDiv.classList.add("ready");
      // console.log(firstDiv.querySelector("input").value == firstDiv);
      setTimeout(function () {
        // console.log(secondDiv.querySelector("input").value == firstDiv);
        // firstDiv.querySelector("input").value == secondImage;
        // firstDiv.querySelector(".abs_img").style.backgroundImage =
        //   "url(" + secondImage + ")";
        // // secondDiv.querySelector("input").val(firstImage);
        // secondDiv.querySelector("input").value == firstDiv;
        // console.log(secondDiv.querySelector("input").value);
        // secondDiv.querySelector(".abs_img").style.backgroundImage =
        //   "url(" + firstImage + ")";

        firstDiv.classList.remove("ready");
        secondDiv.classList.remove("ready");
      }, 500);
    }, 2000);
  }, []);

  return (
    <section id="collection">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Team Members"
          data-align="center"
        >
          Team Members
        </h3>
        <div className="fn_cs_collection">
          <div className="collection_top">
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/2.jpg"
                  />
                  <img src="/img/2.jpg" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/2.jpg" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/3.png"
                  />
                  <img src="/img/3.png" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/3.png"/>
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/3.png"
                  />
                  <img src="/img/3.png" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/3.png" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/3.png"
                  />
                  <img src="/img/3.png" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/3.png" />
            </div>
          </div>
          <div className="collection_bottom">
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/3.png"
                  />
                  <img src="/img/3.png" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/3.png" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/3.png"
                  />
                  <img src="/img/3.png" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/3.png" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/3.png"
                  />
                  <img src="/img/3.png" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/3.png" />
            </div>
            <div className="item">
              <div className="item_in">
                <div className="img">
                  <div
                    className="abs_img"
                    data-bg-img="/img/3.png"
                  />
                  <img src="/img/3.png" alt="" />
                </div>
              </div>
              <input type="hidden" defaultValue="/img/3.png" />
            </div>
          </div>
        </div>
        <div className="fn_cs_desc">
          <p>
          Our team members at VIT VR Club are a fusion of tech wizards, creative minds, and passionate VR enthusiasts, all united to redefine the virtual experience." 🌟🔮🚀
          </p>
          {/* <Link href="/collection"> */}
          <Link href="/">

            <a className="metaportal_fn_button">
              <span>View All Team Members</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Collection;
