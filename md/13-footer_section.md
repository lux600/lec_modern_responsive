## footer section 

- emmet
    - http://docs.emmet.io/abbreviations/syntax
    - ul>li*5 탭키 
    - div#footer-bottom>div.container>div.row>div.col-md-6{copyrights}+div.col-md-6{footer-menu}
    
<br/>

- footer-bottom 만들기 
~~~
<footer>
    <div id="contact"> ... </div>
    
    <div id="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-md-6">copyrights</div>
                <div class="col-md-6">footer-menu</div>
            </div>
        </div>
    </div>
</footer>
~~~      

- emmet
    - div#footer-copyrights>p{Copyrights &copy; 2017 All Rights Reserved by ITCOOP Inc.}
        - 마지막 탭키
    - div#footer-menu>ul>li*7>a 
        - 마지막 탭키 
- footer-bottom 메뉴 세부적으로 정리         
~~~
    <div id="footer-bottom">
    
        <div class="container">
            <div class="row">
            
                <div class="col-md-6">

                    <div id="footer-copyrights">
                        <p>Copyrights &copy; 2017 All Rights Reserved by ITCOOP Inc.</p>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div id="footer-menu">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#stats">Stats </a></li>
                        </ul>
                    </div>
                </div>
                
                
            </div>
        </div>
        
    </div>
~~~    

- 마지막에 많은 \<br>은 모두 삭제          
    
## CSS 설정 
- emmet    
    - https://docs.emmet.io/cheat-sheet/
        - bgc  
            - background-color
        - p:30-0 
            - padding : 30px 0 ;
        - mt:60 
            - margin-top: 60px;
        - m:0
            - margin: 0;
        - c:0
            - color: 0;
        - fl
            - float: left;
        - c
            - color: #000;
        - fz:16
            - font-size: 16px;
        - fw:300
            - font-weight: 300;
        - lis:n
            - list-style: none;
        - pl:0
            - padding-left: 0;
        - m:0             
            - margin: 0;
        - d:ib
            - display: inline-block;
        - td:n
            - text-decoration: none;
~~~
/*========================================
                Footer
======================================== */
#footer-bottom {
    background-color: rgba(0,0,0, 0.1);
    padding: 30px 0;
    margin-top: 60px;
}
#footer-copyrights p {
    margin: 0;
    color: #fff;
}
#footer-menu {
    float: left;
    color: #fff;
    font-size: 16px;
    font-weight: 300;
}
#footer-menu ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}
~~~
- 메뉴를 옆으로 펼치는 것 
~~~  
#footer-menu ul li {
    display: inline-block;
}
~~~
- 메뉴 링크 
~~~
#footer-menu a {
    color: #fff;
    font-size: 16px;
    font-weight: 300;
    margin: 0 10px;
    text-decoration: none;
}
#footer-menu a:hover {
    color: #34c6d3;
}
~~~