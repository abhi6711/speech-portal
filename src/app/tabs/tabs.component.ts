import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../services/subscriber.service';
import { Router } from '@angular/router';
import * as constants from '../constants';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
    selectedTab: number;

    constructor(private router: Router, private subscriber: Subscriber) {
        subscriber.changeTab$.subscribe(
            tab => {
                this.selectedTab = tab;
            }
        )
    }
    ngOnInit() {
        if (location.href === constants.HTTP + location.host + constants.BASE_URL ||
            location.href === constants.HTTP + location.host + constants.SUBMIT_SPEECH) {
            this.selectedTab = 0;
        }
        else if (location.href === constants.HTTP + location.host + constants.VIEW_SPEECH_URL) {
            this.selectedTab = 1;
        }
        else {
            this.selectedTab = 2;
        }
    }

    /**
    * This function is triggered when the submit-speech routing path is called 
    * and submit-speech component is instantiated and this tell us which tab to select in tab group.
    */
    createSubmitSpeech(): void {
        this.selectedTab = 0;
    }

    /**
     * This function is triggered when the view-speech tab routing path is called 
     * and view-speech component is instantiated and this will selected tab 3.
     * @returns void
    */
    createViewSpeech(): void {
        this.selectedTab = 1;
    }

    /**
     * This function is triggered when the speech-history routing path is called 
     * and speech-history component is instantiated and this will select tab 1.
     * @returns void
    */
    createSpeechHistory(): void {
        this.selectedTab = 2;
    }
}
