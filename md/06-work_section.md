## Work Section 
- About 밑에 
    - Work 섹션 추가 
~~~
<!-- About -->
<section id="about"> .... </section>

<!-- Work-->
<section id="work">
    
</section>
~~~
- 추가 : \<div class="content-box">
~~~
<!-- Work-->
<section id="work">

    <div class="content-box">
        <div class="content-title wow animated fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
            <h3>Our Work</h3>
            <div class="content-title-underline"></div>
        </div>
    </div>

</section>
~~~
- content-box 클래스 밑에 
    - container 클래스 추가 
~~~
<!-- Work-->
<section id="work">

    <div class="content-box">
        <div class="content-title wow animated fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
            <h3>Our Work</h3>
            <div class="content-title-underline"></div>
        </div>
    </div>
    
    <div class="container">
        
    </div>

</section>
~~~~

- col-md-* 까지 정리 
~~~
    <div class="container">
        <div class="row">
            <div class="col-md-3">

                
            </div>
        </div>
    </div>
~~~
- 12컬럼이 넘어가면 자동으로 줄바꿈 
~~~
    <div class="container">
        <div class="row">

            <div class="col-md-3">Work</div>
            <div class="col-md-3">Work</div>
            <div class="col-md-3">Work</div>
            <div class="col-md-3">Work</div>

            <div class="col-md-3">Work</div>
            <div class="col-md-3">Work</div>
            <div class="col-md-3">Work</div>
            <div class="col-md-3">Work</div>

        </div>
    </div>
~~~
- row 에 애니메이션 추가 
~~~
    <div class="container">
        <div class="row wow animated fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
~~~
- col-md-3 부분을 
    - <img src="./img/work/1.jpg"
    - <img src="./img/work/8.jpg" 까지 필요 
        - /getbootstrap/Documentation/content/images
            - responsive 이미지 만들기
            - class="img-fluid"  
~~~
    <div class="container">
        <div class="row wow animated fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">

            <div class="col-md-3">
                <div class="img-wrapper">
                    <a href="./img/work/1.jpg" title="Work Description Goes Here">
                        <img src="./img/work/1.jpg" class="img-fluid" alt=""Work>
                    </a>
                </div>
            </div>
            
            ....
            
            <div class="col-md-3">
                <div class="img-wrapper">
                    <a href="./img/work/8.jpg" title="Work Description Goes Here">
                        <img src="./img/work/8.jpg" class="img-fluid" alt=""Work>
                    </a>
                </div>
            </div>
            
~~~

- container에서 container-fluid 로 바꿈 
    - 좌우가 꽉 차게 
~~~
    <div class="container-fluid">
        <div class="row wow animated fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
        ...
~~~    

## CSS

- row 에 
    - 추가 : 클래스 no-gutters
~~~
    <div class="container-fluid">
        <div class="row no-gutters wow animated fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
~~~
     
- 맨 밑에 work 추가 
    - 틈새를 모두 없앰 padding 0 
~~~
#about-desc p { ...}

/*========================================
                Work
======================================== */
.row.no-gutters [class*=col-]{
    padding-left :0;
    padding-right : 0 ;
}
~~~

## Image Zoom Effect
- 마우스 갖다대면 이미지 크게 보이기 
    - 크기 1.5배로 변하기 
~~~
.row .no-gutters [class*=col-]{ ....}

.img-wrapper img:hover {
    transform: scale(1.5) ;
}
~~~
- 넘치는 것을 안 보이게
~~~
.img-wrapper {
    overflow: hidden;
}
.img-wrapper img:hover {
    transform: scale(1.5) ;
}
~~~
- .img-wrapper img 추가 
    - http://ielselog.blogspot.kr/2013/09/understand-css-trasition.html
        - transition-property : 어떤 transition 효과 줄것인지 
        - transition-duration : 지속시간 
        - transition-timing-function : 
            - ease는 극초반은 느리게, 초반은 빠르게, 종료지점은 느리게 변화가 진행된다. 
        - transition-delay
~~~
.img-wrapper { .... }

.img-wrapper img {
    transition: transform .5s ease;
}
.img-wrapper img:hover { .... }
~~~ 

## Image Magnify-Gallery jQuery

- http://dimsemenov.com/plugins/magnific-popup/
    - 메뉴 : documentation  
    - 메뉴 : github - Clone and download
- dist
    - magnific-popup.css 파일 복사
    - magnific-popup.min.js 파일 복사     
~~~
/css/
    /magnific-popup/ 폴더만들기 
         magnific-popup.css 파일 복사       
         
/js/
    /magnific-popup/ 폴더 만들기 
        magnific-popup.min.js 파일 복사
~~~  

- /index.html 에 css 링크 추가 
    - \<!--magnific-popup css -->
~~~
    <!-- animage css -->
    <link rel="stylesheet" href="./css/animate/animate.css">

    <!--magnific-popup css -->
    <link rel="stylesheet" href="./css/magnific-popup/magnific-popup.css">

    <!-- style css -->
    <link rel="stylesheet" type="text/css" href="./css/style.css">
~~~    
- /index.html 에 javascript 추가 
    - \<!-- maginific-popup JS--> 
~~~
<!-- WOW JS -->
<script src="./js/wow/wow.min.js"></script>

<!-- maginific-popup JS-->
<script src="./js/magnific-popup/jquery.magnific-popup.min.js"></script>

<!--custom javascript-->
<script type="text/javascript" src="./js/custom.js"></script>
~~~

- /js/custom.js 
    - documentation 에서 
        - jQuery ready 안에 
            - Work 추가 
                - 2. From a group of elements with one parent
                - 추가 : $('.image-link').magnificPopup({type:'image'});
                - javascript Object
                - 왼쪽 메뉴 gallery 클릭              
~~~
$(function() {
    //animate on scroll
    new WOW().init();


});

/*========================================
                Work
======================================== */
$(function() {
    //image popup
    $('#work').magnificPopup({
        delegate :'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });

});
~~~

- css 수정
    - cursor: zoom-in; 커서모양 줌 
~~~
.img-wrapper img:hover {
    transform: scale(1.5) ;
    cursor: zoom-in;
}
~~~    

