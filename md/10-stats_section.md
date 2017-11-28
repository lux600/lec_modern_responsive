## Stats Section 
- 기본구조 
~~~
<!-- Stats -->
<section id="stats">
    
    <div class="content-box">
        <div class="content-title wow animated fadeInDown" 
             data-wow-duration="1s" data-wow-delay=".5s" >
            <h3>We Never Stop Improving</h3>
            <div class="content-title-underline"></div>
        </div>

        <div class="container">
            <div class="row wow animated bounceInLeft" 
                 data-wow-duration="1s" data-wow-delay=".5s" >
                <div class="col-md-3">
                    
                </div>
            </div>    
                 
        </div>

    </div>
    
</section>
~~~
~~~
<!-- Stats -->
<section id="stats">

    <div class="content-box">
    
        <div class="content-title" >
            <h3>We Never Stop Improving</h3>
            <div class="content-title-underline"></div>
        </div>

        <div class="container">
            <div class="row" >
    
                <div class="col-md-3">
                    stats
                </div>
                <div class="col-md-3">
                    stats
                </div>
                <div class="col-md-3">
                    stats
                </div>
                <div class="col-md-3">
                    stats
                </div>
    
            </div>
        </div>

    </div>

</section>
~~~
- <div id="stats-cover"> 하나 더 만들기 
~~~
<!-- Stats -->
<section id="stats">

    <div id="stats-cover">

        <div class="content-box"> ...</div>
        
    </div>
    
</section>
~~~   

- col-md-3 : 1번째 정리 
~~~
    <div class="col-md-3">
        <div class="stats-item">
            <i class="fa fa-cloud-download fa-5x"></i>
            <h2><span class="counter">1590</span><span>*</span></h2>
            <p>Downloads</p>
        </div>
    </div>

    <div class="col-md-3">
        stats
    </div>
    <div class="col-md-3">
        stats
    </div>
    <div class="col-md-3">
        stats
    </div>
~~~    
     
- 2번째 정리 
- 3번째 정리 
- 4번째 정리      
~~~
    <div class="col-md-3">... </div>

    <div class="col-md-3">
        <div class="stats-item">
            <i class="fa fa-star-o fa-5x"></i>
            <h2><span class="counter">3500</span><span>*</span></h2>
            <p>Awards</p>
        </div>
    </div>

    <div class="col-md-3">
        <div class="stats-item">
            <i class="fa fa-heart-o fa-5x"></i>
            <h2><span class="counter">1199</span><span>*</span></h2>
            <p>Likes</p>
        </div>
    </div>

    <div class="col-md-3">
        <div class="stats-item">
            <i class="fa fa-check fa-5x"></i>
            <h2><span class="counter">2200</span><span>*</span></h2>
            <p>Recommended</p>
        </div>
    </div> 
~~~   

## CSS 변경 
- Stats 주석 추가 
    - 배경 
~~~
.pricing-box-lg ul.pricing-spec li p { ... }

/*========================================
                Stats
======================================== */
#stats-cover {
    background-image: url("../img/bg-stats.jpg");
}
~~~
- 배경 이미지 고정 
    - 클래스 추가 : class="bg-parallax"
~~~
<!-- Stats -->
<section id="stats">

    <div id="stats-cover" class="bg-parallax">
~~~

- .content-box 검은색으로 
~~~
#stats-cover { ... }

#stats .content-box {
    background-color: rgba(0,0,0,.6);
}
~~~

- content-title 클래스에 
    - content-title-white 클래스 추가 
~~~
    <div class="content-box">
        <div class="content-title content-title-white" >
~~~

- stats-item 내용들 정리 
~~~
#stats .content-box { ... }

.stats-item {
    padding: 100px;
}
.stats-item i {
    color:#34c6d3 ;
}
.stats-item h2 {
    color:#fff ;
    font-size: 35px;
    font-weight: 700;
    margin-top : 15px;
    margin-bottom: 1px;
}
.stats-item p {
    color:#fff ;
    text-transform: uppercase;
    font-weight: 300;
    margin-top :0;
}
~~~

## jQuery 
- 숫자 변하기 
    - http://ciromattia.github.io/jquery.counterup/demo/index.html
    - github.com
        - https://github.com/ciromattia/jquery.counterup
            - Clone or download 
~~~
jquery.counterup-master
    jquery.counterup.min.js
    
복사 
/js/
    /counter/ 폴더 생성 
        jquery.counterup.min.js 복사 
~~~        
- github.com
    - https://github.com/ciromattia/jquery.counterup
        - requires 
            - waypoints.js
                - http://imakewebthings.com/waypoints/
                    - Download
~~~
imakewebthings-waypoints
    /lib/
        jquery.waypoints.min.js 

복사 
/js/
    /counter/
        jquery.waypoints.min.js 복사 
~~~    

- tutorial
     - http://ciromattia.github.io/jquery.counterup/demo/index.html
~~~
<head>
    <script>
        jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });
    </script>
</head>
<body>
    <span class="counter">1,234,567</span>
    <script src="jquery.waypoints.min.js"></script>
    <script src="jquery.counterup.min.js"></script>
</body>
~~~    
        
- 새로 추가된 counter 자바스크립트 추가 
~~~
<!-- owl carousel JS -->
<script src="./js/owl-carousel/owl.carousel.min.js"></script>

<!-- counter JS -->
<script src="./js/counter/jquery.waypoints.min.js"></script>
<script src="./js/counter/jquery.counterup.min.js"></script>

<!--custom javascript-->
<script type="text/javascript" src="./js/custom.js"></script>
~~~
- custom.js 에 가장 마지막에 셋팅 
~~~
/*========================================
                Counter
http://ciromattia.github.io/jquery.counterup/demo/index.html
http://imakewebthings.com/waypoints/
======================================== */
$(function() {

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

});
~~~
- 클래스 counter 연동됨 
    - \<h2>\<span class="counter">1590\</span>\<span>*\</span>\</h2>
~~~
    <div class="col-md-3">
        <div class="stats-item">
            <i class="fa fa-cloud-download fa-5x"></i>
            <h2><span class="counter">1590</span><span>*</span></h2>
            <p>Downloads</p>
        </div>
    </div>
~~~

- 마지막 애니메이션 
~~~
    <!--<div class="content-title content-title-white" >-->
    <div class="content-title content-title-white wow animated fadeInDown"
         data-wow-duration="1s" data-wow-delay=".5s" >
~~~
~~~
    <div class="container">
    <!--<div class="row" >-->
        <div class="row wow animated bounceInLeft"
             data-wow-duration="1s" data-wow-delay=".5s" >
~~~

        
                                

    
    
            
            
    
     