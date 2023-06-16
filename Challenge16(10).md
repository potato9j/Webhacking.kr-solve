### [소스코드]

```Javascript
<html>
<head>
<title>Challenge 16</title>
<body bgcolor=black onload=kk(1,1) onkeypress=mv(event.keyCode)>
<font color=silver id=c></font>
<font color=yellow size=100 style=position:relative id=star>*</font>
<script> 
document.body.innerHTML+="<font color=yellow id=aa style=position:relative;left:0;top:0>*</font>";
function mv(cd){
  kk(star.style.left-50,star.style.top-50);
  if(cd==100) star.style.left=parseInt(star.style.left+0,10)+50+"px";
  if(cd==97) star.style.left=parseInt(star.style.left+0,10)-50+"px";
  if(cd==119) star.style.top=parseInt(star.style.top+0,10)-50+"px";
  if(cd==115) star.style.top=parseInt(star.style.top+0,10)+50+"px";
  if(cd==124) location.href=String.fromCharCode(cd)+".php"; // do it!
}
function kk(x,y){
  rndc=Math.floor(Math.random()*9000000);
  document.body.innerHTML+="<font color=#"+rndc+" id=aa style=position:relative;left:"+x+";top:"+y+" onmouseover=this.innerHTML=''>*</font>";
}
</script>
</body>
</html>

```

<br>

### [소스코드 분석]

1. k(1,1)함수로 별의 처음 위치를 정해줌
2. `document.body.innerHTML`을 이용해서 별을 추가로 입력하는 시스템
3. `onkeypress`를 통해 키가 눌렸을때 눌린 키를 `event.keycode`를 이용하여 아스키코드값으로 바꿔 매개변수로 `mv()`함수가 실행됨
4. 주어진 아스키코드 (100, 97, 119, 115, 124)
    * 100=d
    * 97=a
    * 119=w
    * 115=s
    * 124=|(파이프)

<br>

* 정답(주소창입력) : |(파이프)입력
