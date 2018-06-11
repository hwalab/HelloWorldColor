/*
 *  Hello World Color. Copyright (c) 2018 HWALab. MIT License.
 *  https://www.hwalab.com/helloworldcolor/
 */

(function App() {

    "use strict";

    /**
     * Returns a random color.
     * @returns {string} A hex color string.
     */
    function getRandomColor() {
        const rndInt = (max) => Math.floor(Math.random() * Math.floor(max));
        const rndComp = () => `0${rndInt(256).toString(16)}`.substr(-2).toUpperCase();
        return `#${rndComp()}${rndComp()}${rndComp()}`;
    }

    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    document.title = `Hello World ${randomColor}`;

}());
