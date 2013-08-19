// Copyright (C) 2013  Ricardo Dantas

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program. If not, see <http://www.gnu.org/licenses/>.

/**
 * About: A Jquery (1.4.x) plugin which works in IE7, IE8 and modern browsers
 * Author: Ricardo Dantas <ricardodantas@gmail.com>
 * Version: 1.0.0
 */

(function ( $ ) {

    $.fn.extbSlider = function(settings) {

        var $father_element = this;

        var config = $.extend({
            width : 500, // pixels
            children : $father_element.children(),
            max_view : 4,
            auto_play: true

        }, settings);

        var numberOfSlides = $father_element.children(config.children).length;
        var itens_per_container = parseInt(numberOfSlides/config.max_view);

        $father_element.children(config.children).wrapAll('<div class="extbSliderWrapAll" />');
        var $extbSliderWrapAll = $father_element.children('.extbSliderWrapAll');

        if(config.children !== undefined){

            if ($extbSliderWrapAll.children(config.children).length > 0){

                //$extbSliderWrapAll.children(config.children).hide();
                // $extbSliderWrapAll.children(config.children).first().show();

                $extbSliderWrapAll.children(config.children).each(function(i){

                        order = i + 1;

                        $(this).addClass('extbSliderItem slide_'+order);

                        if(order <= config.max_view){
                            $(this).show();
                        }
                });

                // for(var z=1 ; z <= itens_per_container ; z++ ){
                //     $extbSliderWrapAll.append('<div class="extbSliderContainer item_'+z+'"/>');
                // }

                var sel;
                var count = 1;
                while ( (sel = $extbSliderWrapAll.children(config.children)).length > 0 ){
                    sel.slice(0,config.max_view).wrapAll('<div class="extbSliderContainer item_'+ count++ +'" />');
                }

                $extbSliderWrapAll.css('width', config.width * config.max_view);

                $extbSliderWrapAll.children('.extbSliderContainer').hide();
                $extbSliderWrapAll.children('.extbSliderContainer').first().show();

                $extbSliderWrapAll.before('<div class="extbSliderBtPrev"><a class="extbSliderLnkPrev" href="javascript:void(0);">Prev</a></div>');
                $extbSliderWrapAll.after('<div class="extbSliderBtNext"><a class="extbSliderLnkNext" href="javascript:void(0);">Next</a></div>');

                var $current_children = $extbSliderWrapAll.children('.extbSliderContainer').filter(':visible');
                var $previous_children = $current_children.prev();
                var $next_children = $current_children.next();


                $father_element.find('.extbSliderBtPrev a').bind('click',function(e){

                    e.preventDefault();

                    if( $previous_children.hasClass('extbSliderContainer') ){

                        $extbSliderWrapAll.children('.extbSliderContainer').hide();
                        $previous_children.fadeIn('slow');



                    }else{
                        $extbSliderWrapAll.children('.extbSliderContainer').hide();
                        $extbSliderWrapAll.children('.extbSliderContainer').last().fadeIn('slow');

                    }
                    $current_children = $extbSliderWrapAll.children('.extbSliderContainer').filter(':visible');
                    $previous_children = $current_children.prev();
                    $next_children = $current_children.next();

                });

                $father_element.find('.extbSliderBtNext a').bind('click',function(e){

                    e.preventDefault();
                    if( $next_children.hasClass('extbSliderContainer') ){

                        $extbSliderWrapAll.children('.extbSliderContainer').hide();
                        $next_children.fadeIn('slow');

                    }else{
                        $extbSliderWrapAll.children('.extbSliderContainer').hide();
                        $extbSliderWrapAll.children('.extbSliderContainer').first().fadeIn('slow');
                    }

                    $current_children = $extbSliderWrapAll.children('.extbSliderContainer').filter(':visible');
                    $previous_children = $current_children.prev();
                    $next_children = $current_children.next();

                });

            }


        }

        return $father_element;
    };


}( jQuery ));