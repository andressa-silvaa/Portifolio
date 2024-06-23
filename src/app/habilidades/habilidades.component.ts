import { Component, OnInit, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [],
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Inicialização pode ocorrer aqui, mas não é necessário para @ViewChild
  }

  ngOnInit(): void {
    const nextBtn = this.el.nativeElement.querySelector('.next');
    const prevBtn = this.el.nativeElement.querySelector('.prev');
    const slider = this.el.nativeElement.querySelector('.slider');
    const sliderList = slider.querySelector('.slider .list');
    const thumbnail = this.el.nativeElement.querySelector('.slider .thumbnail');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    thumbnail.appendChild(thumbnailItems[0]);

    // Função para o botão "next"
    this.renderer.listen(nextBtn, 'click', () => {
      this.moveSlider('next', slider, sliderList, thumbnail);
    });

    // Função para o botão "prev"
    this.renderer.listen(prevBtn, 'click', () => {
      this.moveSlider('prev', slider, sliderList, thumbnail);
    });
  }

  moveSlider(direction: string, slider: HTMLElement, sliderList: HTMLElement, thumbnail: HTMLElement) {
    const sliderItems = sliderList.querySelectorAll('.item');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    if (direction === 'next') {
      sliderList.appendChild(sliderItems[0]);
      thumbnail.appendChild(thumbnailItems[0]);
      this.renderer.addClass(slider, 'next');
    } else {
      sliderList.prepend(sliderItems[sliderItems.length - 1]);
      thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
      this.renderer.addClass(slider, 'prev');
    }

    const animationEndListener = this.renderer.listen(slider, 'animationend', () => {
      if (direction === 'next') {
        this.renderer.removeClass(slider, 'next');
      } else {
        this.renderer.removeClass(slider, 'prev');
      }
      animationEndListener(); // Remove the event listener
    });
  }
}
