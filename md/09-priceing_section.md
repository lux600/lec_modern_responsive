## Pricing Section 
- 기본구조 
    - content-box 
        - content-title
        - container 
~~~
<!-- pricing-->
<section id="pricing">
    <div class="content-box">
        <div class="content-title wow animated fadeInDown" 
             data-wow-duration="1s" data-wow-delay=".5s" >
            <h3>Our Pricing</h3>
            <div class="content-title-underline"></div>
        </div>
        
        <div class="container">
            <div class="row wow animated fadeInUp"  
                 data-wow-duration="1s" data-wow-delay=".5s" >
                <div class="col-md-4">
                    pricing

                </div>
            </div>
        </div>
        
    </div>
</section>
~~~
- col-md-4 : 4개 
~~~
    <div class="container">
        <div class="row >

            <div class="col-md-4">
                pricing
            </div>
            <div class="col-md-4">
                pricing
            </div>
            <div class="col-md-4">
                pricing
            </div>

        </div>
    </div>
~~~
- 1번째 col-md-4
    - \<sup>$\</sup> : super 달러 표시가 약간 위쪽으로 올라가 있음 
~~~
    <div class="col-md-4">
    
        <div class="pricing-box text-center">
            <h4 class="pricing-title">Basic</h4>
            <h3 class="pricing-value">49<sup>$</sup></h3>
            <ul class="pricing-spec">
                <li>
                    <p>500 EMAILS</p>
                </li>
                <li>
                    <p>500 Disk Space</p>
                </li>
                <li>
                    <p>500 BANDWIDTH</p>
                </li>
                <li>
                    <p>UNLIMITED DOMAINS</p>
                </li>
            </ul>
            <div class="pricing-btn">
                <a class="btn bnt-lg btn-general btn-blue" href="#" role="button">Purchase</a>
            </div>
        </div>
        
    </div>

    <div class="col-md-4">
        pricing
    </div>
    <div class="col-md-4">
        pricing
    </div>
~~~

- 2,3 번째 자료 정리 
~~~
    <div class="col-md-4">...</div>
    
    <div class="col-md-4">
        <div class="pricing-box text-center">
            <h4 class="pricing-title">Enterprice</h4>
            <h3 class="pricing-value">89<sup>$</sup></h3>
            <ul class="pricing-spec">
                <li>
                    <p>1000 EMAILS</p>
                </li>
                <li>
                    <p>100 Disk Space</p>
                </li>
                <li>
                    <p>1000 BANDWIDTH</p>
                </li>
                <li>
                    <p>UNLIMITED DOMAINS</p>
                </li>
            </ul>
            <div class="pricing-btn">
                <a class="btn bnt-lg btn-general btn-blue" href="#" role="button">Purchase</a>
            </div>
        </div>
    </div>

    <div class="col-md-4">
        <div class="pricing-box text-center">
            <h4 class="pricing-title">Stand</h4>
            <h3 class="pricing-value">69<sup>$</sup></h3>
            <ul class="pricing-spec">
                <li>
                    <p>1500 EMAILS</p>
                </li>
                <li>
                    <p>1500 Disk Space</p>
                </li>
                <li>
                    <p>5000 BANDWIDTH</p>
                </li>
                <li>
                    <p>UNLIMITED DOMAINS</p>
                </li>
            </ul>
            <div class="pricing-btn">
                <a class="btn bnt-lg btn-general btn-blue" href="#" role="button">Purchase</a>
            </div>
        </div>
    </div>
~~~    
    
- 2번째 박스를 다르게 
    - 클래스 추가 : pricing-box-lg
    - 클래스 변경 : btn-blue => btn-white
~~~
    <div class="col-md-4">
        <div class="pricing-box pricing-box-lg text-center">
            <h4 class="pricing-title">Enterprize</h4>
            <h3 class="pricing-value">89<sup>$</sup></h3>
            <ul class="pricing-spec">
                <li>
                    <p>1000 EMAILS</p>
                </li>
                <li>
                    <p>100 Disk Space</p>
                </li>
                <li>
                    <p>1000 BANDWIDTH</p>
                </li>
                <li>
                    <p>UNLIMITED DOMAINS</p>
                </li>
            </ul>
            <div class="pricing-btn">
                <a class="btn bnt-lg btn-general btn-white" href="#" role="button">Purchase</a>
            </div>
        </div>
    </div>
~~~    

## CSS
- price 주석 추가 
~~~
.testimonial-author p strong { ... }

/*========================================
                Pricing
======================================== */
.pricing-box {
    
}
~~~
- .price-box 
~~~
/*========================================
                Pricing
======================================== */
.pricing-box {
    border:3px solid #34c6d3;
    padding : 50px 0 ;
    margin: 40px 0 ;
}
~~~

- pricing-title 
~~~
.pricing-box { ... }

h4.pricing-title {
    background-color: #34c6d3;
    color:#fff;
    display:inline-block;
    padding:7px 15px;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0 0 30px 0 ;
}
~~~

- prcing-value
- pricing-value sup : $ 표시 
~~~
h4.pricing-title { .... }

h3.prcing-value {
    font-size : 60px ;
    font-weight: 700;
}
h3.pricing-value sup {
    font-size:28px ;
    font-weight: normal;
    vertical-align: super;
}
~~~

- pricing-spec 
~~~
h3.pricing-value sup { .... }
 
ul.pricing-spec {
    list-style: none;
    padding-left:0 ;
    margin: 20px 0 60px 0 ;
}
~~~

- pricing li p 
~~~
ul.pricing-spec { ... }

ul.pricing-spec li p {
    font-weight: 400;
    text-transform: uppercase;
}
~~~

- pricing-box-lg 관련 수정 
~~~
ul.pricing-spec li p { ... }

.pricing-box-lg {
    padding: 90px 0;
    margin: 0;
    background-color: #34c6d3;
}
.pricing-box-lg h4.pricing-title {
    color: #34c6d3 ;
    background-color: #fff;
}
.pricing-box-lg ul.pricing-spec li p {
    color : #fff ;
}
~~~
- 마지막 애니메이션 주기 
    - col-md-4 : zoomIn
    - col-md-4 : bounceInUp
    - col-md-4 : zoomIn
~~~
<div class="row" >

    <div class="col-md-4 wow animated zoomIn"
         data-wow-duration="1s" data-wow-delay=".5s" >

    ....
        
    <div class="col-md-4 wow animated bounceInUp"
        data-wow-duration="1s" data-wow-delay=".5s" >

    ....
    
    <div class="col-md-4 wow animated zoomIn"
        data-wow-duration="1s" data-wow-delay=".5s" >
    
    ....
~~~~    
