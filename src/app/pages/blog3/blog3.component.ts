import { Component } from '@angular/core';
import { ConfigurePiwikTracker, UsePiwikTracker } from 'Angular2Piwik/dist';
import { AuthService } from '../auth/auth.service';


declare const $: any;
declare const jQuery: any;
@Component({
  selector: 'app-blog3',
  templateUrl: './blog3.component.html',
  styleUrls: ['./blog3.component.scss'],
  providers:[ConfigurePiwikTracker,UsePiwikTracker]
})
export class Blog3Component {
  constructor(
    private configurePiwikTracker: ConfigurePiwikTracker,
    private usePiwikTracker: UsePiwikTracker,
    private authService: AuthService
    ){

    }
    ngAfterViewInit() {
      $(window).load(() => {
        this.configurePiwikTracker.setDocumentTitle();
      if(this.authService.authenticated){
        console.log(this.authService.currentUser.email);
        this.configurePiwikTracker.setUserId(`"${this.authService.currentUser.email}"`);
        this.usePiwikTracker.trackPageView();
      }else {console.log("Not authenticated");
      this.usePiwikTracker.trackPageView();}
    });
  }
}
