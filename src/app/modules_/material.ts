
import { MatToolbarModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatExpansionModule, MatCardModule, MatTableModule, MatDialogModule, MatProgressBarModule, MatListModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatToolbarModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatExpansionModule, MatCardModule, MatTableModule, MatDialogModule, MatProgressBarModule, MatListModule],
    exports: [MatToolbarModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatExpansionModule, MatCardModule, MatTableModule, MatDialogModule, MatProgressBarModule, MatListModule],

})
export class Material { }

