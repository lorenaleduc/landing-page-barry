import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { PackSection } from './components/pack-section/pack-section';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, PackSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}