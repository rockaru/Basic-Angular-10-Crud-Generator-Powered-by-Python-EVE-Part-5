import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'mea-view-image',
  templateUrl: './mea-view-image.component.html',
  styleUrls: ['./mea-view-image.component.scss']
})
export class MeaViewImageComponent implements OnInit {
  @Input() key:any
  @Input() item:any
    constructor(
    private sanitization: DomSanitizer,

    ) { }

  ngOnInit(): void {
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

}
