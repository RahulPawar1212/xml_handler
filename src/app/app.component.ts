import { Component } from '@angular/core';
import { wendydata } from 'interfaces';
import { map } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xml_handler';
  testarray:string[] = ["aa","bb","cc","dd"];
  //map = new Map();

  questioner = [
    { 
      "id": "1",
      "qid": "Q1",
      "type": "",
      "title": "",
      "question": "",
      "instructionForRespondent": "",
      "answersRowOptions": [1,2,3,4],
      "scaleColumnOptions": [],
      "frageomrade": "",
      "CommentsForProgrammer": [],
    },
    { 
      "id": "2",
      "qid": "Q2",
      "type": "",
      "title": "",
      "question": "",
      "instructionForRespondent": "",
      "answersRowOptions": [],
      "scaleColumnOptions": [],
      "frageomrade": "",
      "CommentsForProgrammer": [],
    }
  ];

selectedCountry: String = "--Choose Country--";

expression:string = "";
    
newData:wendydata[] = JSON.parse(JSON.stringify(this.questioner))


updateExp(qid:any,answr:any) {
  this.expression = "Expression : " + "f('" + qid + "')=='" + answr+"'"  
}

questionid:string = "";

answers:any = []
changeQid(qid: any) { //Angular 11
  this.questionid = qid.target.value;
  //this.states = this.Countries.find(cntry => cntry.name == country).states; //Angular 8
  this.answers = this.newData.find((ans: any) => ans.qid == qid.target.value)?.answersRowOptions; //Angular 11
  this.updateExp(qid.target.value,"")
  console.log(this.answers)
  
}

changeAnswer(answers:any) { //Angular 11
  //this.states = this.Countries.find(cntry => cntry.name == country).states; //Angular 8
  //this.answers = this.newData.find((ans: any) => ans.qid == qid.target.value)?.answersRowOptions; //Angular 11
  this.updateExp(this.questionid,answers.target.value)
  console.log(answers.target.value)
  
}



//newdata2:any[] = eval(this.newdata1)

 //newdata = this.newData.map(item => [item.id , item.qid]).filter(mark => {})
 //newdata = this.newdata1 as wendydata[]
 tstfunc1() {
  console.log(JSON.stringify(this.newData))

 }

 qinfo = this.newData.find(function(record) { return record.id == "2" })

 tstfunc() {
 for (const key of  this.newData ) {
  //console.log (key.id) 
}
console.log (this.qinfo)
}
 
 wendyData: wendydata[] = [ ];
  
}
