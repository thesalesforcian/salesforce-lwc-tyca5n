// canvas.js
import { LightningElement, api } from 'lwc';

export default class Canvas extends LightningElement {
    @api objects;
    @api relationships;
    @api zoomLevel;

    handleDrag(event) {
        const objectId = event.target.dataset.id;
        const x = event.detail.x;
        const y = event.detail.y;
        this.dispatchEvent(new CustomEvent('objectmove', { detail: { objectId, x, y } }));
    }
}
