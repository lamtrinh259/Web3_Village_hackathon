import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent {

  questions = [
    {
      title: 'Question 1',
      answer: 'Answer to question 1',
      showAnswer: false
    },
    {
      title: 'Question 2',
      answer: 'Answer to question 2',
      showAnswer: false
    },
    {
      title: 'Question 3',
      answer: 'Answer to question 3',
      showAnswer: false
    }
    // Add more questions as needed
  ];

  toggleAnswer(question: any) {
    question.showAnswer = !question.showAnswer;
  }
}






// import { Component, OnInit } from '@angular/core';
// import {  Renderer2 } from '@angular/core';


// @Component({
//   selector: 'app-faq',
//   templateUrl: './faq.component.html',
//   styleUrls: ['./faq.component.css']
// })
// export class FAQComponent implements OnInit {

//   constructor(private renderer: Renderer2) { }

//   ngOnInit() {
//     const script = this.renderer.createElement('script');
//     script.src = '/Users/TBALO/Projects/Angular/Polkadot_APAC_hackathon/frontend/src/app/faq/script.js';
//     this.renderer.appendChild(document.body, script);
//   }

  
// }

