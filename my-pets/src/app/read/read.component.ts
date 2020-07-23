import { Component, OnInit, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { CreateComponent } from '../create/create.component'
import { UpdateComponent } from '../update/update.component'
import { DeleteComponent } from '../delete/delete.component'
import { DetailsComponent } from '../details/details.component'
import { FormService } from '../form.service'
import { DataService } from '../data.service'
import { SocketService } from '../socket.service'
import { UrlResolver } from '@angular/compiler'
import { SafeUrl, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  resource: string
  form: any = []
  items: any = []

  constructor(
    private socketService: SocketService,
    private dataService: DataService,
    private formService: FormService,
    private sanitization: DomSanitizer,

    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.items = data.items
    this.resource = data.resource
    this.form = data.form
    socketService.joinSocket(this.resource)
  }

  ngOnInit() {
    this.socketService.webSocket.addEventListener("message", (ev) => {
      this.loadData()
    })
  }

  loadData() {
    this.dataService.getAll(this.resource).subscribe(data => {
      this.items = data["_items"]
    })
  }

  objectKeys(obj) {
    if (obj) {
      return obj.name
    }
  }

  loadMedia(item) {
    if (item) {
      return this.sanitization.bypassSecurityTrustUrl(this.createDownload(item))  
    }
  }


  createDownload(item) {
    const sliceSize = 1024
    const byteCharacters = atob(item.file)
    const bytesLength = byteCharacters.length
    const slicesCount = Math.ceil(bytesLength / sliceSize)
    const byteArrays = new Array(slicesCount)
    for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
      const begin = sliceIndex * sliceSize;
      const end = Math.min(begin + sliceSize, bytesLength);

      const bytes = new Array(end - begin);
      for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
        bytes[i] = byteCharacters[offset].charCodeAt(0);
      }
      byteArrays[sliceIndex] = new Uint8Array(bytes);
    }
    const file = new File(byteArrays, item.name, { type: item.content_type })
    const blob = new Blob([file]);
    let url = URL.createObjectURL(blob);
    return url
  }

  create() {
    this.formService.openCreate(this.resource, CreateComponent)
  }

  details(item) {
    this.formService.openDetails(this.resource, item, DetailsComponent)
  }

  update(item) {
    this.formService.openUpdate(this.resource, item, UpdateComponent)

  }

  delete(item) {
    this.formService.openDelete(this.resource, item, DeleteComponent)
  }

}
