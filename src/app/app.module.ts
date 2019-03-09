import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EnumComponent } from './TypeScript/enum/enum.component';
import { StringoprationComponent } from './TypeScript/stringopration/stringopration.component';
import { ClassComponent } from './TypeScript/class/class.component';
import { InterfaceComponent } from './TypeScript/interface/interface.component';
import { ArrayComponent } from './TypeScript/array/array.component';
import { InterestComponent } from './TypeScript/interest/interest.component';
import { FibbonaciComponent } from './TypeScript/fibbonaci/fibbonaci.component';
import { PrimeComponent } from './TypeScript/prime/prime.component';
import { ArmstrongComponent } from './TypeScript/armstrong/armstrong.component';
import { PalindromeComponent } from './TypeScript/palindrome/palindrome.component';
import { OddevenComponent } from './TypeScript/oddeven/oddeven.component';
import { SwitchcaseComponent } from './TypeScript/switchcase/switchcase.component';
import { NgifComponent } from './ngExample/ngif/ngif.component';
import { NgforComponent } from './ngExample/ngfor/ngfor.component';
import { NgswitchComponent } from './ngExample/ngswitch/ngswitch.component';
import { NgclassComponent } from './ngExample/ngclass/ngclass.component';
import { NgstyleComponent } from './ngExample/ngstyle/ngstyle.component';
import { InterpolationComponent } from './Data Binding/interpolation/interpolation.component';
import { PropertybindingComponent } from './Data Binding/propertybinding/propertybinding.component';
import { ClassbindingComponent } from './Data Binding/classbinding/classbinding.component';
import { StylebindingComponent } from './Data Binding/stylebinding/stylebinding.component';
import { EventbindingComponent } from './Data Binding/eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './Data Binding/twowaybinding/twowaybinding.component';
import { TrvComponent } from './Data Binding/trv/trv.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { NgifElseComponent } from './ngExample/ngif-else/ngif-else.component';
import { TamplateDrivenComponent } from './Form/tamplate-driven/tamplate-driven.component';
import { ReactiveComponent } from './Form/reactive/reactive.component';
import { ComponentIntractionComponent } from './Component Interaction/component-intraction/component-intraction.component';
import { ChildComponent } from './Component Interaction/child/child.component';
import { EmployeeListComponent } from './DI and Services/employee-list/employee-list.component';
import { EmployeeService } from './DI and Services/Services/employee.service';

const appRoutes: Routes =
[
  { path: 'enum', component: EnumComponent},
  { path: 'Stringopration', component: StringoprationComponent},
  { path: 'Class', component: ClassComponent},
  { path: 'Interface', component: InterfaceComponent},
  { path: 'Array', component: ArrayComponent},
  { path: 'Interest', component: InterestComponent},
  { path: 'Fibbonaci', component: FibbonaciComponent},
  { path: 'Prime', component: PrimeComponent},
  { path: 'Armstrong', component: ArmstrongComponent},
  { path: 'Palindrome', component: PalindromeComponent},
  { path: 'Oddeven', component: OddevenComponent},
  { path: 'Switchcase', component: SwitchcaseComponent},
  { path: 'Ngif', component: NgifComponent},
  { path: 'Ngfor', component: NgforComponent},
  { path: 'Ngswitch', component: NgswitchComponent},
  { path: 'Ngclass', component: NgclassComponent},
  { path: 'Ngstyle', component: NgstyleComponent},
  { path: 'Interpolation', component: InterpolationComponent},
  { path: 'Propertybinding', component: PropertybindingComponent},
  { path: 'Classbinding', component: ClassbindingComponent},
  { path: 'Stylebinding', component: StylebindingComponent},
  { path: 'Eventbinding', component: EventbindingComponent},
  { path: 'Twowaybinding', component: TwowaybindingComponent},
  { path: 'Trv', component: TrvComponent},
  { path: 'StructuralDirective', component: StructuralDirectiveComponent},
  { path: 'NgifElse', component: NgifElseComponent},
  { path: 'TamplateDriven', component: TamplateDrivenComponent},
  { path: 'Reactive', component: ReactiveComponent},
  { path: 'Child', component: ChildComponent},
  { path: 'EmployeeList', component: EmployeeListComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    EnumComponent,
    StringoprationComponent,
    ClassComponent,
    InterfaceComponent,
    ArrayComponent,
    InterestComponent,
    FibbonaciComponent,
    PrimeComponent,
    ArmstrongComponent,
    PalindromeComponent,
    OddevenComponent,
    SwitchcaseComponent,
    NgifComponent,
    NgforComponent,
    NgswitchComponent,
    NgclassComponent,
    NgstyleComponent,
    InterpolationComponent,
    PropertybindingComponent,
    ClassbindingComponent,
    StylebindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    TrvComponent,
    StructuralDirectiveComponent,
    NgifElseComponent,
    TamplateDrivenComponent,
    ReactiveComponent,
    ComponentIntractionComponent,
    ChildComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],

  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
