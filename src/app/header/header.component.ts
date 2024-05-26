import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: "app-header",
    templateUrl: 'header.component.html'
})
export class HeaderComponent {
    @Output() select: EventEmitter<string> = new EventEmitter();

    onSelect(val: string) {
        this.select.emit(val);
    }
}