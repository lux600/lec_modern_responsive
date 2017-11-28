## Clients Section
- Clients 추가 
~~~
<!--Clients -->
<section id="clients">

    <div class="content-box">

        <div class="content-title">
        <!--<div class="content-title wow animated fadeInDown"-->
            <!--data-wow-duration="1s" data-wow-delay=".5s" >-->
            <h3>Clients</h3>
            <div class="content-title-underline"></div>
        </div>

        <div class="container">
            <div class="row">
            <!--<div class="row wow animated bounceInLeft"-->
                <!--data-wow-duration="1s" data-wow-delay=".5s" >-->
                
                <div class="col-md-12">

                </div>
            </div>
        </div>

    </div>
</section>
~~~
- col-md-12 안에 
    - clients 
        - clients 내용 넣기 
~~~
    <div class="col-md-12">

        <div id="clients">
            <div class="client">
                <img src="./img/client/logos/logo-1.jpg" class="img-fluid" alt="client">
            </div>
        </div>

    </div>
~~~
- 12개의 클라이언트 이미지 
~~~
    <div class="col-md-12">

        <div id="clients">
            <div class="client">
                <img src="./img/client/logos/logo-1.jpg" class="img-fluid" alt="client">
            </div>
            <div class="client">
                <img src="./img/client/logos/logo-2.jpg" class="img-fluid" alt="client">
            </div>
            <div class="client">
                <img src="./img/client/logos/logo-3.jpg" class="img-fluid" alt="client">
            </div>
            <div class="client">
                <img src="./img/client/logos/logo-4.jpg" class="img-fluid" alt="client">
            </div>
            <div class="client">
                <img src="./img/client/logos/logo-5.jpg" class="img-fluid" alt="client">
            </div>
            <div class="client">
                <img src="./img/client/logos/logo-6.jpg" class="img-fluid" alt="client">
            </div>
            <div class="client">
                <img src="./img/client/logos/logo-7.jpg" class="img-fluid" alt="client">
            </div>
            <div class="client">
                <img src="./img/client/logos/logo-8.jpg" class="img-fluid" alt="client">
            </div>

        </div>

    </div>
~~~    

## CSS 추가 
~~~
.stats-item p { ... }

/*========================================
                Client
======================================== */
.client {
    
}
~~~

- index.html
    - id="clients-list" 변경 
    - class="owl-carousel owl-theme" 추가 
~~~
    <div class="col-md-12">

        <div id="clients-list" class="owl-carousel owl-theme">
~~~

- /js/custom.js 맨 밑에 추가 
    - items : 4,
~~~
/*========================================
                Clients
======================================== */
$(function() {
    //Carousel
    $('#clients-list').owlCarousel({
        items : 4,
        autoplay : true,
        smartSpeed : 700,
        loop : true,
        autoplayHoverPause:true
    }) ;

});
~~~