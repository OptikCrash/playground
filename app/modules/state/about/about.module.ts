import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatDialogModule, MatListModule, MatDividerModule } from '@angular/material'
@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      MatDialogModule,
      MatListModule,
      MatDividerModule
    ],
    declarations: [
      AboutComponent
    ],
    providers: [
    ]
  })
  export class AboutModule {}
  