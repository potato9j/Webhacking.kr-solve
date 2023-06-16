### [소스코드]

```javascript
<?php
  include "../../config.php";
  if($_GET['view_source']) view_source();
?><html>
<head>
<title>Chellenge 39</title>
</head>
<body>
<?php
  $db = dbconnect();  //db연결
  if($_POST['id']){  //post방식으로 얻어온 id값이 있따면
    $_POST['id'] = str_replace("\","",$_POST['id']);  //id값 중 '\'를 공백으로 대체
    $_POST['id'] = str_replace("'","''",$_POST['id']);  //id값 중 '문자를 "로 대체
    $_POST['id'] = substr($_POST['id'],0,15);  //id에서 index 0~15까지의 문자열을 추출해 재저장
    $result = mysqli_fetch_array(mysqli_query($db,"select 1 from member where length(id)<14 and id='{$_POST['id']}"));  //db에서 member 테이블의 id길이가 14이하고 입력한 id와 일치한 값이 있다면 1 리턴
    if($result[0] == 1){  //리턴값이 1이라면
      solve(39);  //문제해결
    }
  }
?>
<form method=post action=index.php>
<input type=text name=id maxlength=15 size=30>
<input type=submit>
</form>
<a href=?view_source=1>view-source</a>
</body>
</html>

```

<br>

### [소스코드 분석]

* sqp쿼리에서 where구문이 true가 되어서 1이 리턴되면 해결되는 문제
<br>

* `select 1 from table` : 해당 table의 개수만큼 1리턴
* `select 1 from table where()` : 해당 table에서 조건을 만족시키는 행이 있다면 1리턴
<br>

* 문제 : `id='{$_POST['id']}"` 여는 쿼터는 있지만 닫는 쿼터는 없음
* 해결 : 쿼터(')만 닫아주면 됨 
* 함정 : `str_replace`로 ('->") (\=공백)
* 함정해결 : `substr` 인덱스가 0~15까지의 문자열만 추출하기 때문에 인덱스가 15인 값에 '가 들어가 "로 대체되더라도 잘려서 '만 남게됨

<br>

* 정답 : 길이가 14이하인 문자열 아무거나 입력하고 공백 문자로 인덱스 14까지 채우고, 인덱스 15자리에 '을 입력 (admin          ')
