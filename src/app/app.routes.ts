import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { StockBrokingComponent } from './pages/stock-broking/stock-broking.component';
import { MutualFundComponent } from './pages/mutual-fund/mutual-fund.component';
import { InsuranceComponent } from './pages/insurance/insurance.component';
import { OtherServicesComponent } from './pages/other-services/other-services.component';
import { CalculatorsComponent } from './pages/calculators/calculators.component';
import { LumpsumCalculatorComponent } from './pages/lumpsum-calculator/lumpsum-calculator.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'stock-broking', component: StockBrokingComponent },
  { path: 'mutual-fund', component: MutualFundComponent },
  { path: 'insurance', component: InsuranceComponent },
  { path: 'other-services', component: OtherServicesComponent },
  { path: 'calculators', component: CalculatorsComponent },
  { path: 'lumpsum-calculator', component: LumpsumCalculatorComponent },
  { path: '**', redirectTo: '' }
];
