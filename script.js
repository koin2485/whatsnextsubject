subject = document.getElementById('subject')
wnsqlanf = document.getElementById('wnsqlanf')
subBut = document.getElementsByClassName('next')
reqBut = document.getElementsByClassName('require')

console.log(subject,wnsqlanf,subBut,reqBut)

var nextTime = prompt("다음 시간의 과목을 입력해주세요"+"")
var nextRequire = prompt("다음 시간의 안내사항을 입력해주세요"+"")

subject.innerText="다음 시간은 " + nextTime
wnsqlanf.innerText=nextRequire

subBut[0].addEventListener('click', () =>{
    nextTime = prompt("다음 시간의 과목을 입력해주세요"+"")
    subject.innerText="다음 시간은 " + nextTime
});

async function getImages(lang) {
  const response = await fetch("https://peapix.com/bing/feed?country="+lang);
  const imgs = await response.json();
  return imgs;
}

reqBut[0].addEventListener('click', () =>{
    nextRequire = prompt("다음 시간의 안내사항을 입력해주세요"+"")
    wnsqlanf.innerText=nextRequire
});

url="https://peapix.com/bing/feed?country=jp"

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    document.body.style.backgroundImage = "url('"+ data[0]['fullUrl'] + "')"
    console.log(data[0]['title'])
  });

document.body.style.backgroundImage=getImages('jp')[0]

console.log(nextTime)
