import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirevativeComponent } from './components/direvative/direvative.component';
import { FormsModule } from '@angular/forms';
import { MypieComponent } from './components/mypie/mypie.component';
import { CubePipe } from './shared/custompipe/cube.pipe';
import { ToggleimagesComponent } from './commands/toggleimages/toggleimages.component';
import { ToggleimageComponent } from './components/toggleimage/toggleimage.component';
import { AngformComponent } from './components/angform/angform.component';
import { RtfComponent } from './rtf/rtf.component';
import { UtdfComponent } from './components/utdf/utdf.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MaindashComponent } from './components/maindash/maindash.component';
import { ImagetoogleComponent } from './components/imagetoogle/imagetoogle.component';
import { SelectionlistComponent } from './components/selectionlist/selectionlist.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirevativeComponent,
    MypieComponent,
    CubePipe,
    ToggleimagesComponent,
    ToggleimageComponent,
    AngformComponent,
    RtfComponent,
    UtdfComponent,
    PagenotfoundComponent,
    MaindashComponent,
    ImagetoogleComponent,
    SelectionlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
