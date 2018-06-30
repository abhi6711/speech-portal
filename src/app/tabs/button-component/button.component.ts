/**
 * Import all the angular dependencies here
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { Router } from '@angular/router';

/**
 * Import all the internal dependencies here
 */
import { DataService } from '../../services/dataservice.service';
import { Subscriber } from '../../services/subscriber.service';
import * as constants from '../../constants';

@Component({
    selector: 'button-view',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})

export class ButtonViewComponent {
    //This will have the current value of the particular cell
    @Input() value: string;
    @Input() rowData;
    speechDetails = {};
    emailBody: string;
    constructor(private dataService: DataService, private router: Router,
        private subscriber: Subscriber) {
    }

    /**
     * This function will send the selected speech data to dataservice and route to 
     * view-speech page
     * @returns void
     */
    public setSpeechData(): void {
        this.speechDetails[constants.ID] = this.rowData.id;
        this.speechDetails[constants.SPEECHTEXT] = this.rowData.speechtext;
        this.speechDetails[constants.SPEECHTITLE] = this.rowData.speechtitle;
        this.speechDetails[constants.KEYWORDS] = this.rowData.keywords;
        this.speechDetails[constants.DATE] = this.rowData.date;
        this.speechDetails[constants.AUTHORNAME] = this.rowData.author;
        this.dataService.setViewSpeechData(this.speechDetails, true)
        this.router.navigate(['/view-speech'])
        this.subscriber.storeValueInObservable(1);
    }

    /**
     * This function is triggered when share button is clicked and 
     * it will create a email body
     * @return void
     */
    public shareSpeech(): void {
        this.emailBody = 'Here are the detailed description of my speech %20%3A%0D%0A' + 'Title:' + this.rowData.speechtitle + '%20%3A%0D%0A' +
            'Description: ' + this.rowData.speechtext + '%20%3A%0D%0A' + 'Keywords:' + this.rowData.keywords;
    }
}