/*
 *  Hello World Color. Copyright (c) 2018 HWALab. MIT License.
 *  https://www.hwalab.com/helloworldcolor/
 */

(function App() {

    "use strict";

    /**
     * Returns a random RGB color.
     * @returns {string} A rgb() color string.
     */
    function getRandomColor() {
        const MAX_RGB = 256;
        const randomInt = (max) => Math.floor(Math.random() * Math.floor(max));

        return `rgb(${randomInt(MAX_RGB)}, ${randomInt(MAX_RGB)}, ${randomInt(MAX_RGB)}`;
    }

    document.body.style.backgroundColor = getRandomColor();

}());
