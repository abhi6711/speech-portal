/**
 * Import all the angular dependecies here
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/index';

//Import external library here
import { Ng2SmartTableModule } from 'ng2-smart-table';

/**
 * Imported all the components here
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { RouterModuleComponent } from './routing.module';
import { SubmitSpeechComponent } from './tabs/submit-speech/submit-speech.component';
import { SpeechHistoryComponent } from './tabs/speech-history/speech-history.component';
import { DialogBoxComponent } from './tabs/dialog-box/dialog-box.component';
import { ViewSpeechComponent } from './tabs/view-speech/view-speech.component';
import { ButtonViewComponent } from './tabs/button-component/button.component'

/**
 * Imported all the services here
 */
import { Subscriber } from './services/subscriber.service';
import { DataService } from './services/dataservice.service';
import { DialogBoxService } from './services/dialog-box.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent,
    SubmitSpeechComponent,
    SpeechHistoryComponent,
    DialogBoxComponent,
    ViewSpeechComponent,
    ButtonViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppMaterialModule,
    RouterModuleComponent,
    Ng2SmartTableModule
  ],
  providers: [Subscriber, DataService, DialogBoxService],
  entryComponents: [DialogBoxComponent, ButtonViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
