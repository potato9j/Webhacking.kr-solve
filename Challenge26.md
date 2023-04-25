### [소스코드]

```javascript
<?php
  if(preg_match("/admin/",$_GET['id'])) { echo"no!"; exit(); }
  $_GET['id'] = urldecode($_GET['id']);
  if($_GET['id'] == "admin"){
    solve(26);
  }
?>
```

<br>

### [자바스크립트 소스코드 분석]

1. GET형식으로 받은 id값이 admin이면 풀리는 문제
2. if조건문 위에, `preg_match`함수로 admin이란 값을 **필터링**하고 있음. (==admin이란 값을 넣어줄 수 없음)
3. id의 값을, `urldecode()`함수를 통해 **변조**시킴. (==admin의 값을 url인코딩해서 입력하라)
4. admin -(url인코딩)-> %61%64%6D%69%6E
    * 결과값 : no!
5. 처음 if절에서 `preg_match()`함수에 막힘
    * 막힌 이유 : 웹서버-브라우저 간 데이터 교환시, 브라우저는 폼에서 입력받은 데이터를 자동으로 **인코딩**한 값으로 보내고 php는 자동으로 **디코딩**하기 때문임
    * `%61%64%6D%69%6E`의 값을 한번더 인코딩 해주어서, `%61%64%6D%69%6E`을 인코딩한 값에서 브라우저로 넘어갈때 `%61%64%6D%69%6E`로 넘어갈 것이고, 그 값이 `urldecode()`함수에 의해 admin이 됨
6. %61%64%6D%69%6E -(url인코딩)-> `%2561%2564%256D%2569%256E`

* 해결법 : https://webhacking.kr/challenge/web-11/?id=%2561%2564%256D%2569%256E
