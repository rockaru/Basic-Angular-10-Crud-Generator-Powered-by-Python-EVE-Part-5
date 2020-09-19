import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnChanges, OnInit, ViewChild} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { FormService } from '../form.service';
import {jsPDF}  from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit,AfterViewInit,AfterContentInit {
  template = 'f2'
  header='<p>loading...</p>'
  body='<p>loading...</p>'
  footer='<p>loading...</p>'
partial:string
  form: any = []
  meaFg: FormGroup = new FormGroup({})
  resource:any=[]
  dialog=false
  signatureImage: any;
  item=[]
  title:string
  constructor(
    private ref:ElementRef,

    private dataService: DataService,
    private formService: FormService,) { }
   

  ngOnInit(): void {
    
  
  }
  ngAfterContentInit(){
    
  }

  ngAfterViewInit(){
    
  }

  showImage(data) {
    this.signatureImage = data;
    this.meaFg.get('semnatura').patchValue(data)
    this.meaFg.get('semnatura').updateValueAndValidity()
  console.log(this.meaFg)
  }

  toPrint()
{
  var mywindow = window.open('', 'PRINT');

  mywindow.document.write('<html><head><style> * { box-sizing: border-box !important;  } .row::after { content: "";clear: both;display: table;} [class*="col-"] {float: left;padding: 5px;width: 100%;border: 1px solid;} .col-1 {width: 8.33%; } .col-1-nb {width: 8.33%;border:0px}.col-3 { width: 25%;  } .col-9 {width: 75%; }.col-10 { width: 83.33%; }.col-12 { width: 100%;}</style><title>' + document.title  + '</title>');
  mywindow.document.write('</head><body >')
  mywindow.document.write(document.getElementById('print').innerHTML);
  mywindow.document.write('</body></html>');

  mywindow.document.close(); // necessary for IE >= 10
  mywindow.focus(); // necessary for IE >= 10*/

  mywindow.print();
  mywindow.close();

  return true;
}

generatePDF() {
  var data = document.getElementById('print');
  html2canvas(data).then(canvas => {
    var imgWidth = 208;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jsPDF ('p', 'mm', 'a4');
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save(`${this.title}.pdf`);
  });
}

}