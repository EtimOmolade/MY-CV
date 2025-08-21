import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Project } from './pages/project/project';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Skills } from './pages/skills/skills';

const routes: Routes = [
  { path: '', component: Home }, // Default route
  { path: 'projects', component: Project },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'skills', component: Skills } // Placeholder for Skills (update later)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}