(()=>{var k=(r,u,A,F,j,M,q,b,f,y,g)=>{if(isNaN(r[u+5])){let t=r[u+1];if(t!==null&&t!==A){let n=A*2,o=t*2,m=f[o]-f[n],N=f[o+1]-f[n+1],z=m*m+N*N;M&&z<b&&q.push([A,t]);let w=g[t]/(z+j);y[n]+=w*m,y[n+1]+=w*N}}else{let t=A*2,n=r[u+3]-f[t],o=r[u+4]-f[t+1],m=n*n+o*o;if(u.size*u.size<F*F*m){let z=r[u+2]/m;y[t]+=z*n,y[t+1]+=z*o}else for(let z=0,w=4;z<w;z++)k(r,r[u+z+5],A,F,j,M,q,b,f,y,g)}},x=(r,u,A,F,j,M,q,b,f,y,g)=>{if(isNaN(r[u+6])){let t=r[u+1];if(t!==null&&t!==A){let n=A*3,o=t*3,m=f[o]-f[n],N=f[o+1]-f[n+1],z=f[o+2]-f[n+2],w=m*m+N*N+z*z,B=Math.sqrt(w+j);M&&w<b&&q.push([A,t]);let I=g[t]/(B*B*B);y[n]+=I*m,y[n+1]+=I*N,y[n+2]+=I*z}}else{let t=A*3,n=r[u+3]-f[t],o=r[u+4]-f[t+1],m=r[u+5]-f[t+2],N=Math.sqrt(n*n+o*o+m*m);if(r[u]/N<F){let w=r[u+2]/(N*N*N);y[t]+=w*n,y[t+1]+=w*o,y[t+2]+=w*m}else for(let w=0,B=8;w<B;w++)x(r,r[u+w+6],A,F,j,M,q,b,f,y,g)}},D=(r,u,A,F,j,M,q,b,f,y,g)=>{if(isNaN(r[u+7])){let t=r[u+1];if(t!==null&&t!==A){let n=A*4,o=t*4,m=f[o]-f[n],N=f[o+1]-f[n+1],z=f[o+2]-f[n+2],w=f[o+3]-f[n+3],B=m*m+N*N+z*z+w*w,I=B+j;M&&B<b&&q.push([A,t]);let v=g[t]/(I*I);y[n]+=v*m,y[n+1]+=v*N,y[n+2]+=v*z,y[n+3]+=v*w}}else{let t=A*4,n=r[u+4]-f[t],o=r[u+4]-f[t+1],m=r[u+5]-f[t+2],N=r[u+6]-f[t+3],z=n*n+o*o+m*m+N*N;if(u.size*u.size<F*F*z){let B=r[u+2]/(z*z);y[t]+=B*n,y[t+1]+=B*o,y[t+2]+=B*m,y[t+3]+=B*N}else for(let B=0,I=16;B<I;B++)D(r,r[u+B+7],A,F,j,M,q,b,f,y,g)}};onmessage=function(r){let[u,A,F,j,M,q,b,f,y,g,t,n]=r.data,o=new Float32Array(g),m=new Float32Array(y),N=new Float32Array(t),z=new Float32Array(n),w=[],B={2:k,3:x,4:D}[F];for(let I=u;I<A;I++){let v=I*F;for(let C=0;C<F;C++)m[v+C]=0;B(z,0,I,j,q,b,w,f,o,m,N);for(let C=0;C<F;C++)m[v+C]*=M}postMessage([y,u,A,w])};})();
