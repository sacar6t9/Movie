import { Component, OnInit } from '@angular/core';
import { Feedback } from '../data/model/feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit{
    feedback:Feedback=new Feedback('','',2,"",'')
    submitFeedback(){
      console.log('feedback form [submit]', this.feedback)
    }
    ngOnInit(): void {
    
  }

}
