import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {

  firstMultiplicant: number;
  secondMultiplicant: number;
  product: number;
  finalAnswer: number;
  answerString = 'Waiting for your answer Ms Makenzie'
  userAnswer: number;

  constructor() { }

  ngOnInit(): void {
  }

  productOfNumbers(){
    
    this.product= this.firstMultiplicant * this.secondMultiplicant;
    console.log(this.product);
    this.finalAnswer = this.product
    console.log(this.finalAnswer);
    this.productCheck(this.userAnswer, this.finalAnswer);
    // if(this.finalAnswer !== (this.userAnswer)){
    //   this.answerString = 'It is Wrong,You can do better Makenzie, try again ' + this.finalAnswer;
    // }
    // else{
    //   this.answerString = 'Great the answer is '+ this.finalAnswer;
    // }

    // if(this.userAnswer=== this.product){
    //   console.log(this.userAnswer);
    //   this.finalAnswer = this.product
    //   this.answerString = 'Great the answer is '+ this.finalAnswer;
    // }
    // else{
    //   console.log(this.userAnswer);
    //   this.answerString = 'It is Wrong,You can do better Makenzie, try again' + this.finalAnswer;
    // }
  }
  productCheck(number1: number, number2: number){
    if(number1 == number2){
      this.answerString = 'Great the answer is '+ this.finalAnswer;

    }
    else{
      this.answerString = 'It is Wrong,You can do better Makenzie, try again';
    }

  }

}
