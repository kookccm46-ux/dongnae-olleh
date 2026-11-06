const areaPlaces={
  '온천1동':['동래온천','온천장 문화거리','온천천 산책길'],
  '온천2동':['금강공원','금강식물원','부산해양자연사박물관'],
  '온천3동':['동래읍성 서장대','금강공원 산책로','동래문화회관'],
  '명륜동':['동래향교','명륜1번가','동래부동헌'],
  '북산동':['복천박물관','동래읍성 북문','동래읍성 임진왜란역사관'],
  '명장2동':['명장근린공원','명장정수사업소','명장배수지 체육공원'],
  '명장1동':['명장근린공원','명장동 주민센터 주변 산책길','동래구민체육센터'],
  '수민동':['동래시장','수안인정시장','동래부 동헌'],
  '안락1동':['충렬사','온천천 시민공원','충렬사 안락서원 교육회관'],
  '안락2동':['온천천 시민공원','안락시장','안락동 생활문화공간'],
  '사직1동':['사직야구장','부산아시아드주경기장','사직종합운동장'],
  '사직2동':['사직야구장','사직단','쇠미산 산책길'],
  '사직3동':['사직종합운동장','쇠미산 산책길','사직동 생활문화공간']
};

document.querySelectorAll('.district').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.district').forEach(item=>{
    item.classList.toggle('active',item===button);
    item.setAttribute('aria-pressed',String(item===button));
  });
  const area=button.dataset.district;
  document.getElementById('district-title').textContent=area;
  document.getElementById('map-hint').hidden=true;
  document.querySelector('.place-table').hidden=false;
  document.getElementById('place-list').innerHTML=areaPlaces[area].map((place,index)=>'<tr><td>'+String(index+1).padStart(2,'0')+'</td><td>'+place+'</td></tr>').join('');
}));

const track=document.querySelector('.pick-track');
if(track){
  let offset=0,userPaused=false,hovered=false,focused=false;
  const cards=[...track.children];
  const visible=()=>window.innerWidth<500?1:window.innerWidth<800?2:5;
  const isPaused=()=>userPaused||hovered||focused||document.hidden;
  const paint=()=>{
    const gap=parseFloat(getComputedStyle(track).gap)||0;
    const cardWidth=cards[0]?.getBoundingClientRect().width||0;
    track.style.transform='translateX(-'+(offset*(cardWidth+gap))+'px)';
  };
  const move=dir=>{
    const max=Math.max(0,cards.length-visible());
    offset=dir>0?(offset>=max?0:offset+1):(offset<=0?max:offset-1);
    paint();
  };
  document.querySelectorAll('[data-slide]').forEach(button=>button.addEventListener('click',()=>move(Number(button.dataset.slide))));
  const pause=document.querySelector('.pause-button');
  pause?.addEventListener('click',()=>{
    userPaused=!userPaused;
    pause.textContent=userPaused?'▶':'Ⅱ';
    pause.setAttribute('aria-label',userPaused?'자동 재생 시작':'자동 재생 일시정지');
    pause.setAttribute('aria-pressed',String(userPaused));
  });
  track.addEventListener('mouseenter',()=>hovered=true);
  track.addEventListener('mouseleave',()=>hovered=false);
  track.addEventListener('focusin',()=>focused=true);
  track.addEventListener('focusout',event=>{if(!track.contains(event.relatedTarget))focused=false});
  setInterval(()=>{if(!isPaused())move(1)},6000);
  window.addEventListener('resize',()=>{offset=Math.min(offset,Math.max(0,cards.length-visible()));paint()});
  paint();
}

const currentPage=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.site-header nav a').forEach(link=>{
  if(link.getAttribute('href')===currentPage)link.setAttribute('aria-current','page');
});

const courseButtons=[...document.querySelectorAll('.course-switch')];
const panels=[...document.querySelectorAll('.course-panel')];
courseButtons.forEach(button=>button.addEventListener('click',()=>{
  const chosen=button.dataset.course;
  courseButtons.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  panels.forEach(panel=>{
    const active=panel.dataset.coursePanel===chosen;
    panel.hidden=!active;
    panel.classList.toggle('is-active',active);
  });
  const subtitle=document.querySelector('.course-subtitle');
  if(subtitle)subtitle.textContent=chosen==='companions'?'동반하는 인원에 따른 동래여행코스':'취향에 따라 골라보는 동래 여행 코스';
}));

const stamp=document.querySelector('.stamp-section');
if(stamp&&'IntersectionObserver'in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>stamp.classList.toggle('is-visible',entry.isIntersecting)),{threshold:.18});
  observer.observe(stamp);
}else stamp?.classList.add('is-visible');

