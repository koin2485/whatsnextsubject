// variables

const subject = document.getElementById('subject')
const wnsqlanf = document.getElementById('wnsqlanf')
const subBut = document.getElementsByClassName('next')
const reqBut = document.getElementsByClassName('require')
const imageSource = document.getElementById('imageSource')

console.log(subBut)

var IMG_INDEX = 0;
const url = "https://peapix.com/bing/feed"

var nextTime = prompt("다음 시간의 과목을 입력해주세요"+"")
var nextRequire = prompt("다음 시간의 안내사항을 입력해주세요"+"")

// get subjects

subject.innerText="다음 시간은 " + nextTime
wnsqlanf.innerText=nextRequire

subBut[0].addEventListener('click', () =>{
    nextTime = prompt("다음 시간의 과목을 입력해주세요"+"")
    subject.innerText="다음 시간은 " + nextTime
});

reqBut[0].addEventListener('click', () =>{
    nextRequire = prompt("다음 시간의 안내사항을 입력해주세요"+"")
    wnsqlanf.innerText=nextRequire
});


function changeWallpaper(){
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    document.body.style.backgroundImage = "url('"+ data[IMG_INDEX]['fullUrl'] + "')"
    console.log(data)
    imageSource.innerText = data[IMG_INDEX]['title'] + " (" + data[IMG_INDEX]['copyright'] + ")"
  })};

changeWallpaper();

document.addEventListener('keydown', (e) => {
    console.log(e);
    if (e.key=="ArrowRight" && IMG_INDEX != 6){
        IMG_INDEX +=1
        changeWallpaper();
    } else if(e.key=="ArrowLeft" && IMG_INDEX != 0){
        IMG_INDEX+=-1
        changeWallpaper();
    }
});

document.body.style.backgroundImage=getImages('jp')[0]
