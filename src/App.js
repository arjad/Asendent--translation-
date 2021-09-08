import React, {Component, Suspense} from 'react';
import {useTranslation} from "react-i18next";
import '../src/app.css';

import line from './img/line.PNG';
import m from './img/m.png';


function App()
{
  //hook
  const [t, i18n] = useTranslation('common');

  return (
    <Suspense fallback="loading">
    <div>
      <nav className="navbar bg-dark text-white">
        <h2>Translation in Different Languages</h2>
      </nav>
      <nav className="navbar bg-dark pt-2 pb-3">
        <button className="btn btn-light" onClick={() => i18n.changeLanguage('de')}>French</button>
        <button className="btn btn-light" onClick={() => i18n.changeLanguage('en')}>English</button>
        <button className="btn btn-light" onClick={() => i18n.changeLanguage('ur')}>Urdu</button>
        <button className="btn btn-light" onClick={() => i18n.changeLanguage('ch')}>Chinese</button>
      </nav>

    {/* theme started     */}
      <div className="d1">
      <div className="nav2">
          <h1>Ascendant PRO</h1>
          <ul>
              <li className="li">HOME</li>
              <li className="li">BLOG</li>
              <li className="li lif">FEATURES ^ 
              <div className="op">
                  <ul>
                      <li>Customer Typography</li><br/>
                      <li>Customer Assumption</li><br/>
                      <li>Customser Power</li><br/>
                      <li>Customer Attitude</li><br/>
                      <li>Client Payment</li><br/>
                      <li>Customer Power</li><br/>
                      <li>Customer Attitude</li><br/>
                  </ul>
              </div></li>
              <li className="li lip">PAGE TEMPLATES ^
              <div className="op2">
                  <ul>
                      <li>Customser Power</li><br/>
                      <li>Customer Attitude</li><br/>
                      <li>Client Payment</li><br/>
                      <li>Customer Power</li><br/>
                      <li>Customer Attitude</li><br/>
                  </ul>
              </div> </li>
          </ul>
          <div className="i">
              <img src={line} />
              <div className="uld">
                  <p>HOME</p>
                  <p>BLOG</p>
                  <p>FEATURES</p>
                      <pre>Customer ShortCourse</pre>
                      <pre>Our Brands</pre>
                      <pre>Main Brands</pre>
                      <pre>Our Brands</pre>
                      <pre>Main Brands</pre>
    
                  <p>PAGE TEMPLATE</p>
                  <pre>Customer ShortCourse</pre>
                  <pre>Our Brands</pre>
                  <pre>Our Brands</pre>
              </div>
          </div>
      </div>
      <br/><br/><br/><br/>
      <h1> {t('welcome', {framework:'React'})}</h1>
      <p>{t('b')}</p>
      <br/><br/><br/>
      <button>{t('btn')}</button>
  </div>
  <h1 id="take">{t('heading-about')}</h1>
  <hr id="l"/>
  <div className="containers">
    <p>{t('about-para')}</p>
    <p>{t('about-para2')}</p>
    <p>{t('about-para3')}</p>
    <p>{t('about-para4')}</p>
    <p>{t('about-para3')}</p>
  </div>


  <h1 id="k">{t('heading')}</h1>
  <hr id="l"/>
    
  <div className="d2">
      <div className="sd">
          <div className="roll"><i className="fas fa-cloud"></i> </div>
          <h2>{t('div3_1_heading')}</h2>
          <p>{t('div3_para')}</p>
      </div>
      <div className="sd">
          <div className="roll"><i className="fas fa-cloud"></i> </div>
          <h2>{t('div3_2_heading')}</h2>
          <p>{t('div3_para')}</p>
      </div>
      <div className="sd">
          <div className="roll"><i className="fas fa-cloud"></i> </div>
          <h2>{t('div3_3_heading')}</h2>
          <p>{t('div3_para')}</p>
      </div>
  </div>
    
  <div className="d3">
     <p className="container"> {t('div_para')}</p>
  </div>

  <br/><br/>
  <h1 id="take">{t('div_heading')}</h1>
  <hr id="l"/>
  <br/><br/>
  <div className="d4">
      <div className="d4s">
          <img className="img" src="https://mk0cpothemesdemokfq4.kinstacdn.com/wp-content/uploads/sites/38/2012/04/StockSnap_BCLRC8333.jpg"/>
          <div className="gd">
              <h2>{t('div_hover')}</h2>
              <p>{t('div_hover_para')} </p>
              <div className="rockr">
                  <img src={m}/>
              </div>
          </div>
      </div>
      <div className="d4s">
          <img className="img" src="https://mk0cpothemesdemokfq4.kinstacdn.com/wp-content/uploads/sites/38/2012/04/technology-792180_1280.jpg"/>
          <div className="gd">
          <h2>{t('div_hover')}</h2>
              <p>{t('div_hover_para')} </p>
            <div className="rockr">
                  <img src={m}/>
              </div>
          </div>
      </div>
      <div className="d4s">
          <img className="img" src="https://mk0cpothemesdemokfq4.kinstacdn.com/wp-content/uploads/sites/38/2012/05/background-2846221_1280.jpg"/>
          <div className="gd">
          <h2>{t('div_hover')}</h2>
              <p>{t('div_hover_para')} </p>
            <div className="rockr">
                  <img src={m}/>
              </div>
          </div>
      </div>
  </div>
  <div className="d4">
      <div className="d4s">
          <img className="img" src="https://mk0cpothemesdemokfq4.kinstacdn.com/wp-content/uploads/sites/38/2012/04/portfolio-_0002_tablet-1250410_1280.png"/>
          <div className="gd">
          <h2>{t('div_hover')}</h2>
              <p>{t('div_hover_para')} </p>
            <div className="rockr">
                  <img src={m}/>
              </div>
          </div>
      </div>
      <div className="d4s">
          <img className="img" src="https://mk0cpothemesdemokfq4.kinstacdn.com/wp-content/uploads/sites/38/2012/04/portfolio-_0000_macbook-336651_1280.png"/>
          <div className="gd">
          <h2>{t('div_hover')}</h2>
              <p>{t('div_hover_para')} </p>
            <div className="rockr">
                  <img src={m}/>
              </div>
          </div>
      </div>
      <div className="d4s">
          <img className="img" src="https://mk0cpothemesdemokfq4.kinstacdn.com/wp-content/uploads/sites/38/2012/04/office-1209640_1280-600x400.jpg"/>
          <div className="gd">
          <h2>{t('div_hover')}</h2>
              <p>{t('div_hover_para')} </p>
            <div className="rockr">
                  <img src={m}/>
              </div>
          </div>
      </div>
  </div>
  <br/><br/><br/>
<footer class="text-center text-lg-start bg-dark text-white">
  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    <div class="me-5 d-none d-lg-block text-white">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section class="text-white">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" class="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" class="text-reset">React</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Laravel</a>
          </p>
        </div>
        <div class="col-md-3 text-white col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" class="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Help</a>
          </p>
        </div>

        <div class="col-md-4 text-white col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>

  <div class="text-center text-white p-4">
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer>
    

    </div>
    
    </Suspense>
  );
}
export default App;