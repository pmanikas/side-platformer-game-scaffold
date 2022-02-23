(self.webpackChunkninjarion_land=self.webpackChunkninjarion_land||[]).push([[179],{757:function(t,e,i){t.exports=i(666)},815:function(t,e,i){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function r(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function h(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c=function(){function t(){o(this,t),h(this,"isActive",!1),h(this,"isPressed",!1)}return a(t,[{key:"getInput",value:function(t){this.isPressed!==t&&(this.isActive=t),this.isPressed=t}}]),t}(),u=function(){function t(){var e=this;o(this,t),h(this,"down",new c),h(this,"left",new c),h(this,"right",new c),h(this,"up",new c),h(this,"shift",new c),h(this,"handleKeyDownUp",(function(t){e.keyDownUp(t)}))}return a(t,[{key:"keyDownUp",value:function(t){var e="keydown"===t.type;switch(t.keyCode){case 37:this.left.getInput(e);break;case 32:this.up.getInput(e);break;case 39:this.right.getInput(e);break;case 40:this.down.getInput(e);break;case 16:this.shift.getInput(e)}}}]),t}(),l=function(){function t(e){o(this,t),this.buffer=document.createElement("canvas").getContext("2d"),this.context=e.getContext("2d")}return a(t,[{key:"clearCanvas",value:function(){this.drawRectangle(0,0,this.buffer.canvas.width,this.buffer.canvas.height,"#060606")}},{key:"drawRectangle",value:function(t,e,i,n,r){this.buffer.fillStyle=r,this.buffer.fillRect(Math.round(t),Math.round(e),i,n)}},{key:"drawCircle",value:function(t,e,i,n){this.buffer.beginPath(),this.buffer.arc(t,e,i,0,2*Math.PI),this.buffer.fillStyle=n,this.buffer.fill(),this.buffer.closePath()}},{key:"drawImage",value:function(t,e,i,n,r){this.buffer.drawImage(r,t,e,i,n)}},{key:"drawCropImage",value:function(t,e,i,n,r,o,s,a,h){this.buffer.drawImage(h,t,e,i,n,r,o,s,a)}},{key:"render",value:function(){this.context.drawImage(this.buffer.canvas,0,0,this.buffer.canvas.width,this.buffer.canvas.height,0,0,this.context.canvas.width,this.context.canvas.height)}},{key:"resize",value:function(t,e,i){e/t>i?(this.context.canvas.width=t,this.context.canvas.height=t*i):(this.context.canvas.width=e/i,this.context.canvas.height=e),this.context.imageSmoothingEnabled=!1}}]),t}(),f=function(){function t(e,i,n){var r=this;o(this,t),h(this,"accumulatedTime",0),h(this,"animationFrameRequest",void 0),h(this,"time",void 0),h(this,"updated",!1),h(this,"handleRun",(function(t){r.run(t)})),this.timeStep=e,this.update=n,this.render=i}return a(t,[{key:"run",value:function(t){for(this.accumulatedTime+=t-this.time,this.time=t,this.accumulatedTime>=3*this.timeStep&&(this.accumulatedTime=this.timeStep);this.accumulatedTime>=this.timeStep;)this.accumulatedTime-=this.timeStep,this.update(t),this.updated=!0;this.updated&&(this.updated=!1,this.render(t)),this.animationFrameRequest=window.requestAnimationFrame(this.handleRun)}},{key:"start",value:function(){this.accumulatedTime=this.timeStep,this.time=window.performance.now(),this.handleRun(this.time)}},{key:"stop",value:function(){window.cancelAnimationFrame(this.animationFrameRequest)}}]),t}();function p(t,e,i,n,r,o,s){try{var a=t[o](s),h=a.value}catch(t){return void i(t)}a.done?e(h):Promise.resolve(h).then(n,r)}function g(t){return function(){var e=this,i=arguments;return new Promise((function(n,r){var o=t.apply(e,i);function s(t){p(o,n,r,s,a,"next",t)}function a(t){p(o,n,r,s,a,"throw",t)}s(void 0)}))}}var d=i(757),y=i.n(d),v=function(){function t(){o(this,t)}var e;return a(t,[{key:"get",value:(e=g(y().mark((function t(e){var i,n;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return i=t.sent,n=i.json(),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})}]),t}(),m=function t(e){var i=e.id,n=e.name,r=e.gravity,s=e.friction,a=e.map,h=e.nextLevelId,c=e.airResistance;o(this,t),this.id=i,this.name=n,this.gravity=r,this.friction=s,this.map=a,this.nextLevelId=h,this.airResistance=c};function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function x(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function L(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return x(t)}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var j=function(){function t(e,i,n,r,s){o(this,t),h(this,"velocity",{x:0,y:0}),h(this,"currentImageFrame",0),this.width=n,this.height=r,this.position={x:e,y:i},this.image=s}return a(t,[{key:"moveRight",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.velocity.x+=5*t}},{key:"moveLeft",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.velocity.x-=5*t}},{key:"top",get:function(){return this.position.y}},{key:"right",get:function(){return this.position.x+this.width}},{key:"bottom",get:function(){return this.position.y+this.height}},{key:"left",get:function(){return this.position.x}},{key:"specs",get:function(){return[this.image.width*this.currentImageFrame,0,this.width,this.height,this.position.x,this.position.y,this.width,this.height,this.image.img]}},{key:"handleImageAnimationLoop",value:function(){this.currentImageFrame+1===this.image.frames?this.currentImageFrame=0:this.currentImageFrame+=1}},{key:"update",value:function(){this.handleImageAnimationLoop(),this.position.x+=this.velocity.x,this.position.y+=this.velocity.y}}]),t}();var O=function(t){k(r,t);var e,i,n=(e=r,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=R(e);if(i){var r=R(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return L(this,t)});function r(t,e,i,s,a){o(this,r);var h=function(t,e){switch(t){case"full":return e.platformFull;case"left":return e.platformLeft;case"right":return e.platformRight;case"middle":default:return e.platform}}(s,a),c=h.height;return n.call(this,t,e,i,c,h)}return r}(j),E=function(){var t=g(y().mark((function t(e){var i;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=new Image).src=e,t.next=4,i.decode();case 4:return t.abrupt("return",i);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=function(t){var e,i,n=t.widthA;return 0===(i=(e={xA:t.heightA,xB:n,yA:t.heightB}).xA)?0:e.xB/i*e.yA};var I=function(t){k(r,t);var e,i,n=(e=r,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=R(e);if(i){var r=R(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return L(this,t)});function r(t){var e;return o(this,r),h(x(e=n.call(this)),"lifes",3),h(x(e),"score",0),h(x(e),"height",128),e.sprites=t,e.image=t.idleRight,e.width=A({widthA:e.image.width,heightA:e.image.height,heightB:e.height}),e}return a(r,[{key:"init",value:function(){this.lastDirection="right",this.direction="right",this.airResistance=1,this.currentAirResistance=0,this.currentImageFrame=0,this.hasSuperPower=!1,this.velocity={x:0,y:0},this.position={x:0,y:0}}},{key:"specs",get:function(){return[this.image.width*this.currentImageFrame,0,this.image.width,this.image.height,this.position.x,this.position.y,this.width,this.height,this.image.img]}},{key:"top",get:function(){return this.position.y}},{key:"right",get:function(){return this.position.x+this.width}},{key:"bottom",get:function(){return this.position.y+this.height}},{key:"left",get:function(){return this.position.x}},{key:"isLookingLeft",get:function(){return"left"===this.lastDirection}},{key:"isLookingRight",get:function(){return"right"===this.lastDirection}},{key:"isMovingUpwards",get:function(){return this.velocity.y<0}},{key:"isMovingDownwards",get:function(){return this.velocity.y>0}},{key:"isMovingLeft",get:function(){return"left"===this.direction}},{key:"isMovingRight",get:function(){return"right"===this.direction}},{key:"isNotMoving",get:function(){return""===this.direction}},{key:"isAboutToTouchGround",get:function(){return this.velocity.y<.1&&this.velocity.y>-.1}},{key:"isTouchingGround",get:function(){return 0===this.velocity.y}},{key:"isGliding",get:function(){return this.currentAirResistance>0}},{key:"moveRight",value:function(){this.lastDirection="right",this.direction="right",this.velocity.x+=5}},{key:"moveLeft",value:function(){this.lastDirection="left",this.direction="left",this.velocity.x-=5}},{key:"jump",value:function(){this.isTouchingGround?this.velocity.y-=128:this.isGliding?this.currentAirResistance=0:this.currentAirResistance=this.airResistance}},{key:"stop",value:function(){this.direction=""}},{key:"handleImageUpdate",value:function(){this.isTouchingGround?this.isMovingRight?this.image=this.sprites.runRight:this.isMovingLeft?this.image=this.sprites.runLeft:this.isNotMoving&&(this.isLookingLeft?this.image=this.sprites.idleLeft:this.isLookingRight&&(this.image=this.sprites.idleRight)):this.isMovingUpwards?this.isLookingLeft?this.image=this.sprites.jumpLeft:this.isLookingRight&&(this.image=this.sprites.jumpRight):this.isMovingDownwards&&(this.isLookingLeft?this.image=this.isGliding?this.sprites.glideLeft:this.sprites.jumpLeft:this.isLookingRight&&(this.image=this.isGliding?this.sprites.glideRight:this.sprites.jumpRight)),this.width=A({widthA:this.image.width,heightA:this.image.height,heightB:this.height})}},{key:"handleImageAnimationLoop",value:function(){this.currentImageFrame+1===this.image.frames?this.currentImageFrame=0:this.currentImageFrame+=1}},{key:"update",value:function(){this.handleImageUpdate(),this.handleImageAnimationLoop(),this.isAboutToTouchGround&&(this.currentAirResistance=0),this.velocity.y-=this.currentAirResistance,this.position.x+=this.velocity.x,this.position.y+=this.velocity.y}}]),r}(j);var P=function(t){k(r,t);var e,i,n=(e=r,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=R(e);if(i){var r=R(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return L(this,t)});function r(t,e,i){var s;o(this,r);var a=i.shuriken;return(s=n.call(this,t,e,64,64,a)).position={x:t+64-s.width/2,y:e+64-s.height/2},s}return a(r,[{key:"specs",get:function(){return[0,0,this.image.width,this.image.height,this.position.x,this.position.y,this.width,this.height,this.image.img]}}]),r}(j);var S=function(t){k(r,t);var e,i,n=(e=r,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=R(e);if(i){var r=R(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return L(this,t)});function r(t,e,i,s){o(this,r);var a=function(t){switch(t){case"small":return 64;case"medium":return 96;case"large":default:return 128}}(i),h=a,c=s.block;return n.call(this,t,e,a,h,c)}return r}(j),T=function(t,e){return!(t.position.x>e.position.x+e.width||t.position.x+t.width<e.position.x||t.position.y>e.position.y+e.height||t.position.y+t.height<e.position.y)},_=function(){function t(e){o(this,t),h(this,"platforms",[]),h(this,"blocks",[]),h(this,"backgrounds",[]),h(this,"decorations",[]),h(this,"shurikens",[]),h(this,"scrollOffset",0),h(this,"width",1024),h(this,"height",768),h(this,"level",null),h(this,"isWinning",!1),this.sprites=e,this.player=new I(e)}return a(t,[{key:"init",value:function(){this.map=this.level.map,this.scrollOffset=0,this.generateMap(),this.player.init(),this.player.airResistance=this.level.airResistance,this.isWinning=!1,console.log(this.level)}},{key:"createPlatform",value:function(t,e,i,n){return new O(t,e,i,n,this.sprites)}},{key:"createBlock",value:function(t,e){return new S(t,e,"large",this.sprites)}},{key:"createGenericObject",value:function(t,e,i,n,r){return new j(t,e,i,n,r)}},{key:"createShuriken",value:function(t,e){return new P(t,e,this.sprites)}},{key:"generateMap",value:function(){var t=this;this.platforms=[],this.backgrounds=null,this.decorations=[],this.blocks=[],this.shurikens=[],this.backgrounds=[this.createGenericObject(0,0,this.sprites.background.width,this.sprites.background.height,this.sprites.background),this.createGenericObject(0,this.height-this.sprites.hills.height,this.sprites.hills.width,this.sprites.hills.height,this.sprites.hills),this.createGenericObject(0,this.height-this.sprites.sea.height,this.sprites.sea.width,this.sprites.sea.height,this.sprites.sea)];var e=r(this.map).reverse(),i=[-32];e.forEach((function(n,r){n.forEach((function(n,o){if(0!==r){var s=i[o],a=t.height-128*r,h=128*e[0][o];switch(n){case"_":t.platforms.push(t.createPlatform(s,a,h,"middle"));break;case"{":t.platforms.push(t.createPlatform(s,a,h,"left"));break;case"}":t.platforms.push(t.createPlatform(s,a,h,"right"));break;case"+":t.platforms.push(t.createPlatform(s,a,h,"full"));break;case"#":t.blocks.push(t.createBlock(s,a));break;case"*":t.shurikens.push(t.createShuriken(s,a))}}else i[o+1]=128*n+i[o]}))}))}},{key:"moveOffsetHandler",value:function(t){var e=t.dir;"left"===e&&(this.scrollOffset+=1),"right"===e&&(this.scrollOffset-=1),this.movePlatforms({dir:e}),this.moveBlocks({dir:e}),this.moveBackgrounds({dir:e}),this.moveDecorations({dir:e}),this.moveShurikens({dir:e})}},{key:"movePlatforms",value:function(t){var e=t.dir;this.platforms.forEach((function(t){"left"===e&&t.moveLeft(),"right"===e&&t.moveRight()}))}},{key:"moveBlocks",value:function(t){var e=t.dir;this.blocks.forEach((function(t){"left"===e&&t.moveLeft(),"right"===e&&t.moveRight()}))}},{key:"moveShurikens",value:function(t){var e=t.dir;this.shurikens.forEach((function(t){"left"===e&&t.moveLeft(),"right"===e&&t.moveRight()}))}},{key:"moveBackgrounds",value:function(t){var e=this,i=t.dir;this.backgrounds.forEach((function(t,n){var r=1;0===n&&(r=0),1===n&&(r=1),2===n&&(r=4.5),"left"===i&&t.moveLeft(.2*(r+.5)),"right"===i&&t.moveRight(.2*(r+.5)),t.right<e.width?t.position.x=0:t.left>0&&(t.position.x=e.width-t.width)}))}},{key:"moveDecorations",value:function(t){var e=t.dir;this.decorations.forEach((function(t){"left"===e&&t.moveLeft(1),"right"===e&&t.moveRight(1)}))}},{key:"collideToPlatforms",value:function(t){this.platforms.forEach((function(e){t.bottom<=e.top&&t.bottom+t.velocity.y>=e.position.y&&t.right>=e.left&&t.left<=e.right&&(t.position.y=e.position.y-t.height,t.velocity.y=0)}))}},{key:"collideToBlocks",value:function(t){this.blocks.forEach((function(e){var i=function(t,e){if(T(t,e)){var i=t.width/2,n=t.height/2,r=e.width/2,o=e.height/2,s=t.position.x+i,a=t.position.y+n,h=s-(e.position.x+r),c=a-(e.position.y+o),u=i+r,l=n+o,f=h>0?u-h:-u-h,p=c>0?l-c:-l-c;if(0!==f&&0!==p)return Math.abs(f)<Math.abs(p)?f>0?"left":"right":p>0?"top":"bottom"}}(t,e);""!==i&&("left"===i?t.position.x=e.right-t.velocity.x:"right"===i?t.position.x=e.left-t.width-t.velocity.x:"top"===i?(t.position.y=e.bottom,t.velocity.y*=-1,console.log("aouts, my head")):"bottom"===i&&(t.velocity.y=0,t.position.y=e.top-t.height+1))}))}},{key:"collideToShurikens",value:function(t){for(var e=this.shurikens.length-1;e>=0;e--){var i=this.shurikens[e];T(t,i)&&(this.shurikens.splice(e,1),this.player.score++)}}},{key:"collideObjectToWorld",value:function(t){t.left<.333*this.width?this.scrollOffset<0?t.left<0&&(t.position.x=0):(t.position.x=.333*this.width,this.moveOffsetHandler({dir:"right"}),t.velocity.x=0):t.right>.666*this.width&&(t.position.x=.666*this.width-t.width,"right"===this.player.direction&&this.moveOffsetHandler({dir:"left"})),t.top>=this.height&&this.loseHandler()}},{key:"loseHandler",value:function(){this.player.lifes-=1,this.init()}},{key:"winHandler",value:function(){this.isWinning||(console.log("YOU WON"),this.isWinning=!0)}},{key:"update",value:function(){var t=this;this.platforms.forEach((function(e){e.update(),e.velocity.x*=t.level.friction})),this.blocks.forEach((function(e){e.update(),e.velocity.x*=t.level.friction})),this.shurikens.forEach((function(e){e.update(),e.velocity.x*=t.level.friction})),this.backgrounds.forEach((function(e){e.update(),e.velocity.x*=t.level.friction})),this.decorations.forEach((function(e){e.update(),e.velocity.x*=t.level.friction})),this.player.update(),this.player.velocity.y+=this.level.gravity,this.player.velocity.x*=this.level.friction,this.player.velocity.y*=this.level.friction,this.collideToBlocks(this.player),this.collideToPlatforms(this.player),this.collideObjectToWorld(this.player),this.collideToShurikens(this.player),this.scrollOffset>=15e3&&this.winHandler()}}]),t}(),F=["assets/data/level-1.json","assets/data/level-2.json","assets/data/level-3.json"],B=function(){function t(e){o(this,t),h(this,"http",new v),h(this,"currentLevel",0),h(this,"isLevelLoading",!1),this.sprites=e,this.world=new _(this.sprites)}var e;return a(t,[{key:"loadLevel",value:(e=g(y().mark((function t(){var e,i=this,n=arguments;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,t.abrupt("return",this.http.get(F[e-1]).then((function(t){i.currentLevel=e,i.world.level=new m(t),i.init(),i.isLevelLoading=!1})));case 2:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"init",value:function(){this.world.init()}},{key:"loadNextLevel",value:function(){this.loadLevel(this.currentLevel+1)}},{key:"update",value:function(){this.world.update(),this.world.isWinning&&!this.isLevelLoading&&(this.isLevelLoading=!0,this.loadNextLevel())}}]),t}(),G=function t(e,i){o(this,t),this.img=e,this.frames=i,this.width=e.width/i||1,this.height=e.height},M=function(){function t(){o(this,t)}var e;return a(t,[{key:"loadImages",value:(e=g(y().mark((function t(){var e;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([E("assets/images/character-idle-left.png"),E("assets/images/character-idle-right.png"),E("assets/images/character-run-left.png"),E("assets/images/character-run-right.png"),E("assets/images/character-jump-left.png"),E("assets/images/character-jump-right.png"),E("assets/images/character-glide-left.png"),E("assets/images/character-glide-right.png"),E("assets/images/platform.png"),E("assets/images/background.png"),E("assets/images/hills.png"),E("assets/images/sea.png"),E("assets/images/platform-left.png"),E("assets/images/platform-right.png"),E("assets/images/platform-full.png"),E("assets/images/shuriken.png"),E("assets/images/block.png")]);case 2:e=t.sent,this.idleLeft=new G(e[0],10),this.idleRight=new G(e[1],10),this.runLeft=new G(e[2],10),this.runRight=new G(e[3],10),this.jumpLeft=new G(e[4],10),this.jumpRight=new G(e[5],10),this.glideLeft=new G(e[6],10),this.glideRight=new G(e[7],10),this.platform=new G(e[8],1),this.background=new G(e[9],1),this.hills=new G(e[10],1),this.sea=new G(e[11],1),this.platformLeft=new G(e[12],1),this.platformRight=new G(e[13],1),this.platformFull=new G(e[14],1),this.shuriken=new G(e[15],8),this.block=new G(e[16],1);case 20:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),t}(),D=document.querySelector("[data-element=canvas]"),N=document.querySelector("[data-element=lifes-value]"),C=document.querySelector("[data-element=score-value]"),U=document.querySelector("[data-element=level-value]"),W=new M;W.loadImages().then((function(){var t=new l(D),e=new u,i=new B(W),n=new f(33.333333333333336,(function(){var e=i.world;t.clearCanvas();var n=[e.backgrounds,e.decorations,e.platforms,e.blocks,e.shurikens,[e.player]],o=n[1],s=n[2],a=n[3],h=n[4],c=n[5];[].concat(r(n[0]),r(o),r(s),r(a),r(h),r(c)).forEach((function(e){return t.drawCropImage.apply(t,r(e.specs))})),t.render()}),(function(){e.up.isActive?(i.world.player.jump(),e.up.isActive=!1):e.right.isActive?i.world.player.moveRight():e.left.isActive?i.world.player.moveLeft():e.left.isActive||e.right.isActive||i.world.player.stop(),i.update(),U.innerText=i.world.level.name,N.innerText=i.world.player.lifes,C.innerText=i.world.player.score}));function o(t){e.handleKeyDownUp(t)}function s(){t.resize(window.innerWidth,window.innerHeight,i.world.height/i.world.width),t.render()}window.ninja={display:t,controller:e,game:i,engine:n,world:i.world,player:i.world.player},i.loadLevel().then((function(){t.buffer.canvas.height=i.world.height,t.buffer.canvas.width=i.world.width,window.addEventListener("keydown",o),window.addEventListener("keyup",o),window.addEventListener("resize",s),n.start(),s()}))}))},666:function(t){var e=function(t){"use strict";var e,i=Object.prototype,n=i.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function h(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,i){return t[e]=i}}function c(t,e,i,n){var r=e&&e.prototype instanceof y?e:y,o=Object.create(r.prototype),s=new A(n||[]);return o._invoke=function(t,e,i){var n=l;return function(r,o){if(n===p)throw new Error("Generator is already running");if(n===g){if("throw"===r)throw o;return P()}for(i.method=r,i.arg=o;;){var s=i.delegate;if(s){var a=j(s,i);if(a){if(a===d)continue;return a}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===l)throw n=g,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=p;var h=u(t,e,i);if("normal"===h.type){if(n=i.done?g:f,h.arg===d)continue;return{value:h.arg,done:i.done}}"throw"===h.type&&(n=g,i.method="throw",i.arg=h.arg)}}}(t,i,s),o}function u(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l="suspendedStart",f="suspendedYield",p="executing",g="completed",d={};function y(){}function v(){}function m(){}var w={};h(w,o,(function(){return this}));var k=Object.getPrototypeOf,b=k&&k(k(I([])));b&&b!==i&&n.call(b,o)&&(w=b);var x=m.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function R(t,e){function i(r,o,s,a){var h=u(t[r],t,o);if("throw"!==h.type){var c=h.arg,l=c.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){i("next",t,s,a)}),(function(t){i("throw",t,s,a)})):e.resolve(l).then((function(t){c.value=t,s(c)}),(function(t){return i("throw",t,s,a)}))}a(h.arg)}var r;this._invoke=function(t,n){function o(){return new e((function(e,r){i(t,n,e,r)}))}return r=r?r.then(o,o):o()}}function j(t,i){var n=t.iterator[i.method];if(n===e){if(i.delegate=null,"throw"===i.method){if(t.iterator.return&&(i.method="return",i.arg=e,j(t,i),"throw"===i.method))return d;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=u(n,t.iterator,i.arg);if("throw"===r.type)return i.method="throw",i.arg=r.arg,i.delegate=null,d;var o=r.arg;return o?o.done?(i[t.resultName]=o.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,d):o:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function I(t){if(t){var i=t[o];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,s=function i(){for(;++r<t.length;)if(n.call(t,r))return i.value=t[r],i.done=!1,i;return i.value=e,i.done=!0,i};return s.next=s}}return{next:P}}function P(){return{value:e,done:!0}}return v.prototype=m,h(x,"constructor",m),h(m,"constructor",v),v.displayName=h(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,h(t,a,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(R.prototype),h(R.prototype,s,(function(){return this})),t.AsyncIterator=R,t.async=function(e,i,n,r,o){void 0===o&&(o=Promise);var s=new R(c(e,i,n,r),o);return t.isGeneratorFunction(i)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},L(x),h(x,a,"Generator"),h(x,o,(function(){return this})),h(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){for(;e.length;){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}return i.done=!0,i}},t.values=I,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var i in this)"t"===i.charAt(0)&&n.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function r(n,r){return a.type="throw",a.arg=t,i.next=n,r&&(i.method="next",i.arg=e),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var h=n.call(s,"catchLoc"),c=n.call(s,"finallyLoc");if(h&&c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(h){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(s)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),E(i),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var r=n.arg;E(i)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,n){return this.delegate={iterator:I(t),resultName:i,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},function(t){"use strict";t(t.s=815)}]);
//# sourceMappingURL=main.70152bc5.js.map