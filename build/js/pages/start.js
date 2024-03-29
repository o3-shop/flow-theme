/**
 * This file is part of O3-Shop.
 *
 * O3-Shop is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * O3-Shop is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with O3-Shop.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @copyright  Copyright (c) 2022 OXID eSales AG (https://www.oxid-esales.com)
 * @copyright  Copyright (c) 2022 O3-Shop (https://www.o3-shop.com)
 * @license    https://www.gnu.org/licenses/gpl-3.0  GNU General Public License 3 (GPLv3)
 */
$( window ).load( function()
{
    var $window = $( this ),
        $oManufacturerSlider = $( '#manufacturerSlider .flexslider' ),
        flexslider;

    function getGridSize()
    {
        return ( $oManufacturerSlider.width() < 600 ) ? 3 :
               ( $oManufacturerSlider.width() < 900 ) ? 5 : 7;
    }


    $( '#promo-carousel' ).flexslider(
        {
            animation: "slide"
        }
    );

    flexslider = $oManufacturerSlider.flexslider(
        {
            animation: "slide",
            itemWidth: 100,
            itemMargin: 10,
            minItems: getGridSize(), // use function to pull in initial value
            maxItems: getGridSize() // use function to pull in initial value
        }
    );

    // check grid size on resize event
    $window.resize( function()
        {
            var gridSize = getGridSize();

            flexslider.data().flexslider.vars.minItems = gridSize;
            flexslider.data().flexslider.vars.maxItems = gridSize;
        }
    );
} );