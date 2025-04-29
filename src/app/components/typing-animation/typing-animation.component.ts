import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-typing-animation',
  templateUrl: './typing-animation.component.html',
  styleUrls: ['./typing-animation.component.css']
})
export class TypingAnimationComponent implements OnInit {
  fullText = 'TECNOLOGIA EN EL CAMPO';
  liveText = '';
  index = 0;
  isDeleting = false;
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.type();
    }
  }

  type(): void {
    if (!this.isBrowser) return;

    if (!this.isDeleting) {
      if (this.index < this.fullText.length) {
        this.liveText += this.fullText[this.index];
        this.index++;
        setTimeout(() => this.type(), 150);
      } else {
        this.isDeleting = true;
        setTimeout(() => this.type(), 1000);
      }
    } else {
      if (this.index > 0) {
        this.liveText = this.liveText.slice(0, -1);
        this.index--;
        setTimeout(() => this.type(), 100);
      } else {
        this.isDeleting = false;
        setTimeout(() => this.type(), 500);
      }
    }
  }
}
