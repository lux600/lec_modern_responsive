## Testimonials Section
- 기본 구조 
    - \<section
        - \<content-box
            - \<content-title
            - \<container
~~~
<!-- Testimonials -->
<section id="testimonials">
    <div class="content-box">

        <div class="content-title wow animated fadeInDown"
             data-wow-duration="1s" data-wow-delay=".5s">
            <h3>What Our Customers Say</h3>
            <div class="content-title-underline"></div>
        </div>


        <div class="container">
            <div class="row wow animated fadeInUp"
                 data-wow-duration="1s" data-wow-delay=".5s">
                <div class="col-md-*">
                    
                </div>
            </div>
        </div>


    </div>
</section>
~~~
- content-title 에 
    - 추가 클래스 : content-title-white 
~~~
    <div class="content-title content-title-white wow animated fadeInDown"
         data-wow-duration="1s" data-wow-delay=".5s">
        <h3>What Our Customers Say</h3>
        <div class="content-title-underline"></div>
    </div>
~~~
- container 에 
    - row 안의 animated 속성 boundInDown 으로 변경 
    - col-md-*를 col-md-12 개로 전체 크기로 변경 
~~~
    <div class="container">
        <div class="row wow animated boundInDown"
             data-wow-duration="1s" data-wow-delay=".5s">
            <div class="col-md-12">

            </div>
        </div>
    </div>
~~~        

- col 안에 이미지 넣기 
    - responsive : img-fluid
    - 이미지 원모양 : rounded-circle
        - 이미지 써클 수정 bootstrap4
            - https://getbootstrap.com/docs/4.0/migration/#images
~~~
    <div class="col-md-12">

        <div id="customers-testimonials">
            <div class="testimonial">
                <img src="./img/client/client-1.jpg" class="img-fluid rounded-circle" alt="testimonials">
            </div>
        </div>

    </div>
~~~
- blockquote 추가 : 인용문 
~~~
    <div class="col-md-12">
        <div id="customers-testimonials">
            <div class="testimonial">
                <img src="./img/client/client-1.jpg" class="img-fluid rounded-circle" alt="testimonials">
                <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </blockquote>
            </div>
        </div>
    </div>
~~~

- blockquote 아래에 추가 
~~~
    <img src="./img/client/client-1.jpg" class="img-fluid rounded-circle" alt="testimonials">
    <blockquote>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
    </blockquote>
    <div class="testimonial-author">
        <p> 
            <strong>Daniel Watrous</strong>
            <span>CEO & Founder - Google</span>
        </p>
    </divCEO> 
~~~    
- id="customers-testimonials" 에 
    - 클래스 : class="text-center" 추가 
~~~
    <div class="col-md-12">
        <div id="customers-testimonials" class="text-center">
            <div class="testimonial">
                ....
            </div>
        </div>
    </div>
~~~   

- class="testimonial"
    - 2번째 
    - 3번째 추가하기 
~~~
    <div class="testimonial">....</div>
    <div class="testimonial">
        <img src="./img/client/client-2.jpg" class="img-fluid rounded-circle" alt="testimonials">
        <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </blockquote>
        <div class="testimonial-author">
            <p>
                <strong>Johan Mathew</strong>
                <span>CEO & Founder - Facebook</span>
            </p>
        </divCEO>
    </div>
    <div class="testimonial">
        <img src="./img/client/client-3.jpg" class="img-fluid rounded-circle" alt="testimonials">
        <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </blockquote>
        <div class="testimonial-author">
            <p>
                <strong>Sara Smith</strong>
                <span>CEO & Founder - Amazon</span>
            </p>
        </divCEO>
    </div> 
~~~
- <section id="testimonials"> 아래에 
    - <div id="testimonials-cover"> 를 추가 ㄴ
~~~
<!-- Testimonials -->
<section id="testimonials">
    <div id="testimonials-cover">

        <div class="content-box">...</div>

    </div>
</section>
~~~
- id="customers-testimonials" 내에서 
    - 클래스 추가 : owl-carousel owl-theme
~~~
    <div class="col-md-12">

        <div id="customers-testimonials" class="text-center owl-carousel owl-theme">
            ....        
~~~

- 위의 연속하여
    - 아래를 추가 #customers-testimonials
~~~
/*========================================
                Testimonials
======================================== */
$(function() {
    //Carousel
    $('#customers-testimonials').owlCarousel({
        items : 1,
        autoplay : true,
        smartSpeed : 700,
        loop : true,
        autoplayHoverPause:true
    }) ;

});
~~~

