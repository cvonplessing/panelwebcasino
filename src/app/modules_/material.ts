import { MatToolbarModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatExpansionModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatToolbarModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatExpansionModule],
    exports: [MatToolbarModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatExpansionModule],
})
export class Material { }
