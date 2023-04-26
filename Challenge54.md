### [소스코드]

```html

<html>
<head>
<title>Challenge 54</title>
</head>
<body>
<h1><b>Password is <font id=aview></font></b></h1>  //Password is 다음 문자열을 avuew라고 id지정
<script>
function run(){  //비동기통신 처리를 위한 XMLHttpRequest객체 구하는 함수를 정의
  if(window.ActiveXObject){  //IE브라우저의 경우 ActiveXObject()로 XMLGttpRequest객체 구하기
   try {
    return new ActiveXObject('Msxml2.XMLHTTP');
   } catch (e) {
    try {
     return new ActiveXObject('Microsoft.XMLHTTP');
    } catch (e) {
     return null;
    }
   }  //IE이외의 부라우저에서 XMLHttpRequest()로 XMLHttpRequest객체 구하기
  }else if(window.XMLHttpRequest){
   return new XMLHttpRequest();
 
  }else{
   return null;
  }
 }
x=run();  //생성된 객체 : x
function answer(i){
  x.open('GET','?m='+i,false);  //get방식으로 해당 서버에서 동기 통신 방식으로 연결
  x.send(null);
  aview.innerHTML=x.responseText;  //avuew부분을 서버에서 전달받은 데이터로 출력
  i++;
  if(x.responseText) //서버에서 전달받은 데이터가 존재한다면
  setTimeout("answer("+i+")",20);  //20ms후 재귀함수 호출
  if(x.responseText=="")  //서버에서 전달받은 데이터가 공백 (끝이라면,)
  aview.innerHTML="?";  //aview에 "?"를 출력
}
setTimeout("answer(0)",1000);  //1000ms후 answer(0) 함수를 실행
</script>
</body>
</html>
```

<br>

### [소스코드 분석]

* 동기식vs비동기식

    * 동기식 : 요청, 결과로 이루어지는 실행흐름의 단위가 맞아 떨어지는 방식 / 요청과 결과가 순차적으로 이루어짐
        * ex)) a요청 -> a응답 -> b요청 -> b응답 -> c요청 -> c응답 ---->>>>
        
    * 비동기식 : 요청, 결과로 이루어지는 실행 흐름의 단위가 맞춰지지 않는 방식 / 요청과 결과가 섞임
        * ex)) a요청 -> b요청 -> a응답 -> c요청 ---->>>>

    * `x.open`부분에서 차례대로 응답, 요청을 받기 위해 동기식을 선택함 (비동기식이였다면 FLAG값이 섞임)



* `XMLHttpRequest`객체 : javascript를 위해 사용하는 객체로 웹 서버에서 HTTP or HTTPS방식으로 요청을 전송하고 결과를 수신함

* `innerHTML` : 내부 HTML코드를 JAVAscript코드에서 변경가능

* `responseText` : 서버에 요청하여 응답받은 데이터를 문자열로 변환

<br>

* 해결법
    * `aview.innerHTML=x.responseText;` 
    * `if(x.reposeText=="") avues.innerHTML="?";`
        * 첫부분 aview때문에 문자가 하나씩만 나타나고, 두번째 if절때문에 마지막에 ?이 출력되는 방식
        * 위 문제를 해결하기 위해서는 : 이전에 나타나는 문자가 사라지지 않게 =이 아니라 +=을 입력해야함
    
    
    
    
