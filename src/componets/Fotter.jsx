import './Fotter.css';

import AppStore from '../assets/appStore.png';
import GoogStore from '../assets/googleStore.png';
export function Fotter() {
    return (
        <>
            <div className='fotter-wrapper'>

                <div className='fotter-top-section'>
                    <div className='bk info'>

                         <div className="title">BK<sup>®</sup>info</div>

                        <ul class="footer__list u_cursor_pointer">
                            <li class="footer__item" role="presentation"> About BK<sup>® </sup> </li>
                            <li class="footer__item" role="presentation">Fresh Taste </li>
                            <li class="footer__item" role="presentation">Investor Relations</li>
                            <li class="footer__item" role="presentation"> Fssai</li>
                        </ul>
                    </div>

                    <div className='contact info'>
                       <div className='title'>contact</div>
                        <ul class="footer__list u_cursor_pointer">
                            <li class="footer__item" role="presentation"> FAQ's &amp; Support </li>
                            <li class="footer__item"> Write to us : </li>
                            <li><a class="footer__item-key u_text_decoration" href="mailto:careers@burgerking.in" rel="noopener noreferrer">Careers</a></li>
                            <li><p class="footer__item-key u_text_decoration">Customer Care</p>
                            </li><li><a class="footer__item-key u_text_decoration" href="mailto:scmsupport@burgerking.in" rel="noopener noreferrer"> Supply Chain Queries </a></li>
                            <li><a class="footer__item-key u_text_decoration" href="mailto:investor@burgerking.in" rel="noopener noreferrer"> Investor Relations </a></li>
                            <li><p class="footer__item-key u_text_decoration"> Franchising </p></li>
                        </ul>
                    </div>

                    <div className='bk-cares info'>

                        <div className='title'>BK<sup>®</sup>cares</div>
                        
                        <ul class="footer__list u_cursor_pointer">
                            <li> <a href="https://d1rgpf387mknul.cloudfront.net/1777895813pdfNI04May26pdf" rel="noopener noreferrer" target="_blank" class="u_text_decoration footer__item">Nutrition Information </a></li>
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
                            <li class="footer__list-item u_cursor_pointer"><a href="https://apps.apple.com/us/app/burger-king-india/id1516627543" target="_blank" rel="noopener noreferrer">
                            <img src={AppStore} alt="Apple store" width="128" height="38" role="presentation" /></a>
                            </li>
                            <li class="u_cursor_pointer"><a href="https://play.google.com/store/apps/details?id=in.burgerking.android" target="_blank" rel="noopener noreferrer"> 
                            <img src={GoogStore} alt="play store" width="128" height="38" role="presentation" /></a>
                            </li>
                        </ul>

                    </div>

                </div>
                <div className='fotter-buttom-section'>
                 
                </div>
            </div>
        </>
    );
}