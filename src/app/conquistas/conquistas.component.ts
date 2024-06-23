import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-conquistas',
  templateUrl: './conquistas.component.html',
  imports: [],
  standalone: true,
  styleUrls: ['./conquistas.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConquistasComponent {
  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('iconCardsContent') iconCardsContent!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (this.toggleButton && this.toggleButton.nativeElement) {
      this.renderer.listen(this.toggleButton.nativeElement, 'click', () => this.classToggle());
    }
  }

  classToggle() {
    if (this.iconCardsContent && this.iconCardsContent.nativeElement) {
      this.renderer.addClass(this.iconCardsContent.nativeElement, 'step-animation');
    }
  }
}
