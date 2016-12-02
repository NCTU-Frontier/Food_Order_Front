import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ToolBoxFrontRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrderTableComponent } from './article/order-system/order-table/order-table.component';
import { OrderListComponent } from './article/order-system/order-list/order-list.component';
import { HomepageComponent } from './article/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HeaderComponent,
    FooterComponent,
    OrderTableComponent,
    OrderListComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToolBoxFrontRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
