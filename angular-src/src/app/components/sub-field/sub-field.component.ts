import { Component, OnInit } from '@angular/core';
import {GlobalsService} from '../../services/globals.service';
import {subCriteria} from '../../services/globals.service';
import {subSubCriteria} from '../../services/globals.service';

@Component({
  selector: 'app-sub-field',
  templateUrl: './sub-field.component.html',
  styleUrls: ['./sub-field.component.css']
})
export class SubFieldComponent implements OnInit {
  subFields: Map<subCriteria,any>;
  imagesFolderPath: string;
  readonly twoImagesWidth: string;
  readonly twoImagesHeight: string;
  readonly twoImagesSizes: string;
  readonly threeImagesWidth: string;
  readonly threeImagesHeight: string;
  readonly threeImagesSizes: string;
  constructor(private globals:GlobalsService) { 
    this.imagesFolderPath = "images/"
    this.twoImagesWidth = "530";
    this.twoImagesHeight = "350";
    this.twoImagesSizes = "(max-width: 767px) 93vw, 530px";
    this.threeImagesWidth = "350";
    this.threeImagesHeight = "250";
    this.threeImagesSizes = "(max-width: 479px) 87vw, 350px";
    this.subFields = new Map;
    console.log(this.globals.currentSubField);

    this.subFields[subCriteria.workWithPeople] = [
    {
      sizes : this.twoImagesSizes,
      width : this.twoImagesWidth,
      height : this.twoImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.service] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.service] + "-p-1080.jpeg 1080w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.service] + ".jpg 1280w",
      name : "שירות",
      subSubField: subSubCriteria.service 
    },
    {
      sizes : this.twoImagesSizes,
      width : this.twoImagesWidth,
      height : this.twoImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.hospitality] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.hospitality] + "-p-1080.jpeg 1080w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.hospitality] + ".jpg 1280w",
      name : "אירוח וניקיון",
      subSubField: subSubCriteria.hospitality 
    },   
    ]
    this.subFields[subCriteria.industry] = [
    {
      sizes : this.threeImagesSizes,
      width : this.threeImagesWidth,
      height : this.threeImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.industry] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.industry] + "-p-500.jpeg 500w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.industry] + "-p-800.jpeg 800w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.industry] + ".jpg 886w",
      name : "ייצור בנייה ואחזקה",
      subSubField: subSubCriteria.industry 
    },
    {
      sizes : this.threeImagesSizes,
      width : this.threeImagesWidth,
      height : this.threeImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.technology] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.technology] + "-p-1080.jpeg 1080w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.technology] + ".jpg 1280w",
      name : "טכנולוגיה",
      subSubField: subSubCriteria.technology 
    },
    {
      sizes : this.threeImagesSizes,
      width : this.threeImagesWidth,
      height : this.threeImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.transport] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.transport] + "-p-500.jpeg 500w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.transport] + "-p-800.jpeg 800w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.transport] + "-p-1080.jpeg 1080w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.transport] + ".jpg 1280w",
      name : "תחבורה, שליחים ורכב",
      subSubField: subSubCriteria.transport 
    }, 
    ]
    this.subFields[subCriteria.creativeWork] = [
    {
      sizes : this.threeImagesSizes,
      width : this.threeImagesWidth,
      height : this.threeImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.entertainment] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.entertainment] + "-p-800.jpeg 800w, " +
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.entertainment] + "-p-1080.jpeg 1080w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.entertainment] + ".jpg 1280w",
      name : "בידור",
      subSubField: subSubCriteria.entertainment 
    }, 
    {
      sizes : this.threeImagesSizes,
      width : this.threeImagesWidth,
      height : this.threeImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.writingAndCommunication] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.writingAndCommunication] + "-p-500.jpeg 500w, " +
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.writingAndCommunication] + "-p-800.jpeg 800w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.writingAndCommunication] + "-p-1080.jpeg 1080w, " +
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.writingAndCommunication] + ".jpg 1280w",
      name : "כתיבה ותקשורת",
      subSubField: subSubCriteria.writingAndCommunication 
    }, 
    {
      sizes : this.threeImagesSizes,
      width : this.threeImagesWidth,
      height : this.threeImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.creation] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.creation] + "-p-500.jpeg 500w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.creation] + "-p-1080.jpeg 1080w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.creation] + ".jpg 1280w",
      name : "יצירה",
      subSubField: subSubCriteria.creation 
    }, 
    ]
    this.subFields[subCriteria.business] = [
    {
      sizes : this.threeImagesSizes,
      width : this.threeImagesWidth,
      height : this.threeImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.management] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.management] + "-p-1080.jpeg 1080w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.management] + ".jpg 1280w",
      name : "ניהול",
      subSubField: subSubCriteria.management 
    }, 
    {
      sizes : this.threeImagesSizes,
      width : this.threeImagesWidth,
      height : this.threeImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.law] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.law] + ".com-p-1080.jpeg 1080w, " +
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.law] + ".com.jpg 1280w",
      name : "משפטים",
      subSubField: subSubCriteria.law 
    },
    {
      sizes : this.threeImagesSizes,
      width : this.threeImagesWidth,
      height : this.threeImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.marketingAndSales] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.marketingAndSales] + "-p-500.jpeg 500w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.marketingAndSales] + "-p-1080.jpeg 1080w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.marketingAndSales] + "-p-1600.jpeg 1600w, " +
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.marketingAndSales] + "-p-2000.jpeg 2000w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.marketingAndSales] + ".jpg 2304w",
      name : "שיווק, מכירות ופרסום",
      subSubField: subSubCriteria.marketingAndSales 
    },
    ]
    this.subFields[subCriteria.education] = [
    {
      sizes : this.twoImagesSizes,
      width : this.twoImagesWidth,
      height : this.twoImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.education] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.education] + "-p-1080.jpeg 1080w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.education] + ".jpg 1280w",
      name : "חינוך והוראה",
      subSubField: subSubCriteria.education 
    },
    {
      sizes : this.twoImagesSizes,
      width : this.twoImagesWidth,
      height : this.twoImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.religion] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.religion] + "-p-1080.jpeg 1080w, " +
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.religion] + ".jpg 1280w",
      name : "דת",
      subSubField: subSubCriteria.religion 
    },
    ]
    this.subFields[subCriteria.organizationalWork] = [
    {
      sizes : this.threeImagesSizes,
      width : this.threeImagesWidth,
      height : this.threeImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.finance] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.finance] + "-p-1080.jpeg 1080w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.finance] + ".jpg 1280w",
      name : "כספים",
      subSubField: subSubCriteria.finance 
    },
    {
      sizes : this.threeImagesSizes,
      width : this.threeImagesWidth,
      height : this.threeImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.humanResource] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.humanResource] + "-p-500.jpeg 500w, " +
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.humanResource] + "-p-1080.jpeg 1080w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.humanResource] + ".jpg 1280w",
      name : "משאבי אנוש",
      subSubField: subSubCriteria.humanResource 
    }, 
    {
      sizes : this.threeImagesSizes,
      width : this.threeImagesWidth,
      height : this.threeImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.administration] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.administration] + "-p-1080.jpeg 1080w, " + 
      this.imagesFolderPath +  this.globals.fieldsImages[subSubCriteria.administration] + ".jpg 1280w",
      name : "עבודה ארגונית",
      subSubField: subSubCriteria.administration 
    },   
    ]
    this.subFields[subCriteria.outSideOffice] = [
    {
      sizes : this.twoImagesSizes,
      width : this.twoImagesWidth,
      height : this.twoImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.nature] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.nature] + "-p-500.jpeg 500w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.nature] + "-p-800.jpeg 800w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.nature] + "-p-1080.jpeg 1080w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.nature] + ".jpg 1280w",
      name : "טבע וסביבה",
      subSubField: subSubCriteria.nature 
    },
    {
      sizes : this.twoImagesSizes,
      width : this.twoImagesWidth,
      height : this.twoImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.security] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.security] + "-p-500.jpeg 500w, " +
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.security] + "-p-800.jpeg 800w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.security] + "-p-1080.jpeg 1080w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.security] + ".jpg 1280w",
      name : "ביטחון",
      subSubField: subSubCriteria.security 
    },
    ]
    this.subFields[subCriteria.scienceAndMedicine] = [
    {
      sizes : this.threeImagesSizes,
      width : this.threeImagesWidth,
      height : this.threeImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.medicine] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.medicine] + "-p-800.jpeg 800w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.medicine] + "-p-1080.jpeg 1080w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.medicine] + ".jpg 1280w",
      name : "רפואה ובריאות",
      subSubField: subSubCriteria.medicine 
    },
    {
      sizes : this.threeImagesSizes,
      width : this.threeImagesWidth,
      height : this.threeImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.science] + ".jpg",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.science] + "-p-500.jpeg 500w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.science] + "-p-800.jpeg 800w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.science] + "-p-1080.jpeg 1080w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.science] + ".jpg 1264w",
      name : "מדעים מדוייקים",
      subSubField: subSubCriteria.science 
    }, 
    {
      sizes : this.threeImagesSizes,
      width : this.threeImagesWidth,
      height : this.threeImagesHeight,
      image : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.socialScience] + ".png",
      srcset : this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.socialScience] + "-p-500.png 500w, " + 
      this.imagesFolderPath + this.globals.fieldsImages[subSubCriteria.socialScience] + ".png 625w",
      name : "מדעי החברה",
      subSubField: subSubCriteria.socialScience 
    },      
    ]
    
  }

  ngOnInit() {
  }

}
