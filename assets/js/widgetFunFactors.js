 jQuery('.advanced_blocks_funfactors').each(function() {
        const __this = jQuery(this);
            let countVal;
            countVal = __this.html()
             countVal = parseInt(countVal)
            console.log(countVal)
            function counterFunction(){
                __this.prop('Counter', 0).animate({
                    Counter: countVal
                }, {
                    duration: 2150,
                    step: function (now, fx) {
                        var data = Math.round(now);
                        __this.html(data);
                    }
                })

            }
     
            var self = __this;
            __this.waypoint({
                offset: '85%',
                handler: function() {
                     counterFunction()
                }
            });
        })