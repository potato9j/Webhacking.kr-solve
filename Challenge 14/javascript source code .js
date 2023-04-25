function ck(){
  var ul=document.URL;
  ul=ul.indexOf(".kr");
  ul=ul*30;
  if(ul==pw.input_pwd.value) { location.href="?"+ul*pw.input_pwd.value; }
  else { alert("Wrong"); }
  return false;
}

// 자바스크립트 소스코드 분석
// 1. ul변수에 document.URL 할당
// 2. ul변수에 ul.indexOf(".kr") 할당
// 3. 최종적으로 ul*30으로 ul변수를 구성

// 1. indexOf() : 문자열에서 원하는 문자열을 검색하여 찾거나, 배열에서 원하는 특정 배열값의 존재 여부 등을 확인.
