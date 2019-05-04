import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '../../../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit, OnChanges {

  private youtubeUrlPrefix = '//www.youtube.com/embed/'; 
 
  @Input() videos: Array<string>;
  safeVideoUrls: Array<SafeResourceUrl>;
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.safeVideoUrls=this.videos?this.videos.map(v=>this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrlPrefix+v)):this.videos;
  }

}
