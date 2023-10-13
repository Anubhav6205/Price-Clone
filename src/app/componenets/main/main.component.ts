import { Component } from '@angular/core';
import { Card } from '../Card';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  cards: Card[];
  constructor() {
    this.cards = [
      {
        title: 'Free',
        price: 0,
        desc: [
          '10 users included',
          '2 GB of storage',
          'Email support',
          'Help center access',
        ],
        button: ['btn-outline-primary', 'Sign up for free'],
      },
      {
        title: 'Standard',
        price: 15,
        desc: [
          '20 users included',
          '10 GB of storage',
          'Priority email support',
          ' Help center access',
        ],
        button: ['btn-primary', 'Get started'],
      },
      {
        title: 'Premium',
        price: 29,
        desc: ["30 users included",
        "15 GB of storage",
        "Phone and email support",
        "Help center access"],
        button: ['btn-primary', 'Contact us'],
      },
    ];
  }
}
