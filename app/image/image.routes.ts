import { Routes } from '@angular/router';
// app
import { ImageComponent } from '~/image/image/image.component';
import { ViewComponent } from '~/image/view/view.component';
import { UploadComponent } from '~/image/upload/upload.component';

export const ImageRoutes: Routes = [
    {
        path: '',
        component: ImageComponent,
        children: [
            // these need to become content specific
            {
              path: '',
              redirectTo:'view',
              pathMatch: 'full'
            }, // default
            {path: 'view', component: ViewComponent},
            {path: 'upload', component: UploadComponent}
        ]
    }
];
