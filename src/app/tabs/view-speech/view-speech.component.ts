/**
 * Import all the angular dependencies here
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';

/**
 * Import all the internal module dependencies here
 */
import * as constant from '../../constants';
import { DataService } from '../../services/dataservice.service';
import { DialogBoxService } from '../../services/dialog-box.service';

@Component({
    selector: 'app-view',
    templateUrl: './view-speech.component.html',
    styleUrls: ['./view-speech.component.scss']
})

export class ViewSpeechComponent implements OnInit {
    @ViewChild('sidenav') sidenav: MatSidenav;
    date = new FormControl(new Date());
    serializedDate = new FormControl((new Date()).toISOString());
    authorName: string;
    keyWords: string;
    speechText: string;
    speechName: string;
    showSpeech: boolean;
    noSpeechData: boolean;
    speechData: object ;

    constructor(private dataService: DataService, private dailogService: DialogBoxService) {
    }

    /**
     * This function is fired after constructor is initialized.
     * It takes the speech data from dataservice. If data is present
     * then it shows the data else it will not show the data
     */
    ngOnInit() {
        const speechData = this.dataService.getViewSpeechData();
        if (speechData[1]) {
            this.showSpeech = true;
            this.setSpeechData(speechData[0]);
        } else {
            this.noSpeechData = true;
        }
    }

    /**
     * This function set the data in the speech form
     * @param data : contains speech details
     * @returns void
     */
    public setSpeechData(data: object) {
        this.speechData = data;
        this.authorName = data[constant.AUTHORNAME];
        this.keyWords = data[constant.KEYWORDS];
        this.speechName = data[constant.SPEECHTITLE];
        this.speechText = data[constant.SPEECHTEXT];
    }

    public deleteSpeech(): void {
        // calling dialog box service to open confirmation modal
        console.log('in view speech ')
    }

    /*
     * This function save the speech and call a function to update the speech details
     * @return void
     */
    public saveSpeech(): void {
        const data = this.updateSpeechData();
        this.dataService.updateSpeech(data, 'save');
        this.dailogService.openMsgModal(constant.SAVEMESSAGE);
    }

    /**
     * This function update speech data with new values
     * @return object
     */
    public updateSpeechData(): object {
        this.speechData[constant.SPEECHTITLE] =  this.speechName;
        this.speechData[constant.AUTHORNAME] = this.authorName;
        this.speechData[constant.KEYWORDS] = this.keyWords;
        this.speechData[constant.SPEECHTEXT] = this.speechText;
        this.speechData[constant.DATE] = this.date.value;
        return this.speechData;
    }

    public submitResponse(isSpeechDeleted: boolean): void {
        console.log(isSpeechDeleted);
        if(isSpeechDeleted) {
            this.dataService.updateSpeech(this.speechData, 'delete');
        }
    }
}

