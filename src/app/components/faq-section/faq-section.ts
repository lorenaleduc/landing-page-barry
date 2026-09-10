import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  imports: [],
  templateUrl: './faq-section.html',
  styleUrl: './faq-section.scss'
})
export class FaqSection {
  openIndex: number | null = null;

  toggleFaq(index: number): void {
    if (this.openIndex === index) {
      this.openIndex = null;
    } else {
      this.openIndex = index;
    }
  }
}