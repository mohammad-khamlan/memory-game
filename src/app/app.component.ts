import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Title, Meta } from "@angular/platform-browser";
import { Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  routeData: any;

  constructor(private titleService: Title, private metaService: Meta, private router: Router, @Inject(DOCUMENT) private doc: any) {}

  ngOnInit(): void {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.routeData = data.state.root.firstChild?.data;
        
        this.titleService.setTitle(this.routeData.title);
        this.metaService.addTag({ name: 'description', content: this.routeData.meta });
        this.metaService.updateTag({ name: 'description', content: this.routeData.meta });

        let link: HTMLLinkElement = this.doc.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.doc.head.appendChild(link);
        link.setAttribute('href', this.routeData.canonicalUrl);       
      }
    });
  }

}