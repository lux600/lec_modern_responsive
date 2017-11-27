## Team Section 
- Team 추가 
~~~
<!-- Work-->
<section id="work">...</section>

<!-- Team -->
<section id="team">
    
    <div class="content-box">
        
    </div>
    
    <div class="container">
        
    </div>
    
</section>
~~~
- content-box 클래스 정리 
~~~
    <div class="content-box">
        <div class="content-title wow animated fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
            <h3>Our Team</h3>
            <div class="content-title-underline"></div>
        </div>
    </div>
~~~
- container 클래스 정리 
~~~
    <div class="container">
        <div class="row wow animated fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
            <div class="col-md-12">
                
            </div>
        </div>
    </div>
~~~

- 팀 이미지 추가하기 
~~~
    <div class="container">
        <div class="row wow animated fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
            <div class="col-md-12">

                <div id="team-members">
                    <div class="team-member">
                        <img src="./img/team/team-1.jpg" class="img-fluid" alt="team member">
                    </div>
                </div>

            </div>
        </div>
    </div>
~~~

- member 기본 이미지 상세내역 
~~~
    <div class="col-md-12">

        <div id="team-members">
        
            <div class="team-member">
                <img src="./img/team/team-1.jpg" class="img-fluid" alt="team member">
                <div class="team-member-info text-center">
                    <h4 class="team-member-name">Daniel Watrous</h4>
                    <h4 class="team-member-designation">CEO</h4>
                    <ul class="social-list">
                        <li><a href="#" class="social-icon icon-gray"><i class="fa fa-facebook"></i> </a> </li>
                        <li><a href="#" class="social-icon icon-gray"><i class="fa fa-twitter"></i> </a> </li>
                        <li><a href="#" class="social-icon icon-gray"><i class="fa fa-google"></i> </a> </li>
                    </ul>
                </div>
            </div>
            
        </div>

    </div>
~~~

- 5명의 팀 멤버 리스트 
~~~
    <div id="team-members">

        <div class="team-member">
            <img src="./img/team/team-1.jpg" class="img-fluid" alt="team member">
            <div class="team-member-info text-center">
                <h4 class="team-member-name">Daniel Watrous</h4>
                <h4 class="team-member-designation">CEO</h4>
                <ul class="social-list">
                    <li><a href="#" class="social-icon icon-gray"><i class="fa fa-facebook"></i> </a> </li>
                    <li><a href="#" class="social-icon icon-gray"><i class="fa fa-twitter"></i> </a> </li>
                    <li><a href="#" class="social-icon icon-gray"><i class="fa fa-google"></i> </a> </li>
                </ul>
            </div>
        </div>

        <div class="team-member">
            <img src="./img/team/team-2.jpg" class="img-fluid" alt="team member">
            <div class="team-member-info text-center">
                <h4 class="team-member-name">Sara Smith</h4>
                <h4 class="team-member-designation">Co-Founder</h4>
                <ul class="social-list">
                    <li><a href="#" class="social-icon icon-gray"><i class="fa fa-facebook"></i> </a> </li>
                    <li><a href="#" class="social-icon icon-gray"><i class="fa fa-twitter"></i> </a> </li>
                    <li><a href="#" class="social-icon icon-gray"><i class="fa fa-google"></i> </a> </li>
                </ul>
            </div>
        </div>

        <div class="team-member">
            <img src="./img/team/team-3.jpg" class="img-fluid" alt="team member">
            <div class="team-member-info text-center">
                <h4 class="team-member-name">Steve Mike</h4>
                <h4 class="team-member-designation">Sr. Developer</h4>
                <ul class="social-list">
                    <li><a href="#" class="social-icon icon-gray"><i class="fa fa-facebook"></i> </a> </li>
                    <li><a href="#" class="social-icon icon-gray"><i class="fa fa-twitter"></i> </a> </li>
                    <li><a href="#" class="social-icon icon-gray"><i class="fa fa-google"></i> </a> </li>
                </ul>
            </div>
        </div>

        <div class="team-member">
            <img src="./img/team/team-4.jpg" class="img-fluid" alt="team member">
            <div class="team-member-info text-center">
                <h4 class="team-member-name">Rober Hinary</h4>
                <h4 class="team-member-designation">Sr. Designer</h4>
                <ul class="social-list">
                    <li><a href="#" class="social-icon icon-gray"><i class="fa fa-facebook"></i> </a> </li>
                    <li><a href="#" class="social-icon icon-gray"><i class="fa fa-twitter"></i> </a> </li>
                    <li><a href="#" class="social-icon icon-gray"><i class="fa fa-google"></i> </a> </li>
                </ul>
            </div>
        </div>

         <div class="team-member">
            <img src="./img/team/team-5.jpg" class="img-fluid" alt="team member">
            <div class="team-member-info text-center">
                <h4 class="team-member-name">Mike Tera</h4>
                <h4 class="team-member-designation">Sales</h4>
                <ul class="social-list">
                    <li><a href="#" class="social-icon icon-gray"><i class="fa fa-facebook"></i> </a> </li>
                    <li><a href="#" class="social-icon icon-gray"><i class="fa fa-twitter"></i> </a> </li>
                    <li><a href="#" class="social-icon icon-gray"><i class="fa fa-google"></i> </a> </li>
                </ul>
            </div>
        </div>


    </div>
~~~    
- Carousel 
    - http://owlcarousel2.github.io/OwlCarousel2/
        - 오른쪽 메뉴 : Demo
            - Basic 
        - 오른쪽 메뉴 : download 
