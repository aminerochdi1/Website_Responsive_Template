  let bg=document.getElementById("bg"),
  moon=document.getElementById("moon"),
 mounatain=document.getElementById("mountain"),
  road=document.getElementById("road"),
  text=document.getElementById("text");
    
window.addEventListener('scroll',function()
                       {
    
    'use strict';
    var value = window.scrollY;
    bg.style.top= value *0.5 + 'px';
    moon.style.left=value *0.30 + 'px';
    mounatain.style.top=-value *0.15 + 'px';
    //road.style.left=-value *0.15 + 'px';
    text.style.left=-value *1 + 'px';
});

//chat 
(function(d, w, c) {
        w.ChatraID = 'rbuJf8uBmjMtbSGcP';
        var s = d.createElement('script');
        w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
        };
        s.async = true;
        s.src = 'https://call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
    })(document, window, 'Chatra');



