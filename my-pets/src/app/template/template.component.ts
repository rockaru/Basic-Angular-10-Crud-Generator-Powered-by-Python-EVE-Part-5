import { HttpClient } from '@angular/common/http';
import {  Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';
import { FormService } from '../form.service';
import { DataService} from './../data.service'
import Quill from 'quill';

interface Quill {
  getModule(moduleName: string);
}

interface BetterTableModule {
  insertTable(rows: number, columns: number): void;
}

@Component({
  selector: 'mea-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class MeaTemplateComponent implements OnInit {

@Input() resource: string = 'template'
  
  form: any = []
  meaFg: FormGroup = new FormGroup({})
  variables=[]
  scope='create'
  meta:any
  page=1
selected:any
  showTitles=true
  content:any
  style:any
  @ViewChild(QuillEditorComponent, { static: true }) editor: QuillEditorComponent

  
  resources: any[];
  constructor(
    private formService:FormService,
    private dataService:DataService,
    private http: HttpClient,

  ) { 

    this.form = this.formService.loadForm(this.resource,this.scope)
    this.meta = this.form.pop().meta

  }

  ngOnInit(): void {
    if(!this.meta){
      this.meta.show_titles=false
      this.meta.pages=1
    }
    this.http.get('assets/template.css', { responseType: 'text' }).subscribe(data => {
this.style=data
    })
    this.init(this.form)
    this.meaFg = this.formService.loadFormGroup(this.form)
console.log(this.editor)
    this.loadOptions()
this.meaFg.get('document').valueChanges.subscribe(d=>{
  
  this.content=`<style>${this.style}</style>${d}`
})   
  
  }


  addBindingCreated(quill) {
    console.log(quill)
  }

  onResourceChange(item){
    this.variables=this.formService.loadForm(item,'read')    

  }

  init(form) {
    

    for (let key of form) {
      if (key.meta.input == "multi") {
        this.init(key.meta.child)
      } else if (key.meta.input == "dict") {
        this.init(key.meta.child)
      } else {
        key.meta.options = []
        key.meta.selected = []
      }
    }
  }

  toPrint()
{
  console.log(this.style)
  var mywindow = window.open('', 'PRINT');

  mywindow.document.write(`<html><head><style>${this.style}</style><title>` + document.title  + '</title>');
  mywindow.document.write('</head><body >')
  mywindow.document.write(document.getElementById('template-preview').innerHTML);
  mywindow.document.write('</body></html>');

  mywindow.document.close(); // necessary for IE >= 10
  mywindow.focus(); // necessary for IE >= 10*/

  mywindow.print();
  mywindow.close();

  return true;
}

  loadOptions() {
    this.resources=this.formService.loadItems()
  }

  public quill: Quill;

  private get tableModule(): BetterTableModule {
    return this.quill.getModule("better-table");
  }
  
  ceva(){
    
  }

editorCreated(event: Quill): void {
  this.quill=event
  this.editor.quillEditor.root.innerHTML=this.meaFg.get('document').value

  }

  addNewtable(): void {
    this.tableModule.insertTable(3, 3);
  }

  onInsertText(key){
    const editor= this.editor.quillEditor
    switch(key.meta.input){
    case 'multi':
      editor.insertText(editor.getSelection(),`{{${key.name}}}`)
      editor.insertText(editor.getSelection(),': ')
      editor.insertText(editor.getSelection(),'/#/')
      editor.insertText(editor.getSelection(),`{{index}} `)

      for(let item of key.meta.child){
      editor.insertText(editor.getSelection(),`{{${item.name}}} `)

      }
      editor.insertText(editor.getSelection(),'/#/')

    break
      default:
      editor.insertText(editor.getSelection(),`{{${key.name}}}`)
  break  
  }
  }

  save() {
    const formData = new FormData()
    const settings={}
    console.log(this.meaFg)
    for (let key of this.form) {
      if (this.meaFg.get(key.name).touched) {
      
      settings[key.name]=this.meaFg.get(key.name).value
      }
    }
    console.log(settings)
    this.dataService.setData(this.resource,settings)

    for (let key of this.form) {
      if (this.meaFg.get(key.name).touched) {
        formData.append(key.name, this.meaFg.get(key.name).value)
      }
    }


    this.dataService.add(this.resource, formData).subscribe(data => {
      console.log(data)
      localStorage.removeItem(`data-${this.resource}`)
    })
  }

}
