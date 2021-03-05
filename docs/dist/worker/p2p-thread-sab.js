(()=>{var M=class{constructor(t,e,s){this.fov=t||Math.PI/2,this.w=e||10,this.rotation=s||{xy:0,xz:0,xw:0,yz:0,yw:0,zw:0}}project([t,e,s,h]){let[o,i,p,r]=this.rotatePoint([t,e,s,h]),c=1+r*this.fov/this.w;return[o/c,i/c,p/c]}rotate(t){Object.keys(this.rotation).forEach(e=>{this.rotation[e]=(this.rotation[e]+(t[e]||0)/1e3)%(2*Math.PI)})}rotatePoint([t,e,s,h]){let{xy:o,xz:i,xw:p,yz:r,yw:c,zw:n}=this.rotation,l=Math.cos(o),a=Math.sin(o),f=Math.cos(i),m=Math.sin(i),g=Math.cos(p),d=Math.sin(p),x=Math.cos(r),N=Math.sin(r),b=Math.cos(c),z=Math.sin(c),A=Math.cos(n),P=Math.sin(n),u=t;return t=t*l+e*a,e=e*l-u*a,u=t,t=t*f+s*m,s=s*f-u*m,u=t,t=t*g+h*d,h=h*g-u*d,u=e,e=e*x+s*N,s=s*x-u*N,u=e,e=e*b+h*z,h=h*b-u*z,u=s,s=s*A+h*P,h=h*A-u*P,[t,e,s,h]}};var O={vertices:[[1,1,1,-1/Math.sqrt(5)],[1,-1,-1,-1/Math.sqrt(5)],[-1,1,-1,-1/Math.sqrt(5)],[-1,-1,1,-1/Math.sqrt(5)],[0,0,0,Math.sqrt(5)-1/Math.sqrt(5)]],faces:[[1,2,3],[0,1,2],[0,1,3],[0,3,2],[0,4,1],[0,2,4],[0,3,4],[2,4,3],[1,3,4],[1,4,2]],cells:[[0,1,2,3],[1,5,4,9],[3,6,5,7],[2,4,6,8],[0,7,8,9]]};function F(y,t=8){let e=[],s=[],h=[],o=0,i={theta:{},phi:{},gamma:{}};for(let p=0;p<=t;p++)for(let r=0;r<=t;r++)for(let c=0;c<2*t;c++){i.theta[p]||(i.theta[p]=[]),i.phi[r]||(i.phi[r]=[]),i.gamma[c]||(i.gamma[c]=[]),i.theta[p].push(e.length),i.phi[r].push(e.length),i.gamma[c].push(e.length);let n=p*Math.PI/t,l=r*Math.PI/t,a=c*Math.PI/t;e.push([y*Math.cos(n),y*Math.sin(n)*Math.cos(l),y*Math.sin(n)*Math.sin(l)*Math.cos(a),y*Math.sin(n)*Math.sin(l)*Math.sin(a)])}for(let p in i.theta){let r=i.theta[p],c=[];for(let n=0;n<r.length/(t*2)-1;n++)for(let l=0;l<t*2;l++){let a=n*t*2,f=(n+1)*t*2;s.push([r[a+l],r[a+(l+1)%(t*2)],r[f+(l+1)%(t*2)],r[f+l%(t*2)]]),c.push(o),o++}h.push(c)}for(let p in i.phi){let r=i.phi[p],c=[];for(let n=0;n<r.length/(t*2)-1;n++)for(let l=0;l<t*2;l++){let a=n*t*2,f=(n+1)*t*2;s.push([r[a+l],r[a+(l+1)%(t*2)],r[f+(l+1)%(t*2)],r[f+l%(t*2)]]),c.push(o),o++}h.push(c)}for(let p in i.gamma)if(parseInt(p)<t){let r=i.gamma[p],c=i.gamma[parseInt(p)+t],n=[];for(let a=0;a<r.length/(t+1);a++)n.push(...r.slice(a*(t+1),(a+1)*(t+1))),n.push(...c.slice(a*(t+1),(a+1)*(t+1)).reverse());let l=[];for(let a=0;a<n.length/(2*(t+1))-1;a++)for(let f=0;f<2*(t+1);f++){let m=a*(2*(t+1)),g=(a+1)*(2*(t+1));s.push([n[m+f],n[m+(f+1)%(2*(t+1))],n[g+(f+1)%(2*(t+1))],n[g+f%(2*(t+1))]]),l.push(o),o++}h.push(l)}return{vertices:e,faces:s,cells:h}}var U=F(1);function _(y,t,e,s=8){let h=[],o=[],i=[],p=0,r={theta:{},phi:{},gamma:{}};for(let c=0;c<=s;c++)for(let n=0;n<=s;n++)for(let l=0;l<2*s;l++){r.theta[c]||(r.theta[c]=[]),r.phi[n]||(r.phi[n]=[]),r.gamma[l]||(r.gamma[l]=[]),r.theta[c].push(h.length),r.phi[n].push(h.length),r.gamma[l].push(h.length);let a=c*Math.PI/s,f=n*Math.PI/s,m=l*Math.PI/s;h.push([y*Math.cos(a),(t+y*Math.sin(a))*Math.cos(f),(e+(t+y*Math.sin(a))*Math.sin(f))*Math.cos(m),(e+(t+y*Math.sin(a))*Math.sin(f))*Math.sin(m)])}for(let c in r.theta){let n=r.theta[c],l=[];for(let a=0;a<n.length/(s*2)-1;a++)for(let f=0;f<s*2;f++){let m=a*s*2,g=(a+1)*s*2;o.push([n[m+f],n[m+(f+1)%(s*2)],n[g+(f+1)%(s*2)],n[g+f%(s*2)]]),l.push(p),p++}i.push(l)}for(let c in r.phi){let n=r.phi[c],l=[];for(let a=0;a<n.length/(s*2)-1;a++)for(let f=0;f<s*2;f++){let m=a*s*2,g=(a+1)*s*2;o.push([n[m+f],n[m+(f+1)%(s*2)],n[g+(f+1)%(s*2)],n[g+f%(s*2)]]),l.push(p),p++}i.push(l)}for(let c in r.gamma)if(parseInt(c)<s){let n=r.gamma[c],l=r.gamma[parseInt(c)+s],a=[];for(let m=0;m<n.length/(s+1);m++)a.push(...n.slice(m*(s+1),(m+1)*(s+1))),a.push(...l.slice(m*(s+1),(m+1)*(s+1)).reverse());let f=[];for(let m=0;m<a.length/(2*(s+1))-1;m++)for(let g=0;g<2*(s+1);g++){let d=m*(2*(s+1)),x=(m+1)*(2*(s+1));o.push([a[d+g],a[d+(g+1)%(2*(s+1))],a[x+(g+1)%(2*(s+1))],a[x+g%(2*(s+1))]]),f.push(p),p++}i.push(f)}return{vertices:h,faces:o,cells:i}}var q=_(.1,.5,1);function S(y,t,e=32){let s=[],h=[],o=[],i=0;for(let r=0;r<2*e;r++)for(let c=0;c<2*e;c++){let n=r*Math.PI/e,l=c*Math.PI/e;s.push([y*Math.cos(n),y*Math.sin(n),t*Math.cos(l),t*Math.sin(l)])}let p=[];for(let r=0;r<s.length;r++){let c=r+e*2;h.push([r,(r+1)%s.length,(c+1)%s.length,c%s.length]),p.push(i),i++}return o.push(p),{vertices:s,faces:h,cells:o}}var V=S(1,.5);var w=class{constructor(t,e,s){this.alive=!0,this.params=e,this.N=e.dimensions,this.vectorSuffix="xyzw",this.len=t.length,this.N>3&&(this.projector=new M(e.wFov*Math.PI/180,e.w)),this.xyz=new Float32Array(s*3),this.positions=this.N===3?this.xyz:new Float32Array(s*this.N),this.speeds=new Float32Array(this.N*s),this.accelerations=new Float32Array(this.N*s),this.masses=new Float32Array(s),this.temperatures=new Float32Array(s),t.forEach((h,o)=>this.set_orb(o,h))}params_change(t){this.projector&&(this.projector.fov=t.wFov*Math.PI/180,this.projector.w=t.w)}frog_leap(){let t=this.params.simulationSpeed,e=t*.5;for(let s=0,h=this.len;s<h;s++){let o=s*this.N;for(let i=0;i<this.N;i++)this.speeds[o+i]+=this.accelerations[o+i]*e,this.positions[o+i]+=this.speeds[o+i]*t}}aggregateCollisions(t){let e=[];for(let s=0,h=t.length;s<h;s++){let[o,i]=t[s],p=!0;for(let r=0,c=e.length;r<c;r++){let n=e[r],l=n.includes(o),a=n.includes(i);if((l||a)&&(p=!1),l!==a){let f=l?i:o;f>n[0]?n.push(f):n.unshift(f);break}}p&&e.push(o>i?[i,o]:[o,i])}return e}solveCollisions(t){for(let e=0,s=t.length;e<s;e++){let h=t[e],o=h[0],i=o*this.N;for(let p=1,r=h.length;p<r;p++){let c=h[p],n=c*this.N,l=1/(this.masses[o]+this.masses[c]);for(let a=0;a<this.N;a++)this.positions[i+a]=l*(this.positions[i+a]*this.masses[o]+this.positions[n+a]*this.masses[c]),this.speeds[i+a]=l*(this.speeds[i+a]*this.masses[o]+this.speeds[n+a]*this.masses[c]);this.temperatures[o]=l*(this.temperatures[o]*this.masses[o]+this.temperatures[c]*this.masses[c]),this.masses[o]+=this.masses[c]}}}solveEscapes(){let t=[],{escapeDistance:e}=this.params;if(!e)return t;let s=e*e;for(let h=0,o=this.len;h<o;h++){let i=h*this.N,p=0;for(let r=0;r<this.N;r++)p+=this.positions[i+r]*this.positions[i+r];p>s&&t.push(h)}return t}crunchOrbs(t){let e=0,s=0;for(;e+s<this.len;){if(t.includes(e+s)){s+=1;continue}if(s==0){e+=1;continue}let h=e*this.N,o=(e+s)*this.N;for(let i=0;i<this.N;i++)this.positions[h+i]=this.positions[o+i],this.speeds[h+i]=this.speeds[o+i],this.accelerations[h+i]=this.accelerations[o+i];this.temperatures[e]=this.temperatures[e+s],this.masses[e]=this.masses[e+s],e+=1}return this.len-s}solve(t){let e=this.solveEscapes();return t.length&&(t=this.aggregateCollisions(t),t.forEach(s=>{e.push(...s.slice(1))}),this.solveCollisions(t)),e.length&&(this.len=this.crunchOrbs(e)),this.len}async simulate(){return this.solve([])}frog_drop(){let e=this.params.simulationSpeed*.5;for(let s=0,h=this.len;s<h;s++){let o=s*this.N;for(let i=0;i<this.N;i++)this.speeds[o+i]+=this.accelerations[o+i]*e}this.projector&&this.projector.rotate(this.params)}set_orb(t,{position:e,mass:s,speed:h,temperature:o}){let i=t*this.N;for(let p=0;p<this.N;p++){let r=this.vectorSuffix[p];this.positions[i+p]=e[r]||0,this.speeds[i+p]=h[r]||0}this.masses[t]=s,this.temperatures[t]=o}grow(t){if(this.len+t.length>this.temperatures.length){console.warn("Can't grow");return}t.forEach((e,s)=>this.set_orb(this.len+s,e)),this.len+=t.length}shrink(t){if(this.len-t<0){console.warn("Can't shrink");return}this.len-=t}project(){if(this.N!==3){if(this.N===2)for(let t=0,e=this.len;t<e;t++){let s=t*2,h=s+t;this.xyz[h]=this.positions[s],this.xyz[h+1]=this.positions[s+1],this.xyz[h+2]=0}else if(this.N===4)for(let t=0,e=this.len;t<e;t++){let s=t*3,h=s+t,o=this.projector.project([this.positions[h],this.positions[h+1],this.positions[h+2],this.positions[h+3]]);this.xyz[s]=o[0],this.xyz[s+1]=o[1],this.xyz[s+2]=o[2]}}}free(){this.alive=!1,delete this.temperatures,delete this.masses,delete this.accelerations,delete this.speeds,delete this.positions,delete this.xyz}},B=w;var I=class extends B{compute2(t,e,s,h,o,i,p,r,c,n){e[0]=this.positions[i]-this.positions[h],e[1]=this.positions[i+1]-this.positions[h+1];let l=e[0]*e[0]+e[1]*e[1];r&&l<c&&n.push([s,o]);let a=this.masses[o]/(l+p);t[0]+=e[0]*a,t[1]+=e[1]*a}compute3(t,e,s,h,o,i,p,r,c,n){e[0]=this.positions[i]-this.positions[h],e[1]=this.positions[i+1]-this.positions[h+1],e[2]=this.positions[i+2]-this.positions[h+2];let l=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=Math.sqrt(l+p);r&&l<c&&n.push([s,o]);let f=this.masses[o]/(a*a*a);t[0]+=e[0]*f,t[1]+=e[1]*f,t[2]+=e[2]*f}compute4(t,e,s,h,o,i,p,r,c,n){e[0]=this.positions[i]-this.positions[h],e[1]=this.positions[i+1]-this.positions[h+1],e[2]=this.positions[i+2]-this.positions[h+2],e[3]=this.positions[i+3]-this.positions[h+3];let l=e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3];r&&l<c&&n.push([s,o]);let a=l+p,f=this.masses[o]/(a*a);t[0]+=e[0]*f,t[1]+=e[1]*f,t[2]+=e[2]*f,t[3]+=e[3]*f}compute(t,e,s,h,o,i,p,r,c){let n=this[`compute${s}`].bind(this),l=new Array(s).fill(0),a=new Array(s).fill(0);for(let f=t,m=e;f<m;f++){let g=f*s;a.fill(0);for(let d=0;d<h;d++){if(f===d)continue;let x=d*s;n(a,l,f,g,d,x,i,p,r,c)}for(let d=0;d<s;d++)this.accelerations[g+d]=a[d]*o}}async simulate(){let{gravitationalConstant:t,softening:e,collisions:s,collisionThreshold:h}=this.params,o=e*e,i=h*h,p=[];return this.compute(0,this.len,this.N,this.len,t,o,s,i,p),this.solve(p)}},v=I;var C,j,E;onmessage=function(y){if(y.data.length===3){let[n,l,a]=y.data;j=new Float32Array(l),C=new Float32Array(n),E=new Float32Array(a);return}let t=[],[e,s,h,o,i,p,r,c]=y.data;v.prototype.compute.call({positions:j,masses:E,accelerations:C,compute2:v.prototype.compute2,compute3:v.prototype.compute3,compute4:v.prototype.compute4},e,s,o,h,i,p,r,c,t),postMessage([t])};})();