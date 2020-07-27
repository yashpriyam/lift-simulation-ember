import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LiftsViewComponent extends Component {
    liftTrack = {
        'lift-one': 0,
        'lift-two': 0,
        'lift-three': 0
    };
    @action
    upstart1() {
        let [nearestLift] = this.getNearestLift(1);;
        let rectElement = document.getElementById(nearestLift);
        let currentClass = rectElement.getAttribute("class");
        if (currentClass) {
            rectElement.classList.remove(`${currentClass}`);
            rectElement.classList.add('upAnimation1');
        } else {
            rectElement.classList.add('upAnimation1');
        }
        console.log(nearestLift);
        this.liftTrack[nearestLift] = 1;
    }
    @action
    upstart2() {
        let [nearestLift] = this.getNearestLift(2);;
        let rectElement = document.getElementById(nearestLift);
        let currentClass = rectElement.getAttribute("class");
        if (currentClass) {
            rectElement.classList.remove(`${currentClass}`);
            rectElement.classList.add('upAnimation2');

        } else {
            rectElement.classList.add('upAnimation2');
        }
        console.log(nearestLift);
        this.liftTrack[nearestLift] = 2;
    }
    @action
    upstart3() {
        let [nearestLift] = this.getNearestLift(3);
        let rectElement = document.getElementById(nearestLift);
        let currentClass = rectElement.getAttribute("class");
        if (currentClass) {
            rectElement.classList.remove(`${currentClass}`);
            rectElement.classList.add('upAnimation3');

        } else {
            rectElement.classList.add('upAnimation3');
        }
        console.log(nearestLift);
        this.liftTrack[nearestLift] = 3;
    }
    @action
    upstart4() {
        let [nearestLift] = this.getNearestLift(4);
        let rectElement = document.getElementById(nearestLift);
        let currentClass = rectElement.getAttribute("class");
        if (currentClass) {
            rectElement.classList.remove(`${currentClass}`);
            rectElement.classList.add('upAnimation4');

        } else {
            rectElement.classList.add('upAnimation4');
        }
        console.log(nearestLift);
        this.liftTrack[nearestLift] = 4;
    }
    @action
    downstart1() {
        let [nearestLift] = this.getNearestLift(1);
        let rectElement = document.getElementById(nearestLift);
        let currentClass = rectElement.getAttribute("class");
        if (currentClass) {
            rectElement.classList.remove(`${currentClass}`);
            rectElement.classList.add('downAnimation1');

        } else {
            rectElement.classList.add('downAnimation1');
        }
        console.log(nearestLift);
        this.liftTrack[nearestLift] = 1;
    }
    @action
    downstart2() {
        let [nearestLift] = this.getNearestLift(2);
        let rectElement = document.getElementById(nearestLift);
        let currentClass = rectElement.getAttribute("class");
        if (currentClass) {
            rectElement.classList.remove(`${currentClass}`);
            rectElement.classList.add('downAnimation2');

        } else {
            rectElement.classList.add('downAnimation2');
        }
        console.log(nearestLift);
        this.liftTrack[nearestLift] = 2;
    }
    @action
    downstart3() {
        let [nearestLift] = this.getNearestLift(3);
        let rectElement = document.getElementById(nearestLift);
        let currentClass = rectElement.getAttribute("class");
        if (currentClass) {
            rectElement.classList.remove(`${currentClass}`);
            rectElement.classList.add('downAnimation3');

        } else {
            rectElement.classList.add('downAnimation3');
        }
        console.log(nearestLift);
        this.liftTrack[nearestLift] = 3;
    }
    @action
    downstart4() {
        let [nearestLift] = this.getNearestLift(4);
        let rectElement = document.getElementById(nearestLift);
        let currentClass = rectElement.getAttribute("class");
        if (currentClass) {
            rectElement.classList.remove(`${currentClass}`);
            rectElement.classList.add('downAnimation4');

        } else {
            rectElement.classList.add('downAnimation4');
        }
        console.log(nearestLift);
        this.liftTrack[nearestLift] = 4;
    }
    @action
    zero() {
        let [nearestLift] = this.getNearestLift(0);
        let rectElement = document.getElementById(nearestLift);
        let currentClass = rectElement.getAttribute("class");
        rectElement.classList.remove(`${currentClass}`);
        rectElement.classList.add('zeroUp');
        console.log(nearestLift);
        this.liftTrack[nearestLift] = 0;
    }
    @action
    downstart5() {
        let [nearestLift] = this.getNearestLift(5);
        let rectElement = document.getElementById(nearestLift);
        let currentClass = rectElement.getAttribute("class");
        rectElement.classList.remove(`${currentClass}`);
        rectElement.classList.add('downAnimation5');
        console.log(nearestLift);
        this.liftTrack[nearestLift] = 5;
    }

    getNearestLift(currentFloor) {
        return Object.entries(this.liftTrack).reduce((a, b) => {
            console.log(a, b);
            return Math.abs(b[1] - currentFloor) < Math.abs(a[1] - currentFloor) ? b : a;
        });
    }
}