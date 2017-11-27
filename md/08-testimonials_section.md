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