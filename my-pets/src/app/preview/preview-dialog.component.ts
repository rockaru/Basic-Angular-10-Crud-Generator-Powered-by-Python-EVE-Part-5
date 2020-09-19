import { Component, OnInit, Inject, ViewChild, ViewContainerRef, TemplateRef, ElementRef, Renderer2, ContentChild } from '@angular/core';
import { PreviewComponent } from './preview.component'
import { MatDialogContent, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../data.service'
import { FormService } from '../form.service'
import { HttpClient } from '@angular/common/http'

@Component({
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewDialogComponent extends PreviewComponent implements OnInit {
  //newTemplate:string=``
 
  constructor(
    private re:ElementRef,
    private renderer:Renderer2,
    private dataS: DataService,
    private formS: FormService,
    private http: HttpClient,
    private dialogRef: MatDialogRef<PreviewComponent>,

    @Inject(MAT_DIALOG_DATA) data
  ) {
    super(re,dataS, formS)
    this.form = data.form
    this.resource = data.resource
    this.item = data.item
    this.meaFg = data.formGroup
    this.dialog = true
    this.title=data.title
  }
  @ViewChild('test') test:ElementRef

  ngOnInit(): void {
    this.loadData()
    console.log(this.re)
    this.renderer.listen(this.re.nativeElement, 'click', (event) => {
      if (event.target instanceof HTMLButtonElement) {
        // Your custom anchor click event handler
        if(event.target.attributes.params){
        this.handleAnchorClick(event.target.attributes.action.nodeValue,event.target.attributes.params.nodeValue);
        }else{
        this.handleAnchorClick(event.target.attributes.action.nodeValue);

        }
      }
    });

  }
  handleAnchorClick(event: any,params?:any) {
    console.log(event)
    this[event](params)
  }

  ngAfterViewInit(){
    
  }

  parseElement(){
   
  }

  loadData() {
    this.http.get(`assets/${this.template}/${this.template}.html`, { responseType: 'text' }).subscribe(data => {
      this.http.get(`assets/${this.template}/${this.template}.css`, { responseType: 'text' }).subscribe(css => {
        this.splitString(data)
        this.body = "<style>" + css + "</style>" + this.parseTemplate(data, this.form, this.item)
        this.parseElement()
      })
    })
  }

  splitString(str) {
  }

  parseTemplate(str, form, item) {

    

    for (let key of form) {
      let searchTerm = ""
      let before = ""
      let after = ""
      let between = ""
      let newStr = ''
      if (str.indexOf(`{{${key.name}}}`) > -1) {
        switch (key.meta.input) {

          case 'checkbox':
            searchTerm = `{{${key.name}}}`
            before = str.slice(0, str.indexOf(searchTerm))
            after = str.slice(str.indexOf(searchTerm) + searchTerm.length)
            if (item[key.name]) {

              str = before + "<b>" + key.meta.label_true + "</b>" + after
            } else {

              str = before + key.meta.label_true + after
            }
            searchTerm = `{{!${key.name}}}`
            before = str.slice(0, str.indexOf(searchTerm))
            after = str.slice(str.indexOf(searchTerm) + searchTerm.length)
            if (item[key.name]) {

              str = before + key.meta.label_false + after
            } else {

              str = before + "<b>" + key.meta.label_false + "</b>" + after
            }

            break;

          case 'multi':

            searchTerm = `{{${key.name}}}`
            before = str.slice(0, str.indexOf(searchTerm))
            between = str.slice(str.split('/#/', 1).join('/#/').length + 3, str.split('/#/', 2).join('/#/').length)
            after = str.slice(str.split('/#/', 2).join('/#/').length + 3)
            str = before + this.parseFor(between, key.meta.child, item[key.name]) + after

            break;
//case 'richtext':
 // searchTerm = `{{${key.name}}}`
  //          before = str.slice(0, str.indexOf(searchTerm))
  //          after = str.slice(str.indexOf(searchTerm) + searchTerm.length)
  //           between =item[key.name].slice(1,item[key.name].length-1)
  //          str = before + between + after
  //          break

          default:
            searchTerm = `{{${key.name}}}`
            before = str.slice(0, str.indexOf(searchTerm))
            after = str.slice(str.indexOf(searchTerm) + searchTerm.length)
            str = before + item[key.name] + after
            break
        }
      }
    }
    const searchTerm = 'src="'
    let i = 1
    let c =(str.match(/src="/g) || []).length
for(let i=1;i<=c;i++){
  const firstPos=str.split(searchTerm,i).join(searchTerm).length
      const before = str.slice(0, firstPos+searchTerm.length)
      const after = str.slice(firstPos + searchTerm.length)
      str = before + `assets/${this.template}/` + after
}

const before = str.slice(0, str.indexOf('<footer'))
    this.footer = str.slice(str.indexOf('<footer'), str.indexOf('</footer>')+9)
    const  after = str.slice(str.indexOf('</footer>')+9)
      str = before  + after

      const befor = str.slice(0, str.indexOf('<header'))
          this.header = str.slice(str.indexOf('<header'), str.indexOf('</header>')+9)
          const  afte = str.slice(str.indexOf('</header>')+9)
            str = befor  + afte

    return str
  }

  parseFor(str, form, item) {
    let searchTerm = ""
    let before = ""
    let after = ""
    let newStr = ""
    let i = 1
    for (let it of item) {
      let oldStr = str
      searchTerm = `{{index}}`
      before = oldStr.slice(0, oldStr.indexOf(searchTerm))
      after = oldStr.slice(oldStr.indexOf(searchTerm) + searchTerm.length)
      oldStr = before + i + after
      for (let key of form) {

        switch (key.meta.input) {

          default:
            searchTerm = `{{${key.name}}}`
            before = oldStr.slice(0, oldStr.indexOf(searchTerm))
            after = oldStr.slice(oldStr.indexOf(searchTerm) + searchTerm.length)
            oldStr = before + it[key.name] + after
            break

        }

      }
      newStr += oldStr
      i++
    }
    return newStr
  }

  close(){
    this.dialogRef.close(this.meaFg)
  }

}
