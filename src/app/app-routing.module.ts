import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AppDetailsActorsComponent } from './app-details-actors/app-details-actors.component';
import { DetailsMovieComponent } from './details-movie/details-movie.component';
import { DetailsReviewsComponent } from './details-reviews/details-reviews.component';
import { SearchComponent } from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'details/:id',component:DetailsComponent},
  {
    path:'details/actor/:id',component:AppDetailsActorsComponent
  },
  {
    path:'details/movies/:id',component:DetailsMovieComponent
  },{
    path:'details/reviews/:id',component:DetailsReviewsComponent
  },
  {
    path:"search/:movieTitle",component:SearchComponent
  },
  { path: 'feedback', component: FeedbackComponent },
  {path:'401',component:FeedbackComponent,canActivate:[AuthGuard]},
  {
    path:'**', component:NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
