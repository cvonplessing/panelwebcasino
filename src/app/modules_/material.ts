import { MatAutocompleteModule, MatToolbarModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatExpansionModule, MatCardModule, MatTableModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatAutocompleteModule, MatToolbarModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatExpansionModule, MatCardModule, MatTableModule],
    exports: [MatAutocompleteModule, MatToolbarModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatExpansionModule, MatCardModule, MatTableModule],
})
export class Material { }
1
