## Navigation 

- getbootstrap/Components/Navbar

- 네비게이션은 최상단에
    - 클래스 : navbar 
~~~
<body>

<header>
    <nav class="navbar" >
        
    </nav>

</header>

<!-- Home -->
<section id="home">
~~~

- 검정색 
~~~
    <nav class="navbar navbar-dark bg-dark" >
        test
    </nav>
~~~
- 상단에 메뉴 고정 
~~~
    <nav class="navbar fixed-top navbar-dark bg-dark" >
        test
    </nav>
~~~

- responsive 하게 
~~~
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" >
        test
    </nav>
~~~

- 로고 만들기 
    - <a class="navbar-brand" href="#home">Navbar</a>
~~~
<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Navbar</a>
~~~
- 이미지 로고 
~~~
  <a class="navbar-brand" href="#">
      <img src="./img/logo.png">
  </a>
~~~
- 화면 작게 할 경우 
    - 로고 : 왼쪽 
    - 아이콘 : 오른쪽 
~~~
<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">

  <a class="navbar-brand" href="#">
      <img src="./img/logo.png">
  </a>
    
  <button class="navbar-toggler" type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation">
      
    <span class="navbar-toggler-icon"></span>
  </button>
  
  ....
  
~~~  

- 화면 줄일 경우 
    - 왼쪽 : 버튼 
    - 오른쪽 : 로고 
~~~
<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">

  <button class="navbar-toggler" type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation">
      
    <span class="navbar-toggler-icon"></span>
  </button>

  <a class="navbar-brand" href="#">
      <img src="./img/logo.png">
  </a>
  
  ....
~~~

- 메뉴 총 정리 
~~~
<header>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark ">
      <a class="navbar-brand" href="#">
          <img src="./img/logo.png">
      </a>
    
      <button class="navbar-toggler" type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01
              aria-expanded="false"
              aria-label="Toggle navigation">
    
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse " id="navbarTogglerDemo01" >
    
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
    
      </div>
    </nav>
</header>
~~~

- 메뉴 오른쪽으로 보내기 
    - 클래스 추가 : justify-content-end
~~~
  <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01" >
~~~
- 개별 메뉴 만들기 
~~~
    <ul class="navbar-nav">
       <li class="nav-item active">
            <a class="nav-link" href="#home">Home </a>
          </li>
        <li><a class="nav-link" href="#services">Servies</a></li>
        <li><a class="nav-link" href="#about">About</a></li>
        <li><a class="nav-link" href="#work">Work</a></li>
        <li><a class="nav-link" href="#team">Team</a></li>
        <li><a class="nav-link" href="#testimonials">Testimonials</a></li>
        <li><a class="nav-link" href="#pricing">Pricing</a></li>
        <li><a class="nav-link" href="#stats">Stats</a></li>
        <li><a class="nav-link" href="#clients">Clients</a></li>
        <li><a class="nav-link" href="#contact">Contact</a></li>
    </ul>
~~~    

## CSS
- navigation 주석 추가 
~~~
/*========================================
                Navigation
======================================== */
.navbar {
 
}
~~~
- 메뉴 위아래 간격을 넓힌다 
~~~
.navbar {
    padding: 20px 0;
}
~~~

- 클래스 에서 검은색 삭제 
    - navbar-dark bg-dark
~~~
<nav class="navbar navbar-expand-lg fixed-top  itcoop-top-nav ">
~~~

- itcoop-top-nav 클래스 추가  
    - 색 검은색깔  
~~~
.navbar { ... }
.itcoop-top-nav {
    background : rgba(0,0,0, 0.7);
    padding: 7px 30px ;
}
~~~

- 메뉴 오른쪽으로 보내기 
    - justify-content-end 추가 
~~~
  <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01" >

    <ul class="navbar-nav">
~~~
- li 태그의 
    - nav-link 클래스를 삭제 
    - 간격이 너무 붙여서 좌우 마진을 준다 
~~~
.navbar-nav > li {
    margin: 0 7px ;
}
~~~
- 메뉴 글씨 폰트 수정 
    - \> : 직계자식
~~~
.navbar-nav > li > a {
    color : #fff;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
}
~~~
- 마우스를 대었을 때 처리 
~~~
.navbar-nav > li > a:hover,
.navbar-nav > li > a:focus {
    background : none;
    color : #34c6d3;
    text-decoration:none ;
}
~~~
- 오른쪽 클릭 아이콘 흰색으로 (?) : 제외 
~~~
.navbar-toggler {
    background-color: rgba(0,0,0, 0.1);
    border: 1px solid #fff ;
    border-radius: 0;
}
.navbar-toggler .navbar-toggler-icon {
    color: #fff;
}
~~~
- 오른쪽 메뉴 아이콘 클릭했을 때 밑으로 펼쳐지는 크기
    - 제한 없음  
    - 펼쳐질 때 오른쪽으로 
~~~
.navbar-collapse {
    max-height:none !important;
}
~~~

- ScrollSpy
    - getbootstrap/Documentation/Components/ScrollSpy
~~~
<body data-spy="scroll" data-target=".itcoop-top-nav">
~~~    