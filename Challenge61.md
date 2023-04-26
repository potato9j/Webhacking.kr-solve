### [소스코드]

```javascript
<?php
  include "../../config.php";
  if($_GET['view_source']) view_source();
  $db = dbconnect();
  if(!$_GET['id']) $_GET['id']="guest";  //만약 id를 받지 못한다면 guest로 초기화 시킴
  echo "<html><head><title>Challenge 61</title></head><body>";
  echo "<a href=./?view_source=1>view-source</a><hr>";
  $_GET['id'] = addslashes($_GET['id']); 
  if(preg_match("/\(|\)|select|from|,|by|\./i",$_GET['id'])) exit("Access Denied");  //문자들이 대소문자 상관없이(/i) 필터링됨
  if(strlen($_GET['id'])>15) exit("Access Denied");
  $result = mysqli_fetch_array(mysqli_query($db,"select {$_GET['id']} from chall61 order by id desc limit 1"));  //limit1:출력 개수를 1개로 제한
  echo "<b>{$result['id']}</b><br>";
  if($result['id'] == "admin") solve(61);
  echo "</body></html>";
?>
```

<br>

### [소스코드 분석]

* $result['id'] 값이 admin이면 문제가 풀림

<br>

* `addslashes()` : 문자열 안의 특수문자가 잘 인식되도록 역슬래시를 추가해주는 함수
* `stripslashes()` : 반대로 역글래시를 제거해주는 함수
* `order by id desc` : id를 내림차순으로 정렬

<br>

* exit()함수 발동 요건
    * id길이 15이상
    * `\(, \), select, from, by, \.`가 id에 들어가는 경우

<br>

* 해결책
    * sql에서 '칼럼별칭'이라 불리는, `SELECT A (as) id from table`처럼 A라는 값의 별명을 id로 사용하는 방법이 존재함
    * admin 을 `urlencoding`하면 id길이가 15이상이 되어 exit()함수 발동
    * exit()함수 발동을 막기위해, **16진수 인코딩**으로 우회 (0x61646D696E id)
    * url끝에 `id=0x61646D696E id`를 입력
