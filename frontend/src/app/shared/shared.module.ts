import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FAQComponent } from './faq/faq.component';



@NgModule({
  declarations: [FAQComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [FAQComponent, FooterComponent]
})
export class SharedModule { }
