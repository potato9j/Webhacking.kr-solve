### [소스코드]

```javascript
<?php
  include "../../config.php";
  if($_GET['view_source']) view_source();
  $db = dbconnect();
  if(!$_GET['id']) $_GET['id']="guest";
  echo "<html><head><title>Challenge 61</title></head><body>";
  echo "<a href=./?view_source=1>view-source</a><hr>";
  $_GET['id'] = addslashes($_GET['id']); 
  if(preg_match("/\(|\)|select|from|,|by|\./i",$_GET['id'])) exit("Access Denied");  //문자들이 대소문자 상관없이(/i) 필터링됨
  if(strlen($_GET['id'])>15) exit("Access Denied");
  $result = mysqli_fetch_array(mysqli_query($db,"select {$_GET['id']} from chall61 order by id desc limit 1"));
  echo "<b>{$result['id']}</b><br>";
  if($result['id'] == "admin") solve(61);
  echo "</body></html>";
?>
```

<br>

### [소스코드 분석]

* $result['id'] 값이 admin이면 문제가 풀림

<br>

* addslashes() : 문자열 안의 특수문자가 잘 인식되도록 역슬래시를 추가해주는 함수
* stripslashes() : 반대로 역글래시를 제거해주는 함수

<br>

* exit()함수 발동 요건
    * id길이 15이상
    * `\(, \), select, from, by, \.`가 id에 들어가는 경우
    * 
