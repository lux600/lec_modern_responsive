## Contact Section 
- footer 태그 추가 
~~~
<footer>
    <div id="contact">
        
    </div>
</footer>
~~~
- 2개의 col 만들기 
~~~
<footer>
    <div id="contact">

        <div class="container">
            <div class="row">

                <div class="col-md-6">
                    Left Side Contact
                </div>

                <div class="col-md-6">
                    Right Side Contact
                </div>

            </div>
        </div>

    </div>
</footer>
~~~

- col-md-6
    - left side 
        - social-list 는 team 에서 복사 
            - icon-gray 를 icon-white 로 바꾼다 
~~~
    <div class="col-md-6">

        <div id="contact-left">
            <h3>ITCOOP</h3>
            <p>
                We believe in <strong>Simple</strong>, <strong>Clean</strong> &
                <strong>Modern</strong> Design Standards
                with responsive Approach.
                Browse the amazing work of our company.
            </p>
            <div id="contact-info">
                <address>
                    <strong>Headquarters:</strong><br>
                    <p>
                        221 Jockey Hollow, Suite 600<br>
                        Smithtown, NY 11787
                    </p>
                </address>
                <div id="phone-fax-email">
                    <p>
                        <strong>Phone:</strong><span>(91) 8974 56984</span><br>
                        <strong>Fax:</strong><span>(91) 8974 1234</span><br>
                        <strong>Email:</strong><span>info@itcoop.co.kr</span><br>
                    </p>
                </div>
                <ul class="social-list">
                    <li><a href="#" class="social-icon icon-white"><i class="fa fa-facebook"></i> </a> </li>
                    <li><a href="#" class="social-icon icon-white"><i class="fa fa-twitter"></i> </a> </li>
                    <li><a href="#" class="social-icon icon-white"><i class="fa fa-youtube-play"></i></a></li>
                    <li><a href="#" class="social-icon icon-white"><i class="fa fa-google-plus"></i> </a></li>
                </ul>


            </div>
        </div>


    </div>
~~~     

- side right 
~~~
    <div class="col-md-6">

        <div id="contact-right">

            <h3>Contact Us</h3>
            <form action="#">

                <input type="text" name="full-name" placeholder="Full Name" class="form-control">
                <input type="text" name="email" placeholder="Email Address" class="form-control">
                <textarea rows="5" name="message" placeholder="Message..." class="form-control"></textarea>

                <div id="send-btn">
                    <a class="btn btn-lg btn-general btn-white" href="#" role="button">SEND</a>
                </div>

            </form>

        </div>


    </div>   
~~~    
- /css/style.css
    - Contact 주석 추가  
        - 태그 footer 
~~~
.client { ... }

/*========================================
                Contact
======================================== */
footer {
    
}
~~~
- footer 태그 
~~~
footer {
    background-color: #5b6269;
    padding-top: 30px;
    border-top : 5px solid rgba(0,0,0, 0.1);
}
~~~

- <div id="contact-info"> 안에 있던 social-list를 
    - 밖으로 빼기 
    - <ul class="social-list">
~~~
    <div id="contact-info"> ... </div>
    <ul class="social-list">
        <li><a href="#" class="social-icon icon-white"><i class="fa fa-facebook"></i> </a> </li>
        <li><a href="#" class="social-icon icon-white"><i class="fa fa-twitter"></i> </a> </li>
        <li><a href="#" class="social-icon icon-white"><i class="fa fa-youtube-play"></i> </a>
        </li>
        <li><a href="#" class="social-icon icon-white"><i class="fa fa-google-plus"></i> </a>
        </li>
    </ul>
~~~

- left side 
    - css 설정 
~~~
footer { ... }

#contact-left h3 {
    color: #fff;
    font-size : 27px;
    font-weight: 700;
}
#contact-left p {
    color: #fff;
    margin-bottom: 30px;
}
#contact-info {
    background-image: url("../img/world-map.png");
    background-repeat: no-repeat;
    background-size: contain;
}
address {
    color : #fff ;
}
address strong,
#phone-fax-email strong {
    letter-spacing: 1px;
}
~~~ 

- icon-whie i 설정 
    - icon 만 모아놓은 곳 
~~~
.icon-gray i{ ... }

.icon-white i {
    color: #fff ;
}
.social-icon i:hover { ... }
~~~
- \#contact-left h3 에 
    - \#contact-right h3 - title 오른쪽 설정도 같이 함 
~~~
#contact-left h3,
#contact-right h3{
    color: #fff;
    font-size : 27px;
    font-weight: 700;
}
~~~   

- side right css 
~~~
form {
    margin-bottom: 20px;
}
form .form-control {
    background: transparent;
    border-radius: 0 ;
    border-color: #fff;
    font-size: 17px;
    font-weight: 300;
    padding: 8px 16px;
    margin-bottom: 20px;
    color: #fff;
}
~~~
