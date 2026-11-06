(() => {
  'use strict';
  const asset = name => 'images5/web/' + name.replace(/\.[^.]+$/, '.webp');
  const photos = (...names) => names.map(asset);
  const places = {
    tomb: {name:'복천동 고분군', cover:'Rectangle_159.jpg', category:'history', description:'초록 언덕 사이로 이어지는 고분군.\n고대 동래의 흔적을 따라\n천천히 걸어보세요.', media:photos('gobun1.jpg','gobun2.jpg','gobun3.jpg','Rectangle_184.png')},
    museum: {name:'복천박물관', cover:'gate.jpg', category:'history', description:'복천동 고분군의 출토 유물을 만나는 곳.\n옛 동래의 생활과 문화를\n전시로 살펴보세요.', media:photos('mus1.jpg','mu2.jpg','mu3.jpg')},
    fortress: {name:'동래읍성', cover:'up.jpg', category:'history', description:'성곽을 따라 도시의 풍경을 만나는 길.\n동래의 역사와 탁 트인 전망을\n함께 즐겨보세요.', media:photos('ms1.jpg','ms2.jpg','ms3.jpg')},
    school: {name:'동래향교', cover:'HHH.jpg', category:'history', description:'배움의 역사가 깃든 조선시대 향교.\n기와지붕과 고요한 마당에서\n옛 정취를 느껴보세요.', media:photos('hyang1.jpg','hyang2.jpg','hyang3.jpg','hyang4.jpg')},
    shrine: {name:'충렬사', cover:'P4.jpeg', category:'history', description:'임진왜란 순국선열을 기리는 공간.\n차분한 경내를 걸으며\n동래의 역사를 되새겨보세요.', youtube:'UCfHan15J6E'},
    pajeon: {name:'동래할매파전', cover:'pajeon.jpg', category:'food', description:'동래의 향토음식, 부드러운 해물파전.\n오랜 세월 이어온 맛으로\n든든한 한 끼를 즐겨보세요.', youtube:'w9_EbonZnhc', source:'https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=e4b90c28-16ca-4349-857f-0ed4b0a49b6d'},
    market: {name:'동래시장', cover:'mpergqqo.jpg', category:'food', description:'골목마다 먹거리와 활기가 가득한 시장.\n여러 가게를 둘러보며\n동래의 일상을 만나보세요.', media:photos('TM1.jpg','TM2.jpg','TM3.jpg','TM4.jpg')},
    snack: {name:'신가네 호떡 김밥 떡볶이', cover:'hoho.jpg', category:'food', description:'호떡부터 김밥, 떡볶이까지.\n시장 나들이 중 들러\n친숙한 분식 한 상을 즐겨보세요.', media:photos('shingane.jpg','shingane2.jpg','shingane3.jpg')},
    pork: {name:'원카츠 동래본점', cover:'ONE.jpg', category:'food', description:'바삭한 돈카츠를 맛보는 식사 코스.\n동래시장 근처에서\n든든하게 쉬어가기 좋아요.', youtube:'ZsH92XdulzU', source:'https://www.diningcode.com/profile.php?rid=MppnHW8VdUui'},
    park: {name:'금강공원', cover:'Rectangle_124.jpg', category:'rest', description:'울창한 나무 아래로 이어지는 산책길.\n도심 가까이에서 숲의 여유와\n계절의 색을 만나보세요.', media:photos('guemkang.jpg','gk.jpg','gk2.jpg')},
    woo: {name:'우장춘기념관', cover:'woo3.jpg', category:'rest', description:'우장춘 박사의 삶과 연구를 만나는 곳.\n전시를 둘러보고\n주변에서 잠시 쉬어가세요.', media:photos('woo1.jpg','woo2.jpg','woo4.jpg','woojang.jpg')},
    stream: {name:'온천천 시민공원', cover:'ssi.jpg', category:'rest', description:'물길을 따라 이어지는 도심 산책로.\n봄꽃과 초록 풍경 사이로\n가볍게 걸으며 쉬어가세요.', media:photos('hacheoncheon.jpg','haha1.JPG','haha2.jpg')},
    lessai: {name:"르쎄 L’essai", cover:'lessai.jpg', category:'cafe', description:'온천천 곁에서 즐기는 커피와 케이크.\n산책 뒤 달콤한 디저트와 함께\n여유로운 시간을 보내보세요.', media:photos('cafw3.jpg','cafe4.jpg','cafe2.jpg'), source:'https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=cb3c8531-c3e3-400d-8e8a-9f97c6a59a69'},
    cafeStreet: {name:'온천천 카페거리', cover:'CS banch.jpg', category:'cafe', description:'온천천을 따라 이어지는 카페 나들이.\n골목의 작은 가게와 풍경 속에서\n취향에 맞는 쉼표를 찾아보세요.', media:photos('cs2..JPG','cs3..JPG','cs33.JPG'), source:'https://triple.guide/attractions/9e1cce11-26c2-46ff-9fd6-a925cc21517d'},
    marine: {name:'부산해양자연사박물관', cover:'Rectangle_188.jpg', category:'history', description:'다채로운 해양 생물 표본을 만나는 곳.\n아이와 함께 전시를 둘러보며\n바다의 세계를 발견해보세요.', media:photos('cg2.jpg','V.jpg','sg.JPG')},
    science: {name:'장영실 과학동산', cover:'Rectangle_190.jpg', category:'rest', description:'옛 과학기구를 만나는 야외 공간.\n장영실의 발명 이야기를 따라\n가족과 함께 둘러보세요.', media:photos('Rectangle_190.jpg','img_1_1_2.jpg')},
    private: {name:'사생활 동래점', coverUrl:'images5/web/sasaenghwal.webp', category:'food', description:'파스타와 피자, 브런치를 즐기는 공간.\n친구와 식사하고 이야기하며\n느긋하게 머물러보세요.', media:['images5/web/sasaenghwal.webp'], source:'https://xn--vf4bods13e.com/'},
    pefe: {name:'카페 페페', coverUrl:'images5/web/pefe.webp', category:'cafe', description:'온천천 산책과 함께 즐기는 디저트 카페.\n크루아상과 스콘, 커피로\n달콤한 휴식을 더해보세요.', media:['images5/web/pefe.webp'], source:'https://breadly.kr/bakeries/cmuo9i6pk01460161wpim1k3c'}
  };
  const added = (...names) => names.map(name=>'images5/nov2/'+name);
  places.market.media=photos('TM2.jpg','TM3.jpg','TM4.jpg');
  delete places.snack.media;
  places.snack.youtube='OPSGiECLnjA';
  places.stream.media=[...photos('haha1.JPG','haha2.jpg'),...added('hacheon6.jpg','hacheon7.jpg','hacheon8.jpg')];
  places.lessai.media=[...photos('cafw3.jpg','cafe4.jpg'),...added('cout3.jpg','cout2.jpg')];
  places.science.media=added('young1.jpg','young2.jpg','young3.jpg');
  const groups = {
    theme:[
      {label:'역사 따라 걷기',ids:['tomb','museum','fortress','school','shrine'],distance:'3.7km',time:'16분'},
      {label:'동래 미식 여행',ids:['pajeon','market','snack','pork'],distance:'0.7km',time:'4분'},
      {label:'초록 쉼표 여행',ids:['park','woo','stream','lessai'],distance:'7.6km',time:'32분'}
    ],
    companion:[
      {label:'혼자서 느긋하게',ids:['stream','fortress','market','cafeStreet'],distance:'8.6km',time:'34분'},
      {label:'가족과 함께',ids:['marine','park','science','market'],distance:'5.7km',time:'20분'},
      {label:'친구와 함께',ids:['fortress','market','private','cafeStreet'],distance:'7.6km',time:'28분'}
    ]
  };
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const cover = p => p.coverUrl || asset(p.cover);
  function el(tag, className, text) {
    const node=document.createElement(tag); if(className)node.className=className;
    if(text!==undefined)node.textContent=text; return node;
  }
  function image(src,alt,lazy=true) {
    const img=el('img');img.src=src;img.alt=alt;img.decoding='async';
    if(lazy)img.loading='lazy';return img;
  }
  function button(label, className, action) {
    const b=el('button',className,label);b.type='button';b.addEventListener('click',action);return b;
  }
  document.addEventListener('error',event=>{
    const img=event.target;
    if(img.tagName==='IMG' && !img.dataset.failed){
      img.dataset.failed='true';img.classList.add('image-unavailable');
      const note=el('span','image-error','사진을 불러오지 못했습니다');img.after(note);
    }
  },true);

  // Discovery: all places form a continuous, photo-only strip. Categories are manual.
  const viewport=document.querySelector('.discovery-viewport');
  const track=document.querySelector('.discovery-track');
  const status=document.querySelector('.discovery-status');
  const pause=document.querySelector('[data-discovery-pause]');
  let category='all', paused=reduced.matches, hovering=false, lastTime=0, offset=0, cycleWidth=0;
  let activePlaces=[];
  function makeCard(p,copy=false){
    const card=el('article','place-card');card.append(image(cover(p),p.name,false));
    if(category!=='all'){
      card.append(el('h3','',p.name),el('p','',p.description));
      if(p.source){const a=el('a','place-source','장소 안내 ↗');a.href=p.source;a.target='_blank';a.rel='noopener noreferrer';card.append(a);}
    }
    if(copy)card.setAttribute('aria-hidden','true');
    return card;
  }
  function setCategory(value){
    category=value;offset=0;lastTime=0;track.style.transform='';viewport.scrollLeft=0;
    activePlaces=Object.values(places).filter(p=>value==='all'||p.category===value);
    track.replaceChildren(...activePlaces.map(p=>makeCard(p)));
    if(value==='all')track.append(...activePlaces.map(p=>makeCard(p,true)));
    viewport.classList.toggle('is-flowing',value==='all');
    document.querySelectorAll('[data-category]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.category===value)));
    pause.hidden=value!=='all';pause.textContent=paused?'재생':'일시정지';pause.setAttribute('aria-pressed',String(paused));
    document.querySelectorAll('[data-discovery-step]').forEach(b=>b.hidden=value==='all');
    status.textContent=value==='all'?'동래의 모든 순간을 한눈에':`${activePlaces.length}곳 · 사진을 옆으로 넘겨보세요`;
    requestAnimationFrame(measure);
  }
  function measure(){if(category==='all'&&track.children[activePlaces.length])cycleWidth=track.children[activePlaces.length].offsetLeft-track.children[0].offsetLeft;}
  new ResizeObserver(measure).observe(viewport);
  document.querySelectorAll('[data-category]').forEach(b=>b.addEventListener('click',()=>setCategory(b.dataset.category)));
  pause.addEventListener('click',()=>{paused=!paused;pause.textContent=paused?'재생':'일시정지';pause.setAttribute('aria-pressed',String(paused));});
  viewport.addEventListener('mouseenter',()=>hovering=true);viewport.addEventListener('mouseleave',()=>hovering=false);
  viewport.addEventListener('focusin',()=>hovering=true);viewport.addEventListener('focusout',()=>hovering=false);
  document.querySelectorAll('[data-discovery-step]').forEach(b=>b.addEventListener('click',()=>{
    const amount=viewport.clientWidth*.85*Number(b.dataset.discoveryStep);
    const max=viewport.scrollWidth-viewport.clientWidth;
    const left=amount>0&&viewport.scrollLeft>=max-3?0:amount<0&&viewport.scrollLeft<=3?max:viewport.scrollLeft+amount;
    viewport.scrollTo({left,behavior:reduced.matches?'instant':'smooth'});
  }));
  function animate(time){
    const delta=lastTime?Math.min(time-lastTime,50):0;lastTime=time;
    if(category==='all'&&!paused&&!hovering&&!document.hidden&&cycleWidth>0){
      offset=(offset+delta*.024)%cycleWidth;track.style.transform=`translate3d(${-offset}px,0,0)`;
    }
    requestAnimationFrame(animate);
  }
  setCategory('all');requestAnimationFrame(animate);

  // Load the YouTube API once, only when a video stop is selected.
  let youtubePromise;
  function youtubeReady(){
    if(window.YT?.Player)return Promise.resolve(window.YT);
    if(!youtubePromise)youtubePromise=new Promise((resolve,reject)=>{
      window.onYouTubeIframeAPIReady=()=>resolve(window.YT);
      const script=document.createElement('script');script.src='https://www.youtube.com/iframe_api';script.onerror=reject;document.head.append(script);
    });
    return youtubePromise;
  }
  class Course {
    constructor(root){
      this.root=root;this.routes=groups[root.dataset.course];this.routeIndex=0;this.stopIndex=0;this.slide=0;this.paused=reduced.matches;this.token=0;this.player=null;this.playerReady=false;this.timer=null;this.visible=false;
      this.tabs=root.querySelector('.course-tabs');this.list=root.querySelector('.course-stops');this.screen=root.querySelector('.course-screen');this.count=root.querySelector('.media-count');this.play=root.querySelector('[data-media-pause]');
      this.routes.forEach((r,i)=>this.tabs.append(button(r.label,'pill',()=>this.setRoute(i))));
      root.querySelector('[data-media-prev]').addEventListener('click',()=>this.step(-1));
      root.querySelector('[data-media-next]').addEventListener('click',()=>this.step(1));
      this.play.addEventListener('click',()=>{this.paused=!this.paused;this.updatePlayback();});
      root.querySelectorAll('[data-stops-step]').forEach(b=>b.addEventListener('click',()=>this.list.scrollBy({left:this.list.clientWidth*.8*Number(b.dataset.stopsStep),behavior:reduced.matches?'instant':'smooth'})));
      new IntersectionObserver(entries=>{this.visible=entries[0].isIntersecting;this.updatePlayback();},{threshold:.15}).observe(root);
      document.addEventListener('visibilitychange',()=>this.updatePlayback());
      this.setRoute(0);
    }
    setRoute(i){
      this.routeIndex=i;const route=this.routes[i];
      [...this.tabs.children].forEach((b,j)=>b.setAttribute('aria-pressed',String(j===i)));
      this.root.querySelector('.route-count').textContent=route.ids.length+'곳';
      this.root.querySelector('.route-distance').textContent=route.distance;
      this.root.querySelector('.route-time').textContent=route.time;
      this.list.replaceChildren(...route.ids.map((id,j)=>{
        const p=places[id],b=button('','stop-button',()=>this.selectStop(j));
        b.append(image(cover(p),p.name),el('span','stop-name',`${String(j+1).padStart(2,'0')}  ${p.name}`));
        b.setAttribute('aria-controls',this.screen.id);return b;
      }));
      this.list.scrollLeft=0;this.selectStop(0);
    }
    selectStop(index){
      this.stopIndex=index;this.slide=0;this.paused=reduced.matches;this.token++;
      clearInterval(this.timer);this.player?.destroy();this.player=null;this.playerReady=false;
      const id=this.routes[this.routeIndex].ids[index];
      this.place=places[id];
      if(id==='park')this.place={...this.place,media:[...added('gggg.jpg'),...photos('gk.jpg','gk2.jpg'),...added('gg.jpg','ggg.jpg')]};
      [...this.list.children].forEach((b,i)=>b.setAttribute('aria-pressed',String(i===index)));
      this.root.querySelector('.media-title').textContent=this.place.name;
      const link=this.root.querySelector('.video-link');link.hidden=!this.place.youtube;
      link.href=this.place.youtube?'https://www.youtube.com/watch?v='+this.place.youtube:'#';
      const isVideo=!!this.place.youtube;
      this.root.querySelector('[data-media-prev]').hidden=isVideo;
      this.root.querySelector('[data-media-next]').hidden=isVideo;
      if(isVideo)this.showVideo();else this.showPhoto();
      this.updatePlayback();
    }
    showPhoto(){
      this.screen.replaceChildren(image(this.place.media[this.slide],`${this.place.name} 사진 ${this.slide+1}`,false));
      this.count.textContent=`${String(this.slide+1).padStart(2,'0')} / ${String(this.place.media.length).padStart(2,'0')}`;
      const single=this.place.media.length<2;
      this.play.disabled=single;
      this.root.querySelector('[data-media-prev]').disabled=single;
      this.root.querySelector('[data-media-next]').disabled=single;
    }
    async showVideo(){
      const token=this.token;this.play.disabled=false;this.count.textContent='음소거 · 1.0×';
      const mount=el('div');this.screen.replaceChildren(mount);
      const iframe=document.createElement('iframe');
      const params=new URLSearchParams({autoplay:'1',mute:'1',playsinline:'1',controls:'0',disablekb:'1',fs:'0',rel:'0',enablejsapi:'1',loop:'1',playlist:this.place.youtube});
      if(location.protocol.startsWith('http'))params.set('origin',location.origin);
      iframe.src=`https://www.youtube.com/embed/${this.place.youtube}?${params}`;
      iframe.tabIndex=-1;iframe.title=this.place.name+' 소개 영상';iframe.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';iframe.allowFullscreen=true;iframe.referrerPolicy='strict-origin-when-cross-origin';
      mount.replaceWith(iframe);
      try{
        const YT=await youtubeReady();if(token!==this.token)return;
        this.player=new YT.Player(iframe,{events:{
          onReady:e=>{if(token!==this.token)return;e.target.mute();e.target.setPlaybackRate(1);this.playerReady=true;this.updatePlayback();},
          onError:()=>{if(token!==this.token)return;this.screen.replaceChildren(el('div','video-error','이 영상은 여기에서 재생할 수 없습니다. 아래 ‘YouTube에서 보기’로 시청해 주세요.'));this.play.disabled=true;}
        }});
      }catch{if(token===this.token){this.play.disabled=true;this.count.textContent='YouTube 플레이어에서 재생을 조절하세요';}}
    }
    step(direction){if(this.place.youtube)return;this.slide=(this.slide+direction+this.place.media.length)%this.place.media.length;this.showPhoto();this.updatePlayback();}
    updatePlayback(){
      clearInterval(this.timer);const run=!this.paused&&this.visible&&!document.hidden;
      this.play.textContent=this.paused?'재생':'일시정지';this.play.setAttribute('aria-pressed',String(this.paused));
      if(this.place?.youtube){
        if(this.playerReady&&this.player?.playVideo&&this.player?.pauseVideo){if(run)this.player.playVideo();else this.player.pauseVideo();}
      }else if(run&&this.place?.media.length>1)this.timer=setInterval(()=>this.step(1),5500);
    }
  }
  document.querySelectorAll('[data-course]').forEach(root=>new Course(root));
})();


