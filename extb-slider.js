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
            width : '100%',
            children : $father_element.children(),
            max_view : 4

        }, settings);


        if(config.children !== undefined){

            if ($father_element.children(config.children).length > 0){

                $father_element.children(config.children).hide();
                $father_element.children(config.children).eq(0).show();

                $father_element.children(config.children).each(function(i){
                        $(this).addClass('extbSliderItem slide_'+(i+1));
                });

                $father_element.before('<div class="extbSliderBtBack"><a class="extbSliderLnkBack" href="javascript:void(0);">Back</a></div>');
                $father_element.after('<div class="extSliderbBtNext"><a class="extbSliderLnkNext" href="javascript:void(0);">Next</a></div>');

                var $current_children = $father_element.children(config.children).filter(':visible');
                var $previous_children = $current_children.prev();
                var $next_children = $current_children.next();


                $('.extbSliderBtBack a').bind('click',function(e){

                    e.preventDefault();

                    if( $previous_children.hasClass('extbSliderItem') ){

                        $father_element.children(config.children).hide();
                        $previous_children.fadeIn('slow');

                        // $(this).removeClass('disabled');

                    }else{
                        $father_element.children(config.children).hide();
                        $father_element.children(config.children).last().fadeIn('slow');
                        // $(this).addClass('disabled');
                    }
                    $current_children = $father_element.children(config.children).filter(':visible');
                    $previous_children = $current_children.prev();
                    $next_children = $current_children.next();
                    // console.log('prev: ' + $previous_children.attr('class'));
                    // console.log('next: ' + $next_children.attr('class'));

                });

                $('.extSliderbBtNext a').bind('click',function(e){

                    e.preventDefault();
                    if( $next_children.hasClass('extbSliderItem') ){

                        $father_element.children(config.children).hide();
                        $next_children.fadeIn('slow');

                    }else{
                        $father_element.children(config.children).hide();
                        $father_element.children(config.children).first().fadeIn('slow');
                    }

                    $current_children = $father_element.children(config.children).filter(':visible');
                    $previous_children = $current_children.prev();
                    $next_children = $current_children.next();

                    // console.log('prev: ' + $previous_children.attr('class'));
                    // console.log('next: ' + $next_children.attr('class'));

                });

            }


        }

        return $father_element;
    };


}( jQuery ));