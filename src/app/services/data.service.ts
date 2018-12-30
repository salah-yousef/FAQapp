import { Injectable } from '@angular/core';
import { Question } from "../models/Question";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  questions:Question[];

  constructor() {
    this.questions = [
      {
        text:"what is your name",
        answer:"my name is salah",
        hide:true
      },
      {
        text:"what is your age",
        answer:"my age is 25",
        hide:true
      },
      {
        text:"what is your job",
        answer:"my job is frontend developer",
        hide:true
      },
    ];

   }

   getQuestions() {
     return this.questions;
   }

   addQuestion(question) {
     this.questions.unshift(question);
   }
}