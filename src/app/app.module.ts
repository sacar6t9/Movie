import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { DetailsReviewsComponent } from './details-reviews/details-reviews.component';
import { NotAuthorizeComponent } from './not-authorize/not-authorize.component';
import { SearchComponent } from './search/search.component';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppDetailsActorsComponent } from './app-details-actors/app-details-actors.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { GlobalErrorHandler } from './services/global-error-handler.service';
import { FeedbackComponent } from './feedback/feedback.component';
import { AuthGuard, AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    DetailsMovieComponent,
    DetailsReviewsComponent,
    NotAuthorizeComponent,
    SearchComponent,
    LoaderComponent,
    ModalComponent,
    AppDetailsActorsComponent,
    NotFoundComponent,
    FeedbackComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain:'dev-sg55jmqy20nyb1t6.us.auth0.com',
      clientId:'EkVKIzSTnhh2o6MGQYFUkEDyH194SoPN',
      authorizationParams:{redirect_uri:window.location.origin}
    })
  ],
  providers: [MoviesService,{provide:ErrorHandler,useClass:GlobalErrorHandler},AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
