import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LiftsComponent extends Component {
    @action
    downstart5() {
        alert('hi');
    }
}