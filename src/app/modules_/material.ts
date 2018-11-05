import { MatToolbarModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatExpansionModule, MatCardModule, MatTableModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatToolbarModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatExpansionModule, MatCardModule, MatTableModule],
    exports: [MatToolbarModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatExpansionModule, MatCardModule, MatTableModule],
})
export class Material { }
1
