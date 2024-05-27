/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

export const RigelPage = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-6 items mt-0 interior theaters residential">
              <div className="section-head mb-0">
                <h3>Mekanlar</h3>
              </div>
            </div>
            <Link href="/rigel/nightViews">
              <div className="col-lg-6 items theaters">
                <div className="item">
                  <div className="img">
                    <img src="/assets/img/works/2.jpg" alt="" />
                  </div>
                  <div className="cont vis">
                    <h5>
                      <Link href="/rigel/nightViews">Gece Görünümleri</Link>
                    </h5>
                    <span>Architecture</span>
                    <span>Modern</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/rigel/dayViews">
              <div className="col-lg-6 items residential interior">
                <div className="item">
                  <div className="img">
                    <img src="/assets/img/works/1.jpg" alt="" />
                  </div>
                  <div className="cont vis">
                    <h5>
                      <Link href="/rigel/dayViews">Gündüz Görünümleri</Link>
                    </h5>
                    <span>Architecture</span>
                    <span>Modern</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/rigel/interior">
              <div className="col-lg-6 items interior">
                <div className="item">
                  <div className="img">
                    <img src="/assets/img/works/5.jpg" alt="" />
                  </div>
                  <div className="cont vis">
                    <h5>
                      <Link href="/rigel/interior">İç Mekan</Link>
                    </h5>
                    <span>Architecture</span>
                    <span>Modern</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/rigel/activities">
              <div className="col-lg-6 items residential">
                <div className="item">
                  <div className="img">
                    <img src="/assets/img/works/3.jpg" alt="" />
                  </div>
                  <div className="cont vis">
                    <h5>
                      <Link href="/rigel/activities">Dış Mekan</Link>
                    </h5>
                    <span>Architecture</span>
                    <span>Modern</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};