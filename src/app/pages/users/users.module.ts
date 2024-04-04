import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [UsersComponent],
    imports: [BrowserModule, RouterModule],
    exports: [UsersComponent],
})
export class UsersModule {}
