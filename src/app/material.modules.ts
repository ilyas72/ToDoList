import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule} from '@angular/material/radio';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FlexLayoutModule } from '@angular/flex-layout';



const MODULES = [
   MatToolbarModule,MatMomentDateModule, MatDatepickerModule, FlexLayoutModule, 
   MatIconModule,MatCardModule, MatRadioModule , MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule
];

@NgModule({
   imports: MODULES,
   exports: MODULES
})

export class MaterialModule { }