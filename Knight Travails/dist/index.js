(()=>{let o={x:0,y:0},l=[[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[-1,2],[1,-2],[-1,-2]],n=function(){let o=new Array(6);for(let l=0;l<6;l++){o[l]=new Array(8);for(let n=0;n<8;n++)o[l][n]=0}return o}();console.log("\n"),console.log("Knight Moves: "),console.log(l),console.log("Knight position on Board:"),console.log("\n"),n[o.x][o.y]="Knight",console.log(n);const e=function(o,l){let n=[[2,1],[2,-1],[-2,1],[-2,-1],[1,2],[-1,2],[1,-2],[-1,-2]],e=new Set,t=[[0,0]],r=0;for(;t.length;){let o=[];for(;t.length;){let l=t.shift(),s=l[0],g=l[1];if(7===s&&1===g)return console.log(t),r;for(let l of n){let n=s+l[0],t=g+l[1];e.has(n+","+t)||(e.add(n+","+t),o.push([n,t]))}}r++,t=o}}();console.log(e)})();