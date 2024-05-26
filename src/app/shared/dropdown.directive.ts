import { Directive, Renderer2, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: "[appDropdown]"
})
export class DropdownDirective {
    isOpen = false;
    style = "position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(66px, 40px);"

    constructor(private renderer: Renderer2, private el: ElementRef) {
        this.renderer.listen('window', 'click',(e:Event)=>{
            /**
             * to handle click outside
             */
            const nextSibling = this.el.nativeElement.nextSibling;
            if(e.target !== this.el.nativeElement && e.target !== nextSibling && this.isOpen) {
                this.removeRenderClass(nextSibling);
                this.isOpen = false;
            }
       });
    }

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
        const nextSibling = this.el.nativeElement.nextSibling;
        if(this.isOpen) {
            this.renderer.addClass(this.el.nativeElement,'show');
            this.renderer.addClass(nextSibling, 'show');
            this.renderer.setProperty(nextSibling, "style", this.style);
        } else {
            this.removeRenderClass(nextSibling)
        }
    }

    removeRenderClass(nextEl: HTMLElement) {
        this.renderer.removeClass(this.el.nativeElement,'show');
        this.renderer.removeClass(nextEl, 'show');
    }
}