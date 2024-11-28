// sidebar.js
import { LightningElement, api } from 'lwc';

export default class Sidebar extends LightningElement {
    @api objects;

    handleSearch(event) {
        const filterText = event.target.value;
        this.dispatchEvent(new CustomEvent('filterchange', { detail: { filterText } }));
    }

    handleObjectClick(event) {
        const objectId = event.target.dataset.id;
        this.dispatchEvent(new CustomEvent('objectselect', { detail: { objectId } }));
    }
}
