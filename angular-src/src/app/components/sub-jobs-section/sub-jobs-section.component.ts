import { Component, OnInit } from '@angular/core';
import {GlobalsService} from '../../services/globals.service';
import {Criteria} from '../../services/globals.service';


@Component({
  selector: 'app-sub-jobs-section',
  templateUrl: './sub-jobs-section.component.html',
  styleUrls: ['./sub-jobs-section.component.css']
})
export class SubJobsSectionComponent implements OnInit {
  subJobsSection: Map<Criteria,any>;


  constructor(private globals:GlobalsService) { 
    this.subJobsSection = new Map;
    this.subJobsSection[Criteria.medicine] = {
      imageUrl : "294c28_b9de5ee990d246dfae38c219eec586aa-mv2_Easy-Resize.com.jpg",
      subJobsNames : ["עובד מעבדה רפואית","סייעות שיניים","טכנאי רנטגן","דיאטנית","פראמדיק","אחות","רופא","רוקחות","פיזיוטרפיה"]
    };
    this.subJobsSection[Criteria.science] = {
      imageUrl : "294c28_bdaf28e1124e41ad8c94acaa0bbca2c4-mv2_d_5184_3456_s_4_2_Easy-Resize.com.jpg",
      subJobsNames : ["כימאי","מתמטיקאי","עוזר מחקר","פיתוח אלגוריתמים","סטטיסטיקאי","פיזיקאי","ניהול מחקר"]
    } 
    this.subJobsSection[Criteria.socialScience] = {
      imageUrl : "rsz_294c28_779783bc8ee24f24863ba17614808d98-mv2_d_5013_4634_s_4_2.png",
      subJobsNames :  ["סוציאלוג","אנטרופולוג","סוקר שטח","בלשן","ספרן"]
    } 
    this.subJobsSection[Criteria.hospitality] = {
      imageUrl : "teapot-2174333_1920_Easy-Resize.com.jpg",
      subJobsNames : ["מלצר","מדריך תיירות","עובד ניקיון","שף","פקיד קבלה","ברמן","עובד מטבח","צוות הוואי ובידור","מנהל מלון"]
    } ;
    this.subJobsSection[Criteria.service] = {
      imageUrl : "ibin-siraj-261547_Easy-Resize.com.jpg",
      subJobsNames : ["מדריך ספורט","מטפל סיעודי","יופי וטיפוח","מורה פרטי","רפואה משלימה","קואצ'ר","עובד סוציאלי","פסיכולוג","מדריך שיקומי"]
    }
    this.subJobsSection[Criteria.transport] = {
      imageUrl : "1_Easy-Resize.com.jpg",
      subJobsNames : ["מלח","שליח","נהג","מהנדס תחבורה","חובל","טייס","מנהל מוסך"]
    }
    this.subJobsSection[Criteria.industry] = {
      imageUrl : "chester-alvarez-644_Easy-Resize.com.jpg",
      subJobsNames : ["מתקין","חשמלאי","אבטחת איכות","עובד ייצור","מנהל עבודה","מחסנאי","עובד בניין", "מכונאי", "ממונה בטיחות", "מפקח בנייה", "קניין", "לבורנט", "מנהל פרוייקטים", "מנהל מפעל", "מנהל מעבדה", "מהנדס ייצור"]
    }
    this.subJobsSection[Criteria.technology] = {
      imageUrl : "294c28_8e607e8f21724436affe7b670964f225-mv2_d_5616_3744_s_4_2_Easy-Resize.com.jpg",
      subJobsNames : ["מהנדס תוכנה","בודק תוכנה","מנהל רשת",'חוקר מו"פ',"מהנדס מערכות מידע","מפתח WEB","מהנדס מכונות", "מהנדס כימיה", "מהנדס חשמל ואלקטרוניקה", "מהנדס ביוטכנלוגיה", "מהנדס תעשייה וניהול"]
    }
    console.log(globals.currentSubJob);

  }

  ngOnInit() {
  }


}
