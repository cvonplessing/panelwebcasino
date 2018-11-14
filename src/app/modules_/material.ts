
import { MatToolbarModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatExpansionModule, MatCardModule, MatTableModule, MatDialogModule, MatProgressBarModule, MatListModule, MatMenuModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatToolbarModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatExpansionModule, MatCardModule, MatTableModule, MatDialogModule, MatProgressBarModule, MatListModule, MatMenuModule],
    exports: [MatToolbarModule, MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatExpansionModule, MatCardModule, MatTableModule, MatDialogModule, MatProgressBarModule, MatListModule, MatMenuModule],

})
export class Material { }