## CSS
- style.css
    - testimonials-cover 추가 
~~~
.social-icon i:hover { .... }

/*========================================
                Testimonials
======================================== */
#testimonials-cover {
    background-image: url("../img/bg-testimonials.jpg");
}
~~~
- id="testimonials-cover" 내에 
    - 클래스 추가 : class="bg-parallax"
~~~
<!-- Testimonials -->
<section id="testimonials">
    <div id="testimonials-cover" class="bg-parallax">
~~~

- 브라우저에서 rgba 의 a값을 직접 변경해서 보여주기 
~~~
#testimonials-cover { ... }

#testimonials .content-box {
    background-color: rgba(0,0,0,0.1);
}
~~~

- 주석 Content (Generic) 아래에 
    - .content-title-white h3 { 에 타이틀을 흰색으로 
~~~
/*========================================
                Content (Generic)
======================================== */
.content-box {.... }
.content-title h3 { .... }
.content-title-white h3 {
    color: #fff;
}
.content-title-underline { ....}
~~~

- 위아래 패딩 넣기 
~~~
#testimonials .content-box { .... }

#customers-testimonials {
    padding: 50px 0;
}
~~~

- 이미지 중앙의 작은 사이즈 
    - margin:0 auto 0 auto; 좌,우를 auto 로 하여 중앙에 위치 
~~~
#customers-testimonials { .... }

.testimonial img {
    max-width: 120px;
    margin:0 auto 0 auto;
}
~~~
- blockquote : 글씨를 이태릭체로 쓰기 
~~~
.testimonial img { ... }
.testimonial blockquote {
    border: 0;
    font-family: Georgia, sans-serif;
    font-style: italic;
    color : #fff ;
    padding: 6px 150px ;
}
~~~

- blockquote 글씨를 흰색으로 
~~~
.testimonial blockquote { ... }

.testimonial blockquote p {
    color: #fff;
}
~~~
- blockquote 마다 
    - 클래스 추가 : class="text-center"
~~~
<blockquote class="text-center">
~~~

- content:"\201C" 시작  큰 따옴표 
- content:"\201D" 끝 큰 따옴표 
~~~
.testimonial blockquote p { ... }

.testimonial blockquote::before {
    content:"\201C"
}
.testimonial blockquote::after {
    content:"\201D"
}
~~~

- 따옴표의 크기를 크게 
~~~
.testimonial blockquote p { .... }

.testimonial blockquote::before,
.testimonial blockquote::after {
    font-size: 80px;
    font-style: normal;
    line-height: 1;
    width: 30px;
    height: 30px;
}
.testimonial blockquote::before { ... }
~~~

- .testimonial blockquote 에 
    - position: relative; 추가 
- .testimonial blockquote::before, .testimonial blockquote::after {
    - position: absolute; 추가   
~~~
...

.testimonial blockquote {
    border: 0;
    font-family: Georgia, sans-serif;
    font-style: italic;
    color : #fff ;
    padding: 6px 150px ;
    position: relative;
}

....

.testimonial blockquote::before,
.testimonial blockquote::after {
    font-size: 80px;
    font-style: normal;
    line-height: 1;
    width: 30px;
    height: 30px;
    position: absolute;
}

...
~~~

- .testimonial blockquote::before
    - top, left 추가 
- testimonial blockquote::after {
    - bottom, right 추가 
- 따옴표가 좌,우로 가게 하기         
~~~
.testimonial blockquote::before {
    content:"\201C" ;
    top :0;
    left:0;
}
.testimonial blockquote::after {
    content:"\201D" ;
    bottom:0;
    right:0;
}
~~~
- left:100px; 왼쪽 따옴표가 좀 더 붙게 
- right:100px; 오른쪽 따옴표가 좀 더 붙게 
~~~
.testimonial blockquote::before {
    content:"\201C" ;
    top :0;
    left:100px;
}
.testimonial blockquote::after {
    content:"\201D" ;
    bottom:0;
    right:100px;
}
~~~
- author 를 흰색으로 
~~~
.testimonial blockquote::after { ... }

.testimonial-author p {
    color: #fff ;
    font-size:17px;
}
~~~
- block 처리해서 1줄씩 만들기 
~~~
.testimonial-author p { ... } 

.testimonial-author p strong {
    display: block;
}
~~~