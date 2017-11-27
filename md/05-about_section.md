## About Section 

- /index.html
    - services 아래에 추가 
    - \<!-- About -->
~~~
<!--services -->
<section id="services"> ...</section>

<!-- About -->
<section id="about">

</section>
~~~

- About right side 추가  
~~~
<!-- About -->
<section id="about">
    
    <!--about right side-->
    <idv id="about-bg-diagonal">
        
    </idv>
     
</section>
~~~

_ About left side 추가 
    - right side 아래에 
~~~
<!-- About -->
<section id="about">

    <!--about right side-->
    <idv id="about-bg-diagonal">

    </idv>

    <!--about left side-->
    <div class="container">
        <div class="row">
            
        </div>
    </div>

</section>
~~~

- left side 
    - col-md-4 추가 
~~~
    <!--about left side-->
    <div class="container">
        <div class="row">
            
            <div class="col-md-4">
                <div id="about-content-box">
                    <div id="abount-content-box-outer">
                        <div id="about-content-box-inner">
                            
                        </div>
                    </div>    
                </div>
            </div>

        </div>
    </div>
~~~

- \<div id="about-content-box-inner"> 안에 
    - 타이틀과 
    - underline 
    - desc 추가 
~~~
<div class="col-md-4">
    <div id="about-content-box">
        <div id="abount-content-box-outer">
            <div id="about-content-box-inner">
    
    
                <div class="content-title wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
                    <h3>About ITCOOP</h3>
                    <div class="content-title-underline"></div>
                </div>
                <div id="abount-desc">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
    
    
            </div>
        </div>
    </div>
</div>
~~~

- desc 아래에 
    - 버튼 추가 
~~~
    <div class="content-title wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
        <h3>About ITCOOP</h3>
        <div class="content-title-underline"></div>
    </div>
    <div id="abount-desc">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>
    </div>

    <div id="about-btn">
        <a class="btn btn-lg btn-general" href="#work" role="button">Our Work</a>
    </div>
~~~
    
<br/>

## CSS
- /css/style.css
    - 맨 밑의 service 다음에 
    - 주석 about 추가 
~~~
.service-item-desc p {
    margin: 0 ;
    padding-left:85px ;

}

/*========================================
                About
======================================== */
#about-content-box {
    
}
~~~     

- \#abount-content-box 추가 
~~~
#about-content-box {
    float : left ;
    height: 700px;
}
~~~   

- \#about-content-box { ... } 아래에
    - 추가 : \#about-content-box-outer
    - 추가 : \#about-content-box-inner   
~~~
#about-content-box { ... }

#about-content-box-outer {
    width:100%;
    height: 100%;
    display:table;
}
#about-content-box-inner {
    display: table-cell;
    vertical-align: middle;
}
~~~       

- ABOUT ITCOOP 을 왼쪽으로 옮기기 위해서 
    - \#about-content-box-inner {...} 아래에 
        - 추가 : #about .content-title h3 
~~~
#about-content-box-inner {...}

#about .content-title h3 {
    text-align: left;
}
~~~   

- ABOUT ITCOOP 의 언더라인을 왼쪽으로 보내기 위해서
    - \#about .content-title h3 { ... } 아래에  
        - 추가 : #about .content-title .content-title-underline
            - 왼쪽 공간 30px       
~~~
#about .content-title h3 { ... }

#about .content-title .content-title-underline {
    margin : 0 0 30px 0 ;
    
}
~~~
- about 의 description 수정
    - \#about .content-title .content-title-underline { ... } 아래에 
        - 추가 : #about-desc p 
~~~
#about .content-title .content-title-underline { ... }

#about-desc p {
    margin-bottom: 30px;
}
~~~

- \#abount-btn 에서 새로운 btn-blue 클래스 추가 
~~~
    <div id="about-btn">
        <a class="btn btn-lg btn-general btn-blue" href="#work" role="button">Our Work</a>
    </div>
~~~ 

- style.css 의 버튼 주석 그룹에 추가 
    - .btn-white:focus { ... } 아래에 
        - 추가 .btn-blue 
        - 추가 .btn-blue:hover, .btn-blue:focus
~~~
/*========================================
                Button (Generic)
======================================== */
.btn-general { .... }
.btn-white { .... }
.btn-white:hover,
.btn-white:focus { ... }

.btn-blue {
    border-color : #34c6d3;
    color: #34c6d3;
}
.btn-blue:hover,
.btn-blue:focus {
    background-color: #34c6d3;
    color : #fff;
}
~~~

- about-desc 에 
    - 추가 : 클래스 class="wow fadeInDown" 
    - 추가 : data-wow-duration="1s" 
    - 추가 : data-wow-delay=".5s"
~~~
    <div id="abount-desc" class="wow fadeInDown" data-wow-duration="1s" data-wow-delay=".5s">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>
    </div>
~~~

- about-btn 에 
    - 추가 : 클래스 class="wow fadeInUp" 
    - 추가 : data-wow-duration="1s" 
    - 추가 : data-wow-delay=".5s"
~~~
    <div id="about-btn" class="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
        <a class="btn btn-lg btn-general btn-blue " href="#work" role="button">Our Work</a>
    </div>
~~~    

- 클래스에 animated 추가 
~~~
<div class="content-title wow animated fadeInDown"

<div id="abount-desc" class="wow animated fadeInDown"

<div id="about-btn" class="wow animated fadeInUp" 
~~~

- 오른쪽에 이미지 처리 
~~~
<!-- About -->
<section id="about">

    <!--about right side-->
    <idv id="about-bg-diagonal">

    </idv>
~~~

- css 는 about 주석 바로 아래 정리
    - 추가 : \#about-bg-diagonal 
~~~
/*========================================
                About
======================================== */
#about-bg-diagonal {
    
}

#about-content-box { ... }
~~~
- #abount-bg-diagonal 의 값을 브라우저에 직접 해본다
    - 배경 이미지는 맨 나중에 확인 
    - 위의 내용을 모두 끝내면, 
        - css 에 모두 그대로 사용  
~~~
#about-bg-diagonal {
    width: 60%;
    height: 700px;
    float :right;
    background-image: url(../img/bg-about.jpg) ;
    border-left:200px solid #fff;
    border-top : 700px solid transparent;
}
~~~

- 스크롤이 움직여도 배경이미지가 그대로
    - 추가 클래스 : class="bg-parallax"  
~~~
    <!--about right side-->
    <idv id="about-bg-diagonal" class="bg-parallax">
~~~

