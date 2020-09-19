import { Component, OnInit, Input, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';


@Component({
  selector: 'mea-input-richtext',
  templateUrl: './mea-input-richtext.component.html',
  styleUrls: ['./mea-input-richtext.component.scss']
})
export class MeaInputRichtextComponent implements OnInit{
  @Input('form-group') meaFg: FormGroup
  @Input() key
  @Input() showPre =true
  @Input() showAfter = true
  @Input() showLabel =true
  @Input() showHint = true
  @Input() showIcon = true
  @ViewChild(QuillEditorComponent, { static: true }) editor: QuillEditorComponent

  constructor(
  ) { 

  }

  

  ngOnInit(): void {
    
  }

  onInsertText(){
   this.editor.quillEditor.root.innerHTML=this.meaFg.get(this.key.name).value
  }

  hasErrors(){
    return (this.meaFg.get(this.key.name).invalid && (this.meaFg.get(this.key.name).dirty || this.meaFg.get(this.key.name).touched))
  }

  isRequired(){
    return (this.meaFg.get(this.key.name).errors.required)
  }

  isMinLength(){
    return (this.meaFg.get(this.key.name).errors.minlength)
  }
  isMaxLength(){
    return (this.meaFg.get(this.key.name).errors.maxlength)
  }

  created($event){
    this.onInsertText()
  }

}