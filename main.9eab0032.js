(self.webpackChunkninjarion_land=self.webpackChunkninjarion_land||[]).push([[179],{757:function(t,e,i){t.exports=i(666)},285:function(t,e,i){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function r(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function h(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c=function(){function t(){o(this,t),h(this,"isActive",!1),h(this,"isPressed",!1)}return a(t,[{key:"getInput",value:function(t){this.isPressed!==t&&(this.isActive=t),this.isPressed=t}}]),t}(),u=function(){function t(){var e=this;o(this,t),h(this,"down",new c),h(this,"left",new c),h(this,"right",new c),h(this,"up",new c),h(this,"shift",new c),h(this,"handleKeyDownUp",(function(t){e.keyDownUp(t)}))}return a(t,[{key:"keyDownUp",value:function(t){var e="keydown"===t.type;switch(t.keyCode){case 37:this.left.getInput(e);break;case 32:this.up.getInput(e);break;case 39:this.right.getInput(e);break;case 40:this.down.getInput(e);break;case 16:this.shift.getInput(e)}}}]),t}(),l=function(){function t(e){o(this,t),this.buffer=document.createElement("canvas").getContext("2d"),this.context=e.getContext("2d")}return a(t,[{key:"clearCanvas",value:function(){this.drawRectangle(0,0,this.buffer.canvas.width,this.buffer.canvas.height,"#060606")}},{key:"drawRectangle",value:function(t,e,i,n,r){this.buffer.fillStyle=r,this.buffer.fillRect(Math.round(t),Math.round(e),i,n)}},{key:"drawCircle",value:function(t,e,i,n){this.buffer.beginPath(),this.buffer.arc(t,e,i,0,2*Math.PI),this.buffer.fillStyle=n,this.buffer.fill(),this.buffer.closePath()}},{key:"drawImage",value:function(t,e,i,n,r){this.buffer.drawImage(r,t,e,i,n)}},{key:"drawCropImage",value:function(t,e,i,n,r,o,s,a,h){this.buffer.drawImage(h,t,e,i,n,r,o,s,a)}},{key:"render",value:function(){this.context.drawImage(this.buffer.canvas,0,0,this.buffer.canvas.width,this.buffer.canvas.height,0,0,this.context.canvas.width,this.context.canvas.height)}},{key:"resize",value:function(t,e,i){e/t>i?(this.context.canvas.width=t,this.context.canvas.height=t*i):(this.context.canvas.width=e/i,this.context.canvas.height=e),this.context.imageSmoothingEnabled=!1}}]),t}(),f=function(){function t(e,i,n){var r=this;o(this,t),h(this,"accumulatedTime",0),h(this,"animationFrameRequest",void 0),h(this,"time",void 0),h(this,"updated",!1),h(this,"handleRun",(function(t){r.run(t)})),this.timeStep=e,this.update=n,this.render=i}return a(t,[{key:"run",value:function(t){for(this.accumulatedTime+=t-this.time,this.time=t,this.accumulatedTime>=3*this.timeStep&&(this.accumulatedTime=this.timeStep);this.accumulatedTime>=this.timeStep;)this.accumulatedTime-=this.timeStep,this.update(t),this.updated=!0;this.updated&&(this.updated=!1,this.render(t)),this.animationFrameRequest=window.requestAnimationFrame(this.handleRun)}},{key:"start",value:function(){this.accumulatedTime=this.timeStep,this.time=window.performance.now(),this.handleRun(this.time)}},{key:"stop",value:function(){window.cancelAnimationFrame(this.animationFrameRequest)}}]),t}(),g=function(){function t(e,i,n){o(this,t),this.position={x:e,y:i},this.velocity={x:0,y:0},this.image=n,this.width=n.width,this.height=n.height}return a(t,[{key:"moveRight",value:function(t){this.velocity.x+=5*t}},{key:"moveLeft",value:function(t){this.velocity.x-=5*t}},{key:"top",get:function(){return this.position.y}},{key:"right",get:function(){return this.position.x+this.width}},{key:"bottom",get:function(){return this.position.y+this.height}},{key:"left",get:function(){return this.position.x}},{key:"specs",get:function(){return[this.position.x,this.position.y,this.width,this.height,this.image]}},{key:"update",value:function(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y}}]),t}(),p=function(){function t(e,i,n){o(this,t),this.position={x:e,y:i},this.velocity={x:0,y:0},this.image=n,this.width=580,this.height=125}return a(t,[{key:"moveRight",value:function(){this.velocity.x+=5}},{key:"moveLeft",value:function(){this.velocity.x-=5}},{key:"top",get:function(){return this.position.y}},{key:"right",get:function(){return this.position.x+this.width}},{key:"bottom",get:function(){return this.position.y+this.height}},{key:"left",get:function(){return this.position.x}},{key:"specs",get:function(){return[this.position.x,this.position.y,this.width,this.height,this.image]}},{key:"update",value:function(){this.position.x+=this.velocity.x}}]),t}();function d(t,e,i,n,r,o,s){try{var a=t[o](s),h=a.value}catch(t){return void i(t)}a.done?e(h):Promise.resolve(h).then(n,r)}function y(t){return function(){var e=this,i=arguments;return new Promise((function(n,r){var o=t.apply(e,i);function s(t){d(o,n,r,s,a,"next",t)}function a(t){d(o,n,r,s,a,"throw",t)}s(void 0)}))}}var v=i(757),m=i.n(v),w=function(){var t=y(m().mark((function t(e){var i;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=new Image).src=e,t.next=4,i.decode();case 4:return t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(t){var e,i,n=t.widthA;return 0===(i=(e={xA:t.heightA,xB:n,yA:t.heightB}).xA)?0:e.xB/i*e.yA},b=function(){function t(e){o(this,t),h(this,"lifes",3),h(this,"score",0),h(this,"height",150),h(this,"lastDirection","right"),h(this,"direction","right"),h(this,"airResistance",0),h(this,"currentImageFrame",0),this.sprites=e,this.image=e.idleRight,this.width=k({widthA:this.image.width,heightA:this.image.height,heightB:this.height})}return a(t,[{key:"init",value:function(){this.velocity={x:0,y:0},this.position={x:100,y:0},this.hasSuperPower=!1,this.movingDirection=""}},{key:"specs",get:function(){return[this.image.width*this.currentImageFrame,0,this.image.width,this.image.height,this.position.x,this.position.y,this.width,this.height,this.image.img]}},{key:"top",get:function(){return this.position.y}},{key:"right",get:function(){return this.position.x+this.width}},{key:"bottom",get:function(){return this.position.y+this.height}},{key:"left",get:function(){return this.position.x}},{key:"isLookingLeft",get:function(){return"left"===this.lastDirection}},{key:"isLookingRight",get:function(){return"right"===this.lastDirection}},{key:"isMovingUpwards",get:function(){return this.velocity.y<0}},{key:"isMovingDownwards",get:function(){return this.velocity.y>0}},{key:"isMovingLeft",get:function(){return"left"===this.direction}},{key:"isMovingRight",get:function(){return"right"===this.direction}},{key:"isNotMoving",get:function(){return""===this.direction}},{key:"isAboutToTouchGround",get:function(){return this.velocity.y<.1&&this.velocity.y>-.1}},{key:"isTouchingGround",get:function(){return 0===this.velocity.y}},{key:"isGliding",get:function(){return this.airResistance>0}},{key:"moveRight",value:function(){this.lastDirection="right",this.direction="right",this.velocity.x+=5}},{key:"moveLeft",value:function(){this.lastDirection="left",this.direction="left",this.velocity.x-=5}},{key:"jump",value:function(){this.isTouchingGround?this.velocity.y-=100:this.isGliding?this.airResistance=0:this.airResistance=4}},{key:"stop",value:function(){this.direction=""}},{key:"handleImageUpdate",value:function(){this.isTouchingGround?this.isMovingRight?this.image=this.sprites.runRight:this.isMovingLeft?this.image=this.sprites.runLeft:this.isNotMoving&&(this.isLookingLeft?this.image=this.sprites.idleLeft:this.isLookingRight&&(this.image=this.sprites.idleRight)):this.isMovingUpwards?this.isLookingLeft?this.image=this.sprites.jumpLeft:this.isLookingRight&&(this.image=this.sprites.jumpRight):this.isMovingDownwards&&(this.isLookingLeft?this.image=this.isGliding?this.sprites.glideLeft:this.sprites.jumpLeft:this.isLookingRight&&(this.image=this.isGliding?this.sprites.glideRight:this.sprites.jumpRight)),this.width=k({widthA:this.image.width,heightA:this.image.height,heightB:this.height})}},{key:"handleImageAnimationLoop",value:function(){this.currentImageFrame+1===this.image.frames?this.currentImageFrame=0:this.currentImageFrame+=1}},{key:"update",value:function(){this.handleImageUpdate(),this.handleImageAnimationLoop(),this.isAboutToTouchGround&&(this.airResistance=0),this.velocity.y-=this.airResistance,this.position.x+=this.velocity.x,this.position.y+=this.velocity.y}}]),t}(),x=.75,L=function(){function t(e){o(this,t),h(this,"map",[[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","flag"],[" ","_"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","_"],[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","_"],[" ","_"," ","_"," "," "," "," "," "," "," "," "," "," ","_"," "," "," "," "," ","_"," 10","_"," "],[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],["_","_","_"," 1","_","_","_"," 2","_","_","_","_","_","_"," 1","_","_","_","_","_","_","_","_"," 10","_","_","_","_","_","_","_","_","_"]]),h(this,"platforms",[]),h(this,"powerUps",[]),h(this,"name",1),this.sprites=e,this.player=new b(e),this.width=1024,this.height=768,this.scrollOffset=0}return a(t,[{key:"init",value:function(){this.generateMap(),this.player.init(),this.scrollOffset=0}},{key:"createPlatform",value:function(t,e,i){return new p(t,e,i)}},{key:"createObject",value:function(t,e,i,n,r){return new g(t,e,i,n,r)}},{key:"generateMap",value:function(){var t=this;this.platforms=[],this.decorations=[],r(this.map).reverse().forEach((function(e,i){var n=-15;e.forEach((function(e){var r=t.height-125*(i+1);if("_"===e)t.platforms.push(t.createPlatform(n,r,t.sprites.platform.img)),n+=579;else if(e.indexOf(!0)){var o=e.split(" ")[1],s=o?100*Number(o):579;n+=s}}))})),this.decorations=[this.createObject(0,0,this.sprites.background.img),this.createObject(0,this.height-this.sprites.hills.height,this.sprites.hills.img)]}},{key:"moveOffsetHandler",value:function(t){var e=t.dir;"left"===e&&(this.scrollOffset+=1),"right"===e&&(this.scrollOffset-=1),this.movePlatforms({dir:e}),this.moveDecorations({dir:e})}},{key:"movePlatforms",value:function(t){var e=t.dir;this.platforms.forEach((function(t){"left"===e&&t.moveLeft(),"right"===e&&t.moveRight()}))}},{key:"moveDecorations",value:function(t){var e=t.dir;this.decorations.forEach((function(t,i){"left"===e&&t.moveLeft(.2*(i+.5)),"right"===e&&t.moveRight(.2*(i+.5))}))}},{key:"collideToPlatforms",value:function(t){return this.platforms.forEach((function(e){t.bottom<=e.top&&t.bottom+t.velocity.y>=e.position.y&&t.right>=e.left&&t.left<=e.right&&(t.position.y=e.position.y-t.height,t.velocity.y=0)}))}},{key:"collideObjectToWorld",value:function(t){t.left<.3*this.width?this.scrollOffset<0?t.left<0&&(t.position.x=0):(t.position.x=.3*this.width,this.moveOffsetHandler({dir:"right"}),t.velocity.x=0):t.right>.6*this.width&&(t.position.x=.6*this.width-t.width,t.velocity.x=0,"right"===this.player.direction&&this.moveOffsetHandler({dir:"left"})),t.top>=this.height&&this.loseHandler()}},{key:"loseHandler",value:function(){this.player.lifes-=1,this.init()}},{key:"winHandler",value:function(){console.log("YOU WON")}},{key:"update",value:function(){this.platforms.forEach((function(t){t.update(),t.velocity.x*=x})),this.decorations.forEach((function(t){t.update(),t.velocity.x*=x})),this.player.update(),this.player.velocity.y+=7,this.player.velocity.x*=x,this.player.velocity.y*=x,this.collideToPlatforms(this.player),this.collideObjectToWorld(this.player),this.scrollOffset>=850&&this.winHandler()}}]),t}(),_=function(){function t(e){o(this,t),this.world=new L(e),this.init()}return a(t,[{key:"init",value:function(){this.world.init()}},{key:"update",value:function(){this.world.update()}}]),t}(),R=function t(e,i){o(this,t),this.img=e,this.frames=i,this.width=e.width/i||1,this.height=e.height},E=function(){function t(){o(this,t)}var e;return a(t,[{key:"loadImages",value:(e=y(m().mark((function t(){var e;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([w("assets/images/character-idle-left.png"),w("assets/images/character-idle-right.png"),w("assets/images/character-run-left.png"),w("assets/images/character-run-right.png"),w("assets/images/character-jump-left.png"),w("assets/images/character-jump-right.png"),w("assets/images/character-glide-left.png"),w("assets/images/character-glide-right.png"),w("assets/images/platform.png"),w("assets/images/background.png"),w("assets/images/hills.png")]);case 2:e=t.sent,this.idleLeft=new R(e[0],10),this.idleRight=new R(e[1],10),this.runLeft=new R(e[2],10),this.runRight=new R(e[3],10),this.jumpLeft=new R(e[4],10),this.jumpRight=new R(e[5],10),this.glideLeft=new R(e[6],10),this.glideRight=new R(e[7],10),this.platform=new R(e[8],1),this.background=new R(e[9],1),this.hills=new R(e[10],1);case 14:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),t}(),j=document.querySelector("[data-element=canvas]"),O=document.querySelector("[data-element=lifes-value]"),A=document.querySelector("[data-element=score-value]"),I=document.querySelector("[data-element=level-value]"),T=new E;T.loadImages().then((function(){var t=new l(j),e=new u,i=new _(T),n=new f(33.333333333333336,(function(){var e=i.world;t.clearCanvas(),e.decorations.forEach((function(e){return t.drawImage.apply(t,r(e.specs))})),e.platforms.forEach((function(e){return t.drawImage.apply(t,r(e.specs))})),t.drawCropImage.apply(t,r(e.player.specs)),t.render()}),(function(){e.up.isActive?(i.world.player.jump(),e.up.isActive=!1):e.right.isActive?i.world.player.moveRight():e.left.isActive?i.world.player.moveLeft():e.left.isActive||e.right.isActive||i.world.player.stop(),i.update(),I.innerText=i.world.name,O.innerText=i.world.player.lifes,A.innerText=i.world.player.score}));function o(t){e.handleKeyDownUp(t)}function s(){t.resize(window.innerWidth,window.innerHeight,i.world.height/i.world.width),t.render()}window.pacman={display:t,controller:e,game:i,engine:n},t.buffer.canvas.height=i.world.height,t.buffer.canvas.width=i.world.width,window.addEventListener("keydown",o),window.addEventListener("keyup",o),window.addEventListener("resize",s),n.start(),s()}))},666:function(t){var e=function(t){"use strict";var e,i=Object.prototype,n=i.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function h(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,i){return t[e]=i}}function c(t,e,i,n){var r=e&&e.prototype instanceof y?e:y,o=Object.create(r.prototype),s=new O(n||[]);return o._invoke=function(t,e,i){var n=l;return function(r,o){if(n===g)throw new Error("Generator is already running");if(n===p){if("throw"===r)throw o;return I()}for(i.method=r,i.arg=o;;){var s=i.delegate;if(s){var a=R(s,i);if(a){if(a===d)continue;return a}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===l)throw n=p,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=g;var h=u(t,e,i);if("normal"===h.type){if(n=i.done?p:f,h.arg===d)continue;return{value:h.arg,done:i.done}}"throw"===h.type&&(n=p,i.method="throw",i.arg=h.arg)}}}(t,i,s),o}function u(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l="suspendedStart",f="suspendedYield",g="executing",p="completed",d={};function y(){}function v(){}function m(){}var w={};h(w,o,(function(){return this}));var k=Object.getPrototypeOf,b=k&&k(k(A([])));b&&b!==i&&n.call(b,o)&&(w=b);var x=m.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function i(r,o,s,a){var h=u(t[r],t,o);if("throw"!==h.type){var c=h.arg,l=c.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){i("next",t,s,a)}),(function(t){i("throw",t,s,a)})):e.resolve(l).then((function(t){c.value=t,s(c)}),(function(t){return i("throw",t,s,a)}))}a(h.arg)}var r;this._invoke=function(t,n){function o(){return new e((function(e,r){i(t,n,e,r)}))}return r=r?r.then(o,o):o()}}function R(t,i){var n=t.iterator[i.method];if(n===e){if(i.delegate=null,"throw"===i.method){if(t.iterator.return&&(i.method="return",i.arg=e,R(t,i),"throw"===i.method))return d;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=u(n,t.iterator,i.arg);if("throw"===r.type)return i.method="throw",i.arg=r.arg,i.delegate=null,d;var o=r.arg;return o?o.done?(i[t.resultName]=o.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,d):o:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function A(t){if(t){var i=t[o];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,s=function i(){for(;++r<t.length;)if(n.call(t,r))return i.value=t[r],i.done=!1,i;return i.value=e,i.done=!0,i};return s.next=s}}return{next:I}}function I(){return{value:e,done:!0}}return v.prototype=m,h(x,"constructor",m),h(m,"constructor",v),v.displayName=h(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,h(t,a,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(_.prototype),h(_.prototype,s,(function(){return this})),t.AsyncIterator=_,t.async=function(e,i,n,r,o){void 0===o&&(o=Promise);var s=new _(c(e,i,n,r),o);return t.isGeneratorFunction(i)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},L(x),h(x,a,"Generator"),h(x,o,(function(){return this})),h(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){for(;e.length;){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}return i.done=!0,i}},t.values=A,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var i in this)"t"===i.charAt(0)&&n.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function r(n,r){return a.type="throw",a.arg=t,i.next=n,r&&(i.method="next",i.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var h=n.call(s,"catchLoc"),c=n.call(s,"finallyLoc");if(h&&c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(h){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),j(i),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var r=n.arg;j(i)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,n){return this.delegate={iterator:A(t),resultName:i,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},function(t){"use strict";t(t.s=285)}]);
//# sourceMappingURL=main.9eab0032.js.map