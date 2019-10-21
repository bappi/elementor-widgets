"use strict";



    $('.material-effect').each(function(){
      const __this = $(this)
        console.log(parent)
        if ($(this).hasClass('ink')) {
         
        } else {
           $(this).append('<span class="ink"></span>');
        }

         $(this).removeClass('animate');
        const ink = __this.find('.ink');
        console.log(ink)
        // ink.classList.remove("animate");

        if (!ink.offsetHeight && !ink.offsetWidth) {
          const d = Math.max(__this.offsetHeight, __this.offsetWidth);
          ink.style.height = `${d}px`;
          ink.style.width = `${d}px`;
        }

        // const rect = parent.getBoundingClientRect();

        // const offset = {
        //   top: rect.top + document.body.scrollTop,
        //   left: rect.left + document.body.scrollLeft
        // }

        // const x = e.pageX - offset.left - ink.offsetWidth / 2;
        // const y = e.pageY - offset.top - ink.offsetHeight / 2;


        // ink.style.top = `${y}px`;
        // ink.style.left = `${x}px`;
        // ink.classList.add("animate");
    })
