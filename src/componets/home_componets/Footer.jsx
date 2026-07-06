import './Footer.css';

import AppStore from '../../assets/appStore.png';
import GoogStore from '../../assets/googleStore.png';

import BKLogo from '../../assets/fotter_bk_logo.png';

import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Twitter from '../../assets/twitter.svg';
import YouTub from '../../assets/youtube.svg';

import { NavLink } from 'react-router-dom';
export function Footer() {
    return (
        <>
            <div className='fotter-wrapper'>

                <div className='fotter-top-section'>
                    
                    <div className='bk info'>
                        <div className="title">BK<sup>®</sup>info</div>
                        <ul className="footer__list">
                            <li className="footer"><NavLink className='link'>About BK<sup>®</sup> </NavLink></li>
                            <li className="footer"><NavLink className='link'>Fresh Taste</NavLink></li>
                            <li className="footer"><NavLink className='link'>Investor Relations</NavLink></li>
                            <li className="footer"><NavLink className='link'>Fssai</NavLink> </li>
                        </ul>
                    </div>

                    <div className='contact info'>
                        <div className='title'>contact</div>
                        <ul className="footer__list">
                            <li className="footer"><NavLink className='link'>FAQ's &amp; Support</NavLink> </li>
                            <li className="footer"> Write to us : </li>
                            <li className="footer" ><a href="mailto:careers@burgerking.in">Careers</a></li>
                            <li className="footer" ><p className="feedback form">Customer Care</p></li>
                            <li className="footer"><a href="mailto:scmsupport@burgerking.in"> Supply Chain Queries </a></li>
                            <li className="footer"><a href="mailto:investor@burgerking.in" > Investor Relations </a></li>
                            <li class="footer"><NavLink className='link' > Franchising</NavLink></li>
                        </ul>
                    </div>

                    <div className='bk-cares info'>
                        <div className='title'>BK<sup>®</sup>cares</div>
                        <ul class="footer__list">
                            <li className='footer'> <a href="https://d1rgpf387mknul.cloudfront.net/1777895813pdfNI04May26pdf" target="_blank" className="u_text">Nutrition Information </a></li>
                            <li class="footer__item" role="presentation"> Creating Brighter Futures</li>
                            <li class="footer__item" role="presentation"> Trust &amp; Taste </li>
                            <li class="footer__item" role="presentation"> COVID-19 Safety </li>
                        </ul>
                    </div>

                    <div className='legal info'>
                        <div className='title'>legal</div>
                        <ul class="footer__list u_cursor_pointer">
                            <li class="footer__item" role="presentation"> Terms &amp; Conditions </li>
                            <li class="footer__item" role="presentation"> Privacy Policy </li>
                            <li class="footer__item" role="presentation"> Promotional T &amp; C </li>
                            <li class="footer__item" role="presentation"><a rel="noopener noreferrer" target="_blank" href="/pdf-viewer?url=https%3A%2F%2Fd1rgpf387mknul.cloudfront.net%2Fcompliance%2Fform_5a_epfo.pdf"> Compliance </a></li>
                        </ul>
                    </div>


                    <div className='app-stores info'>
                        <div className='title'>Download our app</div>
                        <ul class="footer__list u_display_flex">
                            <li class="footer__list-item u_cursor_pointer"><a href="https://apps.apple.com/us/app/burger-king-india/id1516627543" target="_blank" >
                                <img src={AppStore} alt="Apple store" width="128" height="38" role="presentation" /></a>
                            </li>
                            <li class="u_cursor_pointer"><a href="https://play.google.com/store/apps/details?id=in.burgerking.android" target="_blank">
                                <img src={GoogStore} alt="play store" width="128" height="38" role="presentation" /></a>
                            </li>
                        </ul>
                    </div>
                    
                </div>

                <div className='fotter_divider'><hr /></div>
                     <div className='fotter-buttom-section'>
                          <div className='fotterbk logo'>
                               <img src={BKLogo} alt="logo" width={50} height={50} />
                          </div>
                          <div className="footer__copyright">
                               <p>TM &amp; © 2026 BURGER KING COMPANY LLC . All Rights Reserved.</p>
                         </div>
                    <div className='social media'>
                        <img src={Facebook} alt="facebook-logo" />
                        <img src={Instagram} alt="instagram-logo" />
                        <img src={Twitter} alt="twitter-logo" />
                        <img src={YouTub} alt=" youtube-log" />
                    </div>

                </div>
                
            </div>
        </>
    );
}
