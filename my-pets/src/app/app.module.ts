import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material/dialog";
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MaterialDualListboxModule} from 'mea-material-dual-listbox'
import {MatChipsModule} from '@angular/material/chips';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { MeaInputMultiComponent } from './components/mea-input-multi/mea-input-multi.component';
import { MeaInputTextComponent } from './components/mea-input-text/mea-input-text.component';
import { MeaInputNumberComponent } from './components/mea-input-number/mea-input-number.component';
import { MeaInputTextareaComponent } from './components/mea-input-textarea/mea-input-textarea.component';
import { MeaInputEmailComponent } from './components/mea-input-email/mea-input-email.component';
import { MeaFormComponent } from './components/mea-form/mea-form.component';
import { MeaInputDateComponent } from './components/mea-input-date/mea-input-date.component';
import { MeaInputDatetimeComponent } from './components/mea-input-datetime/mea-input-datetime.component';
import { MeaInputTelComponent } from './components/mea-input-tel/mea-input-tel.component';
import { MeaInputPasswordComponent } from './components/mea-input-password/mea-input-password.component';
import { MeaInputUrlComponent } from './components/mea-input-url/mea-input-url.component';
import { MeaInputCheckboxComponent } from './components/mea-input-checkbox/mea-input-checkbox.component';
import { MeaInputSelectComponent } from './components/mea-input-select/mea-input-select.component';
import { MeaInputRadioComponent } from './components/mea-input-radio/mea-input-radio.component';
import { MeaInputImageComponent } from './components/mea-input-image/mea-input-image.component';
import { MeaInputFileComponent } from './components/mea-input-file/mea-input-file.component';
import { MeaInputListComponent } from './components/mea-input-list/mea-input-list.component';
import { MeaInputDualListComponent } from './components/mea-input-dual-list/mea-input-dual-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    DetailsComponent,
    MeaInputMultiComponent,
    MeaInputTextComponent,
    MeaInputNumberComponent,
    MeaInputTextareaComponent,
    MeaInputEmailComponent,
    MeaFormComponent,
    MeaInputDateComponent,
    MeaInputDatetimeComponent,
    MeaInputTelComponent,
    MeaInputPasswordComponent,
    MeaInputUrlComponent,
    MeaInputCheckboxComponent,
    MeaInputSelectComponent,
    MeaInputRadioComponent,
    MeaInputImageComponent,
    MeaInputFileComponent,
    MeaInputListComponent,
    MeaInputDualListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatChipsModule,
    MaterialDualListboxModule,
    FormsModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS,useValue:{maxWidth:'200vw',autoFocus:true}},
  ],
  bootstrap: [AppComponent],
  entryComponents: [ReadComponent]
})
export class AppModule { }
