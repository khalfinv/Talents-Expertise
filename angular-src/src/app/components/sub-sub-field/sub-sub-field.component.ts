import { Component, OnInit } from '@angular/core';
import {GlobalsService} from '../../services/globals.service';
import {subSubCriteria} from '../../services/globals.service';


@Component({
  selector: 'app-sub-sub-field',
  templateUrl: './sub-sub-field.component.html',
  styleUrls: ['./sub-sub-field.component.css']
})
export class SubSubFieldComponent implements OnInit {
  subSubJobFields: Map<subSubCriteria,any>;


  constructor(private globals:GlobalsService) { 
    console.log("Enter on constructore");
    this.subSubJobFields = new Map;
    this.subSubJobFields[subSubCriteria.medicine] = {
      imageUrl : "294c28_b9de5ee990d246dfae38c219eec586aa-mv2_Easy-Resize.com.jpg",
      names : ["עובד מעבדה רפואית","סייעות שיניים","טכנאי רנטגן","דיאטנית","פראמדיק","אחות","רופא","רוקחות","פיזיוטרפיה"]
    };
    this.subSubJobFields[subSubCriteria.science] = {
      imageUrl : "294c28_bdaf28e1124e41ad8c94acaa0bbca2c4-mv2_d_5184_3456_s_4_2_Easy-Resize.com.jpg",
      names : ["כימאי","מתמטיקאי","עוזר מחקר","פיתוח אלגוריתמים","סטטיסטיקאי","פיזיקאי","ניהול מחקר"]
    } 
    this.subSubJobFields[subSubCriteria.socialScience] = {
      imageUrl : "rsz_294c28_779783bc8ee24f24863ba17614808d98-mv2_d_5013_4634_s_4_2.png",
      names :  ["סוציאלוג","אנטרופולוג","סוקר שטח","בלשן","ספרן"]
    } 
    this.subSubJobFields[subSubCriteria.hospitality] = {
      imageUrl : "teapot-2174333_1920_Easy-Resize.com.jpg",
      names : ["מלצר","מדריך תיירות","עובד ניקיון","שף","פקיד קבלה","ברמן","עובד מטבח","צוות הוואי ובידור","מנהל מלון"]
    } ;
    this.subSubJobFields[subSubCriteria.service] = {
      imageUrl : "ibin-siraj-261547_Easy-Resize.com.jpg",
      names : ["מדריך ספורט","מטפל סיעודי","יופי וטיפוח","מורה פרטי","רפואה משלימה","קואצ'ר","עובד סוציאלי","פסיכולוג","מדריך שיקומי"]
    }
    this.subSubJobFields[subSubCriteria.transport] = {
      imageUrl : "1_Easy-Resize.com.jpg",
      names : ["מלח","שליח","נהג","מהנדס תחבורה","חובל","טייס","מנהל מוסך"]
    }
    this.subSubJobFields[subSubCriteria.industry] = {
      imageUrl : "chester-alvarez-644_Easy-Resize.com.jpg",
      names : ["מתקין","חשמלאי","אבטחת איכות","עובד ייצור","מנהל עבודה","מחסנאי","עובד בניין", "מכונאי", "ממונה בטיחות", "מפקח בנייה", "קניין", "לבורנט", "מנהל פרוייקטים", "מנהל מפעל", "מנהל מעבדה", "מהנדס ייצור"]
    }
    this.subSubJobFields[subSubCriteria.technology] = {
      imageUrl : "294c28_8e607e8f21724436affe7b670964f225-mv2_d_5616_3744_s_4_2_Easy-Resize.com.jpg",
      names : ["מהנדס תוכנה","בודק תוכנה","מנהל רשת",'חוקר מו"פ',"מהנדס מערכות מידע","מפתח WEB","מהנדס מכונות", "מהנדס כימיה", "מהנדס חשמל ואלקטרוניקה", "מהנדס ביוטכנלוגיה", "מהנדס תעשייה וניהול"]
    }
    this.subSubJobFields[subSubCriteria.finance] = {
      imageUrl : "294c28_8e607e8f21724436affe7b670964f225-mv2_d_5616_3744_s_4_2_Easy-Resize.com.jpg",
      names : ["יועץ השקעות","חשב שכר","פקיד גבייה","בנקאי","אנליסט","שמאי","סוכן ביטוח", "רואה חשבון"]
    }
    this.subSubJobFields[subSubCriteria.finance] = {
      imageUrl : "ben-white-197668_Easy-Resize.com.jpg",
      names : ["יועץ השקעות","חשב שכר","פקיד גבייה","בנקאי","אנליסט","שמאי","סוכן ביטוח", "רואה חשבון"]
    }
    this.subSubJobFields[subSubCriteria.humanResource] = {
      imageUrl : "6021688217_5f1faa3c82_b_Easy-Resize.com.jpg",
      names : ["מנהל משאבי אנוש","רכז אבחון והשמה","רכז הדרכה","רכז משאבי אנוש","מנהל מערך הדרכה","יועץ ארגוני"]
    }
    this.subSubJobFields[subSubCriteria.administration] = {
      imageUrl : "294c28_03046c66df654115a7ebe267f60cea62-mv2_Easy-Resize.com.jpg",
      names : ["רפרנט רגולציה","מנהל משרד","מזכיר","נציג בק אופיס","מנהל לוגיסטיקה","מתאם לוגיסטי"]
    }
    this.subSubJobFields[subSubCriteria.nature] = {
      imageUrl : "vladimir-kudinov-12755_Easy-Resize.com.jpg",
      names : ["אגרונום","גנן","עובד חקלאות","גאולוג","טיפול בבעלי חיים"]
    }
    this.subSubJobFields[subSubCriteria.security] = {
      imageUrl : "vladimir-kudinov-12755_Easy-Resize.com.jpg",
      names : ["מוקד בטחון","שוטר","מאבטח","מנהל בטחון","מנהל משמרת אבטחה", "קצין בטחון"]
    }
  }

  ngOnInit() {
  }


}