~~~
OwlCarousel
    /dist/
        owl.carousel.min.js
    /dist/
        assets/
            owl.carousel.min.css 복사 
            owl.theme.default.min.css 복사 
        
/js/
    /owl-carousel/ 폴더 생성 
        owl.carousel.min.js 복사 
        
/css/
    /owl-carousel/폴더 생성 
        owl.carousel.min.css 복사 
        owl.theme.default.min.css 복사 
~~~

- /index.html 에 css 연동 
    - \<!--owl carousel css -->
~~~
    <!--magnific-popup css -->
    <link rel="stylesheet" href="./css/magnific-popup/magnific-popup.css">

    <!--owl carousel css -->
    <link rel="stylesheet" href="./css/owl-carousel/owl.carousel.min.css">
    <link rel="stylesheet" href="./css/owl-carousel/owl.theme.default.min.css">

    <!-- style css -->
    <link rel="stylesheet" type="text/css" href="./css/style.css">
~~~
- /index.html 에 javascript 연동 
    - \<!-- owl carousel JS -->
~~~
<!-- maginific-popup JS-->
<script src="./js/magnific-popup/jquery.magnific-popup.min.js"></script>

<!-- owl carousel JS -->
<script src="./js/owl-carousel/owl.carousel.min.js"></script>

<!--custom javascript-->
<script type="text/javascript" src="./js/custom.js"></script>
~~~

- http://owlcarousel2.github.io/OwlCarousel2/
    - 오른쪽 메뉴 : Demo
        - Basic
            - HTML 연동방법  
~~~
<div class="owl-carousel owl-theme">
    <div class="item"><h4>1</h4></div>
    <div class="item"><h4>2</h4></div>
    <div class="item"><h4>3</h4></div>
    <div class="item"><h4>4</h4></div>
    <div class="item"><h4>5</h4></div>
    <div class="item"><h4>6</h4></div>
    <div class="item"><h4>7</h4></div>
    <div class="item"><h4>8</h4></div>
    <div class="item"><h4>9</h4></div>
    <div class="item"><h4>10</h4></div>
    <div class="item"><h4>11</h4></div>
    <div class="item"><h4>12</h4></div>
</div>
~~~
- team-members 에 
    - class="owl-carousel owl-theme" 추가 
~~~
    <div class="col-md-12">

        <div id="team-members" class="owl-carousel owl-theme">
~~~

- /js/custom.js 
    - jQuery 연동 
~~~
/*========================================
                Team
======================================== */
$(function() {
    //Carousel
    $('.owl-carousel').owlCarousel({ }) ;

});
~~~
- /css
    - /owl-carousel
        - owl.theme.default.min.css
            - owl-dot:hover span{background:#869791}
                - active color 
                - \#34c6d3
            - padding:4px 7px; background:#D6D6D6;
                -  \#96e2e8
            - margin:5px 7px;background:#D6D6D6;
                - \#96e2e8
    - 브라우저에서 먼저 확인

<br/>

- http://owlcarousel2.github.io/OwlCarousel2/
    - 오른쪽 메뉴 : Docs
        - Options
            - items : 기본 갯수 
            - autoplay : true,
            - smartSpeed : 700,
            - loop : true,
    - /js/custom.js
~~~
/*========================================
                Team
======================================== */
$(function() {
    //Carousel
    $('#team-members').owlCarousel({
        items : 3,
        autoplay : true,
        smartSpeed : 700,
        loop : true,
    }) ;

});
~~~     

## CSS

~~~
.img-wrapper img:hover { .... }

/*========================================
                Team
======================================== */
.team-member {
    
}
~~~   
- 좌우 간격이 벌어짐 
~~~
/*========================================
                Team
======================================== */
.team-member {
    margin : 0 15px ;
}
~~~  

- 팀 멤버의 정보 , 이름 등 
~~~
.team-member { .... }

.team-member-info {
    padding: 10px 0 30px 0 ;
}
~~~  
- 멤버 이름 
~~~
.team-member-info { .... }

h4.team-member-name {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 1px;
    padding-top:2px;
}
~~~
- 멤버 직책 
~~~
h4.team-member-name { .... }

h4.team-member-designation {
    color:#34c6d3;
    font-size: 15px;
    font-weight: 700;
    font-style: italic;
    letter-spacing: 1px;
    margin-top:5px;
}
~~~

- social icon 주석 
~~~
h4.team-member-designation { .... }

/*========================================
                Social Icons
======================================== */
~~~

- social-list
~~~
/*========================================
                Social Icons
======================================== */
.social-list {
    padding-left: 0;
}
~~~
- 소셜 아이콘, 위, 오른쪽 간격 
~~~
.social-list { .... }

.social-list li {
    list-style: none;
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-right: 6px;
    margin-top:10px;
}
~~~
- 소셜 아이콘 
    - 아이콘 크기 
    - 아이콘 회색으로 
    - 아이콘 대었을 때 색깔 변하기 
~~~
.social-list li { ... }

.social-icon i {
    font-size: 17px;
}
.icon-gray i{
    color : #64707b;
}
.social-icon i:hover {
    color : #34c6d3 ;
}
~~~
- /js/custom.js
    - 마우스를 소셜아이콘에 대고 있을 때 사진 멈추기 
        - autoplayHoverPause:true,
~~~
/*========================================
                Team
======================================== */
$(function() {
    //Carousel
    $('#team-members').owlCarousel({
        items : 3,
        autoplay : true,
        smartSpeed : 700,
        loop : true,
        autoplayHoverPause:true,
    }) ;

});
~~~
     
                                   
        
        
        
    
                