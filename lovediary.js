// $('.logo').attr("src","images/logo/lovediary_logo_dark.png")
// document.getElementsByClassName("logo")[0].src='images/logo/lovediary_logo_dark.png'
document.getElementById("logo").src='images/logo/lovediary_logo_dark.png'

$('.tab_menu_btn').on('click',function(){
  // 버튼에 on class 넣고 빼기
  $('.tab_menu_btn').removeClass('on');
  $(this).addClass('on')
  // 컨텐츠를 전부 제거 후 인덱스에 맞는 컨텐츠 노출
  var idx = $('.tab_menu_btn').index(this);

  $('.tab_box').hide();
  $('.tab_box').eq(idx).show();
  $('#clockdiv').hide();
});

// function myFunction(e) {
//   var elems = document.querySelector(".active");
//   if(elems !== null){
//    elems.classList.remove("active");
//   }
//  e.target.className = "tab_menu_btn active";
// }
//
// const hidden_box = document.getElementsByClassName('tab_box');
// const show_box = document.getElementsByClassName('on');
//
// for (var i = 0; i < hidden_box.length; i ++) {
//   hidden_box[i].style.display = 'none';
//   show_box[0].style.display = 'block';
// }
// document.getElementById('clockdiv').style.display = 'none';





$(window).scroll(function(){
  num = $(window).scrollTop();

  if(num<1){
    $('.logo').css("padding-right","0")
    $('.logo').css("background-color","transparent")
    $('.openicon').css("color","#000000")
    $('.logo').attr("src","images/logo/lovediary_logo_dark.png")
  }
  else {
    $('.logo').css("padding-right","100%")
    $('.logo').css("background-color","#000000")
    $('.openicon').css("color","#FFFFFF")
    $('.logo').attr("src","images/logo/lovediary_logo_white.png")
  }
});

function openNav() {
  document.getElementById("mySidenav").style.width = "15vw";
  document.getElementById("main").style.marginLeft = "15vw";
  document.getElementsByClassName("logo")[0].style.left = "15vw";
  // document.getElementsByClassName("sidenav")[0].style.width = "250px";
  // document.getElementsByClassName("myMain")[0].style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementsByClassName("logo")[0].style.left = "0";
  // document.getElementsByClassName("sidenav")[0].style.width = "0";
  // document.getElementsByClassName("myMain")[0].style.marginLeft= "0";
}

function getTimeRemaining(startingtime) {
  const total = Date.parse(new Date()) - Date.parse(startingtime) + (9 * 60 * 60 * 1000) ;
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, startingtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(startingtime);

    daysSpan.innerHTML = (1 + t.days + " 일 ");
    hoursSpan.innerHTML = ('0' + t.hours + " 시간 ").slice(-6);
    minutesSpan.innerHTML = ('0' + t.minutes + " 분 ").slice(-5);
    secondsSpan.innerHTML = ('0' + t.seconds + " 초 ").slice(-5);

    }
    updateClock();
    setInterval(updateClock, 1000);
  }

const startingline = new Date("2020-09-20");
initializeClock('clockdiv', startingline);
