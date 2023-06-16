### [소스코드]

```javascript
<script>
  alert("Access_Denied");
  location.href='/';
  document.write("<a href=?getFlag>[Get Flag]</a>");
</script>
```

<br>

### [소스코드 분석]

* document.write 안에 <a>태그로 어떤 링크가 나타나 있음.
    * `<a>` : html에서 사용될때 클릭하면 내부에 href로 감싸진 부분으로 이동시켜주는 태크

* alert message : Access_Denied -> 홈으로 롤백

1. F12(개발자도구)에서 webhacking.kr사이트의 자바스크립트 차단시키기

    * 기본주소창 : https://webhacking.kr/challenge/js-2/
    * 해결법 : 기본 주소에 `?getFlag` 입력
