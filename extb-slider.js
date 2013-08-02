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
            width : 500, // pixes
            children : $father_element.children(),
            max_view : 4

        }, settings);
        var numberOfSlides = $father_element.children(config.children).length;


        if(config.children !== undefined){

            if ($father_element.children(config.children).length > 0){

                $father_element.children(config.children).hide();
                // $father_element.children(config.children).first().show();

                $father_element.children(config.children).each(function(i){
                        order = i+1;
                        $(this).addClass('extbSliderItem slide_'+order);

                        if(order <= config.max_view){
                            $(this).show();
                        }
                });

                $father_element.children('.extbSliderItem').wrapAll('<div class="extbSliderWrapAll" />');
                var $extbSliderWrapAll = $father_element.children('.extbSliderWrapAll');

                $extbSliderWrapAll.css('width', config.width * config.max_view);

                $extbSliderWrapAll.before('<div class="extbSliderBtPrev"><a class="extbSliderLnkPrev" href="javascript:void(0);">Prev</a></div>');
                $extbSliderWrapAll.after('<div class="extSliderBtNext"><a class="extbSliderLnkNext" href="javascript:void(0);">Next</a></div>');

                var $current_children = $extbSliderWrapAll.children(config.children).filter(':visible');
                var $previous_children = $current_children.prev();
                var $next_children = $current_children.next();


                $father_element.find('.extbSliderBtPrev a').bind('click',function(e){

                    e.preventDefault();

                    if( $previous_children.hasClass('extbSliderItem') ){

                        $extbSliderWrapAll.children(config.children).hide();
                        $previous_children.fadeIn('slow');



                    }else{
                        $extbSliderWrapAll.children(config.children).hide();
                        $extbSliderWrapAll.children(config.children).last().fadeIn('slow');

                    }
                    $current_children = $extbSliderWrapAll.children(config.children).filter(':visible');
                    $previous_children = $current_children.prev();
                    $next_children = $current_children.next();

                });

                $father_element.find('.extSliderBtNext a').bind('click',function(e){

                    e.preventDefault();
                    if( $next_children.hasClass('extbSliderItem') ){

                        $extbSliderWrapAll.children(config.children).hide();
                        $next_children.fadeIn('slow');

                    }else{
                        $extbSliderWrapAll.children(config.children).hide();
                        $extbSliderWrapAll.children(config.children).first().fadeIn('slow');
                    }

                    $current_children = $extbSliderWrapAll.children(config.children).filter(':visible');
                    $previous_children = $current_children.prev();
                    $next_children = $current_children.next();

                });

            }


        }

        return $father_element;
    };


}( jQuery ));