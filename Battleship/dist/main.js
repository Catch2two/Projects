(()=>{var t={218:(t,s,i)=>{const h=i(385);t.exports=class{constructor(t){this.gameboard=new h,this.attackedPositions=[]}botAttackNode(){const t={x:Math.floor(Math.random()*this.gameboard.width),y:Math.floor(Math.random()*this.gameboard.height)};return this.attackedPositions.includes(t)?this.botAttackeNode():(this.attackedPositions.push(t),t)}attack(){const t=this.botAttackNode(),s=this.gameboard.receiveAttack(t.x,t.y);if(s){const i=this.gameboard.getShip(t.x,t.y);for(i.hit=!0,i.isSunk()&&(this.gameboard.ships[t.x][t.y]=null);!i.isSunk();)s=this.gameboard.receiveAttack(t.x,t.y),i.hit=!0}return s}hasWon(){return this.gameboard.allShipsSunk()}}},385:(t,s,i)=>{const h=i(152);t.exports=class{constructor(t,s){this.width=t,this.height=s,this.board=[];for(let t=0;t<this.width;t++){this.board[t]=[];for(let s=0;s<this.height;s++)this.board[t][s]=0}this.ships=[];for(let t=0;t<this.width;t++){this.ships[t]=[];for(let s=0;s<this.height;s++)this.ships[t][s]=null}this.missedAttacks=[]}placeShip(t,s,i,e){if(t<0||t>=this.width||s<0||s>=this.height)throw new Error("Invalid coordinates");if("horizontal"!==e&&"vertical"!==e)throw new Error("Invalid orientation");const r=new h(i,e);for(let h=0;h<i;h++)"horizontal"===e?(this.board[t+h][s]=1,this.ships[t+h][s]=r):(this.board[t][s+h]=1,this.ships[t][s+h]=r)}hasShipAt(t,s){return 1===this.board[t][s]}getShip(t,s){const i=this.ships[t][s];return void 0===i?null:i}receiveAttack(t,s){const i=this.getShip(t,s);return!(i&&i.isSunk||(i?(i.shipHit(),i.isSunk&&(i.isSunk=!0,this.ships[t][s]=null),console.log(`The ship has been hit ${i.hits} times.`),0):(this.missedAttacks.push({x:t,y:s}),1)))}getMissedAttacks(){return this.missedAttacks}allShipsSunk(){let t=0;for(let s=0;s<this.width;s++)for(let i=0;i<this.height;i++){const h=this.ships[s][i];h&&!h.isSunk&&t++}return 0===t}}},593:t=>{for(;!player.hasWon()&&!bot.hasWon();){if(player.attack(),player.hasWon()){console.log("Bot wins!");break}if(bot.attack(),bot.hasWon()){console.log("Player wins!");break}}t.exports=gameplay},469:t=>{t.exports=class{constructor(t,s){this.name=t,this.gameboard=s,this.ships=[]}attack(t,s){return this.gameboard.receiveAttack(t,s)}hasWon(){return this.gameboard.allShipsSunk()}}},152:t=>{t.exports=class{constructor(t,s){this.name=t,this.size=s,this.hit=!1,this.hits=0,this.isSunk=!1}shipHit(){this.hit=!0,this.hits++,this.updateSunkStatus()}updateSunkStatus(){this.hits===this.size&&(this.isSunk=!0)}getName(){return this.name}getSize(){return this.size}getHit(){return this.hit}getHits(){return this.hits}isSunk(){return this.isSunk}}}},s={};function i(h){var e=s[h];if(void 0!==e)return e.exports;var r=s[h]={exports:{}};return t[h](r,r.exports,i),r.exports}(()=>{const t=i(469),s=(i(218),i(152),i(385));i(593),new t,new s,console.log("Start Here!!")})()})();