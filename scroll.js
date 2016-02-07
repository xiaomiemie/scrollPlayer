 function ScrollPlayer() {
  var width=$(window).width();
  $('.yy_main').css('width',width*0.7);
   this.len = $('.yy_main img').length;;
   this.current = 0;
   this.next = 1;
   this.prev = this.len - 1;
   this.bindEvent();
 }
 ScrollPlayer.prototype.bindEvent = function() {
   var that = this;
   $('.yy_right').on('click', function() {
     var obj = that.setTransition($('.yy_main img').not(':eq(' + that.current + ')'), 'none');
     that.setTransform(obj, 'translate(700px, 0)');
     setTimeout(function() {
       var obj = that.setTransition($('.yy_main img').eq(that.current), 'transform 1s linear');
       that.setTransform(obj, 'translate(-700px,0)');
       var objnext = that.setTransition($('.yy_main img').eq(that.next), 'transform 1s linear');
       that.setTransform(objnext, 'translate(0,0)');
       that.prev = that.current;
       that.current = that.next;
       that.next = that.next + 1 > that.len - 1 ? 0 : that.next + 1;
     }, 50)
   });

   $('.yy_left').on('click', function() {
     var obj = that.setTransition($('.yy_main img').not(':eq(' + that.current + ')'), 'none');
     that.setTransform(obj, 'translate(-700px,0)')
     setTimeout(function() {
       var obj = that.setTransition($('.yy_main img').eq(that.current), 'transform 1s linear');
       that.setTransform(obj, 'translate(700px,0)')
       var objprev = that.setTransition($('.yy_main img').eq(that.prev), 'transform 1s linear');
       that.setTransform(objprev, 'translate(0,0)')
       that.next = that.current;
       that.current = that.prev;
       that.prev = that.current - 1 < 0 ? that.len - 1 : that.current - 1;
     }, 50)
   })
 }

 ScrollPlayer.prototype.setTransition = function(obj, type) {
   obj.css({
     '-webkit-transition': type,
     '-moz-transition': type,
     '-o-transition': type,
     'transition': type
   });
   return obj;
 }
 ScrollPlayer.prototype.setTransform = function(obj, pos) {
   obj.css({
     '-webkit-transform': pos,
     '-moz-transform': pos,
     '-o-transform': pos,
     'transform': pos
   });
   return obj;
 }