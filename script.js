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

reqBut[0].addEventListener('click', () =>{
    nextRequire = prompt("다음 시간의 안내사항을 입력해주세요"+"")
    wnsqlanf.innerText=nextRequire
});

console.log(nextTime)