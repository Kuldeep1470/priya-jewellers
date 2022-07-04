// footer part is hare

class Footer extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
    

        <style>
            .site-footer {

                background: #F1BE61;





                border-top: 1px solid #ebebeb;

            }

            .site-footer .newsletter .input-group-field {
                background-color: #ffffff;
                color: #163434;
                border-color: #163434;
            }

            .site-footer .newsletter ::-webkit-input-placeholder {
                color: #163434;
            }

            .site-footer .newsletter ::-moz-placeholder {
                color: #163434;
            }

            .site-footer .newsletter :-ms-input-placeholder {
                color: #163434;
            }

            .site-footer .newsletter :-moz-placeholder {
                color: #163434;
            }

            .site-footer .newsletter .btn {
                background-color: #163434;
                border-color: #163434;
                color: #ffffff;
            }

            .site-footer .newsletter .btn:hover {
                background-color: #ffffff;
                border-color: #163434;
                color: #163434;
            }

            .site-footer.footer-06 .newsletter .btn:hover,
            .site-footer.footer-08 .newsletter .btn:hover {
                background-color: ;
                border-color: ;
                color: ;
            }

            .foot-title,
            .footer-09 .footer-newsletter .newsletter-title {
                color: #ffffff;
            }

            .footer-parallax .dropdow-mb {
                border-bottom: 1px solid #ebebeb;
            }

            .site-footer .newsletter-title {
                color: #ffffff;
            }

            .site-footer a,
            .site-footer {
                color: #163434;
            }

            .site-footer .footer-newsletter .newsletter-des {
                color: ;
            }

            .site-footer a:hover {
                color: #3c3c3c;
            }

            .site-footer .foot-link>span:before {
                background-color: #3c3c3c;
            }

            .footer-bottom {
                background-color: #163434;
                border-top: 1px solid #ebebeb;
            }

            .footer-06 .footer-bottom,
            .footer-08 .footer-bottom {
                border-top: 0;
            }

            .footer-bottom,
            .footer-bottom address,
            .footer-bottom address a {
                color: #969696;
            }

            .footer-bottom address a:hover {
                color: #969696;
            }

            .footer-06 .footer-bottom address a,
            .footer-08 .footer-bottom address a {
                color: #163434;
            }

            .footer-06 .footer-bottom address a:hover,
            .footer-08 .footer-bottom address a:hover {
                color: #3c3c3c;
            }

            .header-parallax-tpl.layout_default .footer-06 .footer-bottom address a,
            .header-parallax-tpl.layout_default .footer-06 .footer-bottom address a:hover {
                color: #969696;
            }

            .header-parallax-tpl.layout_default .footer-06 .footer-bottom {
                padding-top: 25px;
                padding-bottom: 35px;
            }

            .footer-06 .footer-top,
            .footer-08 .footer-top {
                background-color:
            }

            .footer-08 .footer-middle .location_info {
                color: ;
            }

            .footer-08 .footer-middle .column_info:before {
                background-color: #ebebeb
            }



            .footer-05 .footer-top {
                padding: 55px 0 26px
            }

            .footer-05 .footer-newsletter {
                text-align: center;
                margin-bottom: 52px
            }

            .footer-05 .newsletter-title {
                font-size: var(--font_size_plus8);
                text-transform: uppercase;
                letter-spacing: .05em;
                color: #ffffff;
                line-height: var(--font_size_plus12);
                margin-bottom: 13px
            }

            .footer-05 .newsletter-des {
                font-size: var(--font_size);
                line-height: var(--font_size_plus10);
                max-width: 850px;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 20px
            }

            .footer-05 .newsletter .input-group {
                max-width: 540px;
                margin: auto
            }

            .footer-05 .newsletter .btn,
            .footer-05 .newsletter .product-shop .payment-button button.payment-button__button,
            .product-shop .payment-button .footer-05 .newsletter button.payment-button__button,
            .footer-05 .newsletter .product-shop .groups-btn .wishlist,
            .product-shop .groups-btn .footer-05 .newsletter .wishlist,
            .footer-05 .newsletter .tabs__product-page .spr-container .spr-summary-actions-newreview,
            .tabs__product-page .spr-container .footer-05 .newsletter .spr-summary-actions-newreview,
            .footer-05 .newsletter .addresses-page .btn-edit-delete a,
            .addresses-page .btn-edit-delete .footer-05 .newsletter a {
                padding: 10px 15px 8px;
                min-width: 150px;
                max-width: 150px
            }

            .footer-05 .newsletter .input-group-field {
                padding: 9px 18px 7px;
                margin-right: 10px;
                width: -moz-calc(100% - 160px);
                width: -webkit-calc(100% - 160px);
                width: -ms-calc(100% - 160px);
                width: calc(100% - 160px)
            }

            .footer-05 .col-footer {
                margin-bottom: 25px
            }

            .footer-05 .col-footer ul li.view-all a>span:before {
                width: 100%;
                visibility: visible;
            }

            .footer-05 .location_info {
                margin-bottom: 20px;
                margin-top: 8px
            }

            .footer-05 .location_info .text {
                margin-bottom: 15px;
                display: -webkit-box;
                display: -webkit-flex;
                display: -moz-flex;
                display: -ms-flexbox;
                display: flex
            }

            .footer-05 .location_info .info-icon {
                font-size: var(--font_size_plus6);
                margin-right: 15px;
                min-width: 18px;
                color: #163434;
            }

            .footer-05 .logo-ft {
                margin-top: 3px;
                margin-bottom: 12px
            }

            .footer-05 .footer-social .groups-block {
                -webkit-box-pack: center;
                -moz-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: flex-start;
                justify-content: flex-start;
            }

            .footer-05 .footer-social .typography {
                margin-top: 20px;
            }

            .footer-05 .footer-bottom {
                padding: 23px 0 32px
            }

            .footer-05 .footer-bottom .payment-methods {
                margin-top: 9px
            }

            .footer-05 .col-footer .social-icons li {
                width: 41px;
                height: 41px;
                margin: 0 5px 5px 5px
            }

            .footer-05 .col-footer .social-icons li:first-child {
                margin-left: 0
            }

            .footer-05 .col-footer .social-icons li:last-child {
                margin-right: 0
            }

            .footer-05 .social-icons a {
                width: 40px;
                height: 40px;
                line-height: 42px;
                font-size: var(--font_size);
            }

            .footer-05 .guarantee-img {
                text-align: center;
                margin-bottom: 20px
            }

            .footer-06 .footer-top .footer-newsletter .newsletter-title {
                font-family: var(--fonts_name_2)
            }

            .footer-09 .col-footer .social-icons a {
                color: #ffffff;
                background: #163434;
            }

            @media (min-width: 768px) {
                .footer-05 .guarantee-img {
                    margin-bottom: 40px
                }
            }

            @media (max-width: 767px) {
                .site-footer .dropdow-mb {
                    border-bottom: 1px solid #163434;
                }
            }
        </style>

        <footer class="site-footer footer-09" role="contentinfo">



            <div class="row" style="margin: 10px;">






                <div class="col-footer info_store col-12 ">


                    <div class="location_info">
                        <ul>

                            <li class="text">

                                <span class="info-icon">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                </span>


                                <div class="info-text">

                                    <a href="tel:+910005555555">Phone : +91 000 555-5555</a>


                                </div>
                            </li>



                            <li class="text">

                                <span class="info-icon">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                                        role="img" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 512 512"
                                        class="svg-inline--fa fa-envelope fa-w-16 fa-2x">
                                        <path fill="currentColor"
                                            d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                                            class=""></path>
                                    </svg>
                                </span>


                                <div class="info-text">

                                    <a href="mailto:toletplus@gamil.com">Email : toletplus@gamil.com</a>

                                </div>
                            </li>

                            <br>

                            <li class="text">


                                <div class="info-text">

                                    <span> RIICO Industrial Area<br>
                                        Jaipur, Rajasthan-302022<br>
                                        India</span>

                                </div>
                            </li>

                        </ul>
                    </div>




                    <ul class="social-icons">

                        <li class="facebook">
                            <a href="https://www.facebook.com/PRIYA" title="Facebook" target="_blank">

                                <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>

                            </a>
                        </li>


                        <li class="twitter">
                            <a href="#" title="Twitter" target="_blank">
                                <i class="fa fa-twitter fa-lg" aria-hidden="true"></i>
                            </a>
                        </li>





                        <li class="instagram">
                            <a href="#" title="Instagram" target="_blank">
                                <i class="fa fa-instagram fa-lg" aria-hidden="true"></i>
                            </a>
                        </li>



                        <li class="pinterest">
                            <a href="#" title="Pinterest" target="_blank">
                                <i class="fa fa-pinterest-p fa-lg" aria-hidden="true"></i>
                            </a>
                        </li>





                        <li class="youtube">
                            <a href="#" title="YouTube" target="_blank">
                                <i class="fa fa-youtube fa-lg" aria-hidden="true"></i>
                            </a>
                        </li>




                    </ul>



                </div>



            </div>



            <div class="footer-social enable-color">
                <div class="groups-block">

                    <div class="typography">



                    </div>

                </div>
            </div>

    </div>
    </div>



    </footer>
    `
    }
    }
    
    customElements.define('my-footer', Footer)