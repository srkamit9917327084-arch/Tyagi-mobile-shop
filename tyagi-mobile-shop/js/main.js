function $(i){return document.getElementById(i)}
function wa(t){return"https://wa.me/"+SHOP.whatsapp+"?text="+encodeURIComponent(t)}
function mk(h){var d=document.createElement("div");d.innerHTML=h.trim();return d.firstChild}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
var bg=$("bgrid"),cg=$("cgrid");
BRANDS.forEach(function(b,i){
 var inner=b.logo?'<img src="'+esc(b.logo)+'" alt="'+esc(b.name)+'" loading="lazy">':'<span class="wm gold">'+esc(b.name.toUpperCase())+'</span>';
 var a=mk('<button class="card" data-t="brand" data-i="'+i+'" data-n="'+esc(b.name.toLowerCase())+'">'+inner+'<small>मॉडल व कीमत देखें</small></button>');bg.appendChild(a)});
ACCS.forEach(function(c){
 var a=mk('<a class="card" data-t="acc" data-n="'+esc(c[0].toLowerCase())+'" target="_blank" rel="noopener"><svg viewBox="0 0 48 48" aria-hidden="true">'+c[1]+'</svg><span>'+c[0]+'</span></a>');
 a.href=wa("नमस्ते Tyagi Mobile Shop, मुझे "+c[0]+" चाहिए। उपलब्धता बताइए।");cg.appendChild(a)});
$("rev").innerHTML=REVIEWS.map(function(r){return'<div class="r"><div class="stars" aria-label="5 स्टार">★★★★★</div><p>'+esc(r.t)+'</p><small>'+esc(r.n)+'</small></div>'}).join("");

/* मॉडल शीट */
var sheet=$("sheet");
function open(i){var b=BRANDS[i];$("st").textContent=b.name;
 $("ml").innerHTML=b.models.map(function(m,k){return'<div class="model"><div><b>'+esc(b.name+" "+m[0])+'</b><span>'+(m[1]?esc(m[1]):"कीमत के लिए पूछें")+'</span></div><a class="btn solid" target="_blank" rel="noopener" data-k="'+k+'" href="'+wa("नमस्ते Tyagi Mobile Shop, मुझे "+b.name+" "+m[0]+" की कीमत और उपलब्धता बतायें।")+'">WhatsApp पर कीमत पूछें</a></div>'}).join("")+
 '<a class="btn" style="width:100%;margin-top:6px" target="_blank" rel="noopener" href="'+wa("नमस्ते Tyagi Mobile Shop, मुझे "+b.name+" के सभी मॉडल की जानकारी चाहिए।")+'">दूसरा मॉडल पूछें</a>';
 sheet.classList.add("on");$("cl").focus()}
function close(){sheet.classList.remove("on")}
bg.addEventListener("click",function(e){var c=e.target.closest(".card");if(c)open(+c.dataset.i)});
$("cl").onclick=close;sheet.addEventListener("click",function(e){if(e.target===sheet)close()});
addEventListener("keydown",function(e){if(e.key==="Escape")close()});

/* खोज और फ़िल्टर */
var f="all",q=$("q");
function apply(){var s=q.value.trim().toLowerCase(),n=0;
 document.querySelectorAll(".card").forEach(function(c){var ok=(f==="all"||c.dataset.t===f)&&(!s||c.dataset.n.indexOf(s)>-1);c.hidden=!ok;if(ok)n++});
 $("none").style.display=n?"none":"block"}
q.addEventListener("input",apply);
document.querySelectorAll(".chip").forEach(function(b){b.addEventListener("click",function(){f=b.dataset.f;
 document.querySelectorAll(".chip").forEach(function(x){x.setAttribute("aria-pressed",x===b)});apply()})});

/* संपर्क, नक्शा */
var hello=wa("नमस्ते Tyagi Mobile Shop, मुझे ऑर्डर करना है।");
document.querySelectorAll("[data-wa]").forEach(function(a){a.href=hello});
if(SHOP.phone){["callbtn","c2"].forEach(function(i){var c=$(i);c.href="tel:+"+SHOP.phone;c.hidden=false});$("ph").textContent="+"+SHOP.phone}
else if(SHOP.whatsapp)$("ph").textContent="+"+SHOP.whatsapp;
if(SHOP.address){var qs=encodeURIComponent("Tyagi Mobile Shop "+SHOP.address);$("addr").textContent=SHOP.address;
 var d=$("dir");d.href="https://www.google.com/maps/search/?api=1&query="+qs;d.hidden=false;
 $("map").innerHTML='<iframe loading="lazy" title="दुकान का नक्शा" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q='+qs+'&output=embed"></iframe>';$("map").style.padding="0"}
$("y").textContent=new Date().getFullYear();

/* कार्ड का 3D झुकाव */
document.querySelectorAll(".card").forEach(function(c){
 c.addEventListener("pointermove",function(e){if(e.pointerType==="touch")return;var r=c.getBoundingClientRect();
  c.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*16+"deg");c.style.setProperty("--rx",-((e.clientY-r.top)/r.height-.5)*16+"deg")});
 c.addEventListener("pointerleave",function(){c.style.setProperty("--rx","0deg");c.style.setProperty("--ry","0deg")})});
