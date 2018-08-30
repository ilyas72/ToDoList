import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.modules';
import { TaskentryComponent } from './components/taskentry/taskentry.component';
import { TaskdisplayComponent } from './components/taskdisplay/taskdisplay.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskentryComponent,
    TaskdisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
