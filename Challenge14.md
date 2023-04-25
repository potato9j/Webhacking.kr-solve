### [소스코드]

```javascript
<script>
function ck(){
  var ul=document.URL;
  ul=ul.indexOf(".kr");
  ul=ul*30;
  if(ul==pw.input_pwd.value) { location.href="?"+ul*pw.input_pwd.value; }
  else { alert("Wrong"); }
  return false;
}
</script>
```

<br>

### [자바스크립트 소스코드 분석]
1. ul변수에 `document.URL` 할당
    - `document.URL` : 문서의 URL을 반환하는 속성
2. ul변수에 `ul.indexOf(".kr")` 할당
    - `indexOf()` : 문자열에서 원하는 문자열을 검색하여 찾거나, 배열에서 원하는 특정 배열값의 존재 여부 등을 확인
3. 최종적으로 `ul*30`으로 ul변수를 구성
4. `ul!=pw.input_pwd.value`라면 Wrong출력

<br>

* check버튼클릭시, 변수 ul에 현재 URL에서 `".kr"`의 위치에 30이 곱해진 값이 저장됨
* 이 ul값과 `pw.inpit_pwd.value`(입력창에 넣은 값)이 일치하면 문제해결

<br>

* F12(개발자도구)-Console탭
```javascript
var ul=document.URL;
ul=ul.indexOf(".kr");
ul=ul*30;
> 540
```

  
  
  
