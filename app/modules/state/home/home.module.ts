import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatDialogModule, MatDividerModule, MatListModule, MatGridListModule } from '@angular/material'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
  ]
})
export class HomeModule {}
