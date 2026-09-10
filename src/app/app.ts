import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { PackSection } from './components/pack-section/pack-section';
import { BenefitsSection } from './components/benefits-section/benefits-section';
import { WhyChooseSection } from './components/why-choose-section/why-choose-section';
import { PricingSection } from './components/pricing-section/pricing-section';
import { FaqSection } from './components/faq-section/faq-section';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Hero,
    PackSection,
    BenefitsSection,
    WhyChooseSection,
    PricingSection,
    FaqSection,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
