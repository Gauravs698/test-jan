document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('h1')[0]
<h1>​I'm AAKASH HANDA​</h1>​
document.getElementsByTagName('h1')[0].innerText
"I'm AAKASH HANDA"
document.getElementsByTagName('h1')[0].innerText="I m from Naresh It"
"I m from Naresh It"
document.getElementsByTagName('h1')[0].style.color="red"
"red"
document.getElementsByTagName('h1')[0].style.visibility="hidden"
"hidden"
document.getElementsByTagName('h1')[0].style.visibility="visible"
"visible"
document.getElementsByClassName('scroll')
HTMLCollection(5) [a.scroll, a.scroll, a.scroll, a.scroll, a.scroll]
document.getElementsByClassName('scroll')[0]
<a href=​"#skills" class=​"scroll">​Skills​</a>​
document.getElementsByClassName('scroll')[0].innerText
"Skills"
document.getElementsByClassName('scroll')[0].innerText="Tech"
"Tech"

var a = document.getElementsByClassName('scroll')[0];
a.getElementsByClassName('abc')[0]