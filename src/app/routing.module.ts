/******************************* Description of Module *********************************
Routing module render the component according to the routes in the address bar.
************************************ END *************************************************/

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SubmitSpeechComponent } from './tabs/submit-speech/submit-speech.component';
import { SpeechHistoryComponent } from './tabs/speech-history/speech-history.component';
import { ViewSpeechComponent } from './tabs/view-speech/view-speech.component';

export const ROUTES: Routes = [
    { 
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'submit-speech' 
    },
    {
        path: 'submit-speech',
        component: SubmitSpeechComponent
    },
    {
        path: 'view-speech',
        component: ViewSpeechComponent
    },
    {
        path: 'speech-history',
        component: SpeechHistoryComponent
    }
]

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(ROUTES) ]
})
export class RouterModuleComponent{};