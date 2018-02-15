import { Routes } from "@angular/router";

import { AddmovieComponent } from "../movies/addmovie/addmovie.component";
import { MoviedetailsComponent } from "../movies/moviedetails/moviedetails.component";
import { MovieshomeComponent } from "../movies/movieshome/movieshome.component";

export const movieroutes:Routes=[
    {
        path:'movies',component:MovieshomeComponent
    },
    {
        path:'addmovie',component:AddmovieComponent
    },
    {
        path:'movies/:Id',component:MoviedetailsComponent
    },
    {
        path:'',redirectTo:'movies',pathMatch:'full'
    }
]