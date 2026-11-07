/* 3D हीरो: चमकता सुनहरा फोन */
(function(){
 var host=$("stage");
 try{
 var ren=new THREE.WebGLRenderer({antialias:true,alpha:true});
 ren.setPixelRatio(Math.min(devicePixelRatio,2));host.appendChild(ren.domElement);
 var sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(32,1,.1,50);cam.position.set(0,0,9.5);
 var gold=new THREE.MeshStandardMaterial({color:0xd4af37,metalness:.9,roughness:.22});
 var phone=new THREE.Group();
 var w=2,h=4,r=.3,s=new THREE.Shape();
 s.moveTo(-w/2+r,-h/2);s.lineTo(w/2-r,-h/2);s.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);s.lineTo(w/2,h/2-r);s.quadraticCurveTo(w/2,h/2,w/2-r,h/2);s.lineTo(-w/2+r,h/2);s.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);s.lineTo(-w/2,-h/2+r);s.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);
 var geo=new THREE.ExtrudeGeometry(s,{depth:.22,bevelEnabled:true,bevelThickness:.05,bevelSize:.05,bevelSegments:4,curveSegments:10});geo.translate(0,0,-.11);
 phone.add(new THREE.Mesh(geo,gold));
 var cv=document.createElement("canvas");cv.width=256;cv.height=512;var x=cv.getContext("2d");
 var g=x.createLinearGradient(0,0,0,512);g.addColorStop(0,"#2a2008");g.addColorStop(1,"#000");x.fillStyle=g;x.fillRect(0,0,256,512);
 x.fillStyle="#f6e27a";x.textAlign="center";x.font="700 46px Cinzel,Georgia,serif";x.fillText("TYAGI",128,230);x.font="500 24px Cinzel,Georgia,serif";x.fillText("MOBILE SHOP",128,272);
 x.strokeStyle="#8a6d1c";x.lineWidth=3;x.strokeRect(14,14,228,484);
 var tex=new THREE.CanvasTexture(cv);
 var scr=new THREE.Mesh(new THREE.PlaneGeometry(1.8,3.8),new THREE.MeshBasicMaterial({map:tex}));scr.position.z=.17;phone.add(scr);
 var lens=new THREE.Mesh(new THREE.CylinderGeometry(.26,.26,.08,32),new THREE.MeshStandardMaterial({color:0x111111,metalness:.6,roughness:.3}));
 lens.rotation.x=Math.PI/2;lens.position.set(-.55,1.5,-.2);phone.add(lens);
 sc.add(phone);
 var ring=new THREE.Mesh(new THREE.TorusGeometry(3.1,.03,12,140),gold);ring.rotation.x=Math.PI/2.6;sc.add(ring);
 var glow=new THREE.Mesh(new THREE.TorusGeometry(2.6,.015,8,120),new THREE.MeshBasicMaterial({color:0xf6e27a,transparent:true,opacity:.55}));glow.rotation.x=Math.PI/2.1;sc.add(glow);
 var pg=new THREE.BufferGeometry(),pts=[],i;for(i=0;i<160;i++){var a=Math.random()*6.283,rr=2.6+Math.random()*2.4;pts.push(Math.cos(a)*rr,(Math.random()-.5)*5.5,Math.sin(a)*rr-1)}
 pg.setAttribute("position",new THREE.Float32BufferAttribute(pts,3));
 var dust=new THREE.Points(pg,new THREE.PointsMaterial({color:0xf6e27a,size:.05}));sc.add(dust);
 sc.add(new THREE.AmbientLight(0xffffff,.6));
 var l1=new THREE.PointLight(0xfff0c0,1.8);l1.position.set(4,4,6);sc.add(l1);
 var l2=new THREE.PointLight(0xd4af37,1.4);l2.position.set(-5,-2,4);sc.add(l2);
 function size(){var W=host.clientWidth,H=host.clientHeight;ren.setSize(W,H);cam.aspect=W/H;cam.updateProjectionMatrix()}
 size();addEventListener("resize",size);
 var tx=0,ty=0,still=matchMedia("(prefers-reduced-motion:reduce)").matches,vis=true;
 host.addEventListener("pointermove",function(e){var b=host.getBoundingClientRect();tx=((e.clientX-b.left)/b.width-.5)*1.2;ty=((e.clientY-b.top)/b.height-.5)*.6});
 new IntersectionObserver(function(en){vis=en[0].isIntersecting}).observe(host);
 var t=0;(function loop(){requestAnimationFrame(loop);if(!vis)return;if(!still)t+=.012;
  phone.rotation.y=Math.sin(t)*.8+tx;phone.rotation.x=ty*.8;phone.position.y=Math.sin(t*1.6)*.12;
  ring.rotation.z=t*.6;glow.rotation.z=-t*.8;dust.rotation.y=t*.15;ren.render(sc,cam)})();
 }catch(e){host.style.display="none"}
})();
