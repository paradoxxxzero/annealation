(()=>{var z=(r,f,g,m,A,w,B,F,a,s,d)=>{if(isNaN(r[f+6])){let t=r[f+1];if(t!==null&&t!==g){let n=g*3,c=t*3,y=a[c]-a[n],e=a[c+1]-a[n+1],M=a[c+2]-a[n+2],o=y*y+e*e+M*M,h=Math.sqrt(o+A);w&&o<F&&B.push([g,t]);let q=d[t]/(h*h*h);s[n]+=q*y,s[n+1]+=q*e,s[n+2]+=q*M}}else{let t=g*3,n=r[f+3]-a[t],c=r[f+4]-a[t+1],y=r[f+5]-a[t+2],e=Math.sqrt(n*n+c*c+y*y);if(r[f]/e<m){let o=r[f+2]/(e*e*e);s[t]+=o*n,s[t+1]+=o*c,s[t+2]+=o*y}else for(let o=0,h=8;o<h;o++)z(r,r[f+o+6],g,m,A,w,B,F,a,s,d)}};var u,N,b;onmessage=function(r){let[f,g,m,A,w,B,F,a]=r.data;if(r.data.length===3){let[t,n,c]=r.data;N=new Float32Array(n),u=new Float32Array(t),b=new Float32Array(c);return}let s=new Float32Array(a),d=[];for(let t=f;t<g;t++){let n=t*3;u[n]=0,u[n+1]=0,u[n+2]=0,z(s,0,t,m,w,B,d,F,N,u,b),u[n]*=A,u[n+1]*=A,u[n+2]*=A}postMessage([d])};})();
