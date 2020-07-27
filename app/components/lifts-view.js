import Component from '@glimmer/component';

export default class LiftsViewComponent extends Component {
    upstart1() {
        let rectElement = document.getElementById('lift-1');
        console.log(rectElement.getAttribute("class"))
        let currentClass = rectElement.getAttribute("class");
        if (currentClass) {
            rectElement.classList.remove(`${currentClass}`);
            rectElement.classList.add('upAnimation1');
            return;
        }
        rectElement.classList.add('upAnimation1');
    }
    upstart2() {
        let rectElement = document.getElementById('lift-1');
        console.log(rectElement.getAttribute("class"))
        let currentClass = rectElement.getAttribute("class");
        if (currentClass) {
            rectElement.classList.remove(`${currentClass}`);
            rectElement.classList.add('upAnimation2');
            return;
        }
        rectElement.classList.add('upAnimation2');
    }
    upstart3() {
        let rectElement = document.getElementById('lift-1');
        console.log(rectElement.getAttribute("class"))
        let currentClass = rectElement.getAttribute("class");
        if (currentClass) {
            rectElement.classList.remove(`${currentClass}`);
            rectElement.classList.add('upAnimation3');
            return;
        }
        rectElement.classList.add('upAnimation3');
    }
    upstart4() {
        let rectElement = document.getElementById('lift-1');
        console.log(rectElement.getAttribute("class"))
        let currentClass = rectElement.getAttribute("class");
        if (currentClass) {
            rectElement.classList.remove(`${currentClass}`);
            rectElement.classList.add('upAnimation4');
            return;
        }
        rectElement.classList.add('upAnimation4');
    }
    downstart1() {
        let rectElement = document.getElementById('lift-1');
        console.log(rectElement.getAttribute("class"))
        let currentClass = rectElement.getAttribute("class");
        if (currentClass) {
            rectElement.classList.remove(`${currentClass}`);
            rectElement.classList.add('downAnimation1');
            return;
        }
        rectElement.classList.add('downAnimation1');
    }
    downstart2() {
        let rectElement = document.getElementById('lift-1');
        console.log(rectElement.getAttribute("class"))
        let currentClass = rectElement.getAttribute("class");
        if (currentClass) {
            rectElement.classList.remove(`${currentClass}`);
            rectElement.classList.add('downAnimation2');
            return;
        }
        rectElement.classList.add('downAnimation2');
    }
    downstart3() {
        let rectElement = document.getElementById('lift-1');
        console.log(rectElement.getAttribute("class"))
        let currentClass = rectElement.getAttribute("class");
        if (currentClass) {
            rectElement.classList.remove(`${currentClass}`);
            rectElement.classList.add('downAnimation3');
            return;
        }
        rectElement.classList.add('downAnimation3');
    }
    downstart4() {
        let rectElement = document.getElementById('lift-1');
        console.log(rectElement.getAttribute("class"))
        let currentClass = rectElement.getAttribute("class");
        if (currentClass) {
            rectElement.classList.remove(`${currentClass}`);
            rectElement.classList.add('downAnimation4');
            return;
        }
        rectElement.classList.add('downAnimation4');
    }
    zero() {
        let rectElement = document.getElementById('lift-1');
        let currentClass = rectElement.getAttribute("class");
        rectElement.classList.remove(`${currentClass}`);
        rectElement.classList.add('zeroUp');
    }
    downstart5() {
        let rectElement = document.getElementById('lift-1');
        let currentClass = rectElement.getAttribute("class");
        rectElement.classList.remove(`${currentClass}`);
        rectElement.classList.add('downAnimation5');
    }
}