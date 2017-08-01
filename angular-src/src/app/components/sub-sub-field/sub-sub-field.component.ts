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
      imageUrl : this.globals.fieldsImages[subSubCriteria.medicine] + ".jpg",
      names : ["עובד מעבדה רפואית","סייעות שיניים","טכנאי רנטגן","דיאטנית","פראמדיק","אחות","רופא","רוקחות","פיזיוטרפיה"]
    };
    this.subSubJobFields[subSubCriteria.science] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.science] + ".jpg",
      names : ["כימאי","מתמטיקאי","עוזר מחקר","פיתוח אלגוריתמים","סטטיסטיקאי","פיזיקאי","ניהול מחקר"]
    } 
    this.subSubJobFields[subSubCriteria.socialScience] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.socialScience] + ".png",
      names :  ["סוציאלוג","אנטרופולוג","סוקר שטח","בלשן","ספרן"]
    } 
    this.subSubJobFields[subSubCriteria.hospitality] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.hospitality] + ".jpg",
      names : ["מלצר","מדריך תיירות","עובד ניקיון","שף","פקיד קבלה","ברמן","עובד מטבח","צוות הוואי ובידור","מנהל מלון"]
    } ;
    this.subSubJobFields[subSubCriteria.service] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.service] + ".jpg",
      names : ["מדריך ספורט","מטפל סיעודי","יופי וטיפוח","מורה פרטי","רפואה משלימה","קואצ'ר","עובד סוציאלי","פסיכולוג","מדריך שיקומי"]
    }
    this.subSubJobFields[subSubCriteria.transport] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.transport] + ".jpg",
      names : ["מלח","שליח","נהג","מהנדס תחבורה","חובל","טייס","מנהל מוסך"]
    }
    this.subSubJobFields[subSubCriteria.industry] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.industry] + ".jpg",
      names : ["מתקין","חשמלאי","אבטחת איכות","עובד ייצור","מנהל עבודה","מחסנאי","עובד בניין", "מכונאי", "ממונה בטיחות", "מפקח בנייה", "קניין", "לבורנט", "מנהל פרוייקטים", "מנהל מפעל", "מנהל מעבדה", "מהנדס ייצור"]
    }
    this.subSubJobFields[subSubCriteria.technology] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.technology] + ".jpg",
      names : ["מהנדס תוכנה","בודק תוכנה","מנהל רשת",'חוקר מו"פ',"מהנדס מערכות מידע","מפתח WEB","מהנדס מכונות",
       "מהנדס כימיה", "מהנדס חשמל ואלקטרוניקה", "מהנדס ביוטכנלוגיה", "מהנדס תעשייה וניהול"]
    }
    this.subSubJobFields[subSubCriteria.finance] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.finance] + ".jpg",
      names : ["יועץ השקעות","חשב שכר","פקיד גבייה","בנקאי","אנליסט","שמאי","סוכן ביטוח", "רואה חשבון"]
    }
    this.subSubJobFields[subSubCriteria.humanResource] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.humanResource] + ".jpg",
      names : ["מנהל משאבי אנוש","רכז אבחון והשמה","רכז הדרכה","רכז משאבי אנוש","מנהל מערך הדרכה","יועץ ארגוני"]
    }
    this.subSubJobFields[subSubCriteria.administration] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.administration] + ".jpg",
      names : ["רפרנט רגולציה","מנהל משרד","מזכיר","נציג בק אופיס","מנהל לוגיסטיקה","מתאם לוגיסטי"]
    }
    this.subSubJobFields[subSubCriteria.nature] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.nature] + ".jpg",
      names : ["אגרונום","גנן","עובד חקלאות","גאולוג","טיפול בבעלי חיים"]
    }
    this.subSubJobFields[subSubCriteria.security] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.security] + ".jpg",
      names : ["מוקד בטחון","שוטר","מאבטח","מנהל בטחון","מנהל משמרת אבטחה", "קצין בטחון"]
    }
    this.subSubJobFields[subSubCriteria.entertainment] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.entertainment] + ".jpg",
      names : ["שחקן","רקדן","תאורן","איש סאונד","במאי", "מוזיקאי"]
    }
    this.subSubJobFields[subSubCriteria.writingAndCommunication] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.writingAndCommunication] + ".jpg",
      names : ["עורך","עיתונאי","כותב תוכן","מתרגם","סופר"]
    }
    this.subSubJobFields[subSubCriteria.creation] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.creation] + ".jpg",
      names : ["מעצב פנים","מעצב גראפי","צייר","צלם","אדריכל","הנדסאי אדריכלות"]
    }
    this.subSubJobFields[subSubCriteria.management] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.management] + ".jpg",
      names : ["מנהל פיתוח עיסקי","מנהל סניף בקמעונאות","מנהל מוקד שירות","זכיין","מנהל כללי","שותף",'סמנכ"ל']
    }
    this.subSubJobFields[subSubCriteria.law] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.law] + ".com.jpg",
      names : ["יועץ משפטי","בורר","עורך דין","מתמחה משרד עורכי דין","שופט"]
    }
    this.subSubJobFields[subSubCriteria.marketingAndSales] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.marketingAndSales] + ".jpg",
      names : ["מנהל תיק לקוח","קופאי","נציג מכירות","נציג שירות","מנהל קריאטיבי",
      "קופירייטר", "מקדם אתרים", 'יועץ נדל"ן', "מנהל יחסי ציבור","מנהל שיווק"]
    }
    this.subSubJobFields[subSubCriteria.education] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.education] + ".jpg",
      names : ["מורה","מדריך חברתי","גננת","מורה פרטי","חינוך מיוחד","רכז הדרכה",
      "מנהל בית הספר","מרצה"]
    }
    this.subSubJobFields[subSubCriteria.religion] = {
      imageUrl : this.globals.fieldsImages[subSubCriteria.religion] + ".jpg",
      names : ["מלמד","שוחט","משגיח כשרות","רב"]
    }

  }

  ngOnInit() {
  }


}
