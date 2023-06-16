### [소스코드]

```javascript
<html>
<head>
<title>Challenge 43 RevengE</title>
</head>
<body>
<hr>
You must upload webshell and cat <b>/flag</b>
<hr>
<?php
  if(isset($_FILES['file'])){
    $type = $_FILES['file']['type'];
    $name = $_FILES['file']['name'];
    if(!$type) { exit("type not detected"); }
    if(preg_match("/\.\.|\/|\\\|\.htaccess/",$name)) exit("dont do that");
    if(preg_match("/text\/|application\/octet-stream/i",$type)) exit("wrong type");
    $image = new Imagick();
    $image->readImage($_FILES['file']['tmp_name']);
    $image->resizeImage(500, 500, imagick::FILTER_GAUSSIAN, 10);
    $image->writeImage("./upload/".$name);
    echo "Done!<br><br><a href=./upload/{$name}>./upload/{$name}</a>";
  }
?>
<form method=post enctype="multipart/form-data" action=index.php>
<input name=file type=file><input type=submit>
</form>
<hr><?php highlight_file(__FILE__); ?>
</body>
</html>
```

<br>

### [소스코드 분석]

* jpeg파일을 제출했더니 Done이라고 출력됨
* webshell을 업로드해서 flag파일을 출력하면 flag값을 볼 수 있음
* 제출하면 Worng Type이라고 출력됨 (추측: 파일 타입을 변조해서 보면 flag값을 확인가능)
* 제출파일 : webshell.php
* `Burp Suite`를 통해 변조
    * `Burp Suite`란
        * Burp : 프로그램의 명칭 (패킷조작 프로그램)
        * 네트워크는 '패킷'을 주고받는 행위로 정보를 전달함
        * 이때 Burp Suite프로그램이 중간에 프록시 서버를 만들어, 패킷을 분석하고 변조하여 내보내는 방식을 통해 패킷 위조가 가능함
        * 비슷한 툴로 WireShark가 있음
* Burp Suite `Content-Type: inage/png` (이것을 image/png로 변조하고 forward하여 보내준다)
* 파일의 MIME타입이 text/로 시작하거나 application/octet-stream인지 확인
* 정답 : FLAG{V2hhdCBkaWQgeW91IGV4cGVjdD8=}



