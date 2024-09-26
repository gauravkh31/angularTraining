import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { TeacherComponent } from './teacher/teacher.component';
// import { UserComponent } from './user/user.component';
import { SubjectComponent } from './subject/subject.component';
import { MessageComponent } from './message/message.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeeManagementComponent } from './fee-management/fee-management.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { LibraryComponent } from './library/library.component';
import { LaundryComponent } from './laundry/laundry.component';



@NgModule({
  declarations: [
    DashboardComponent,
    TimeTableComponent,
    TeacherComponent,
    SubjectComponent,
    MessageComponent,
    AnnouncementComponent,
    FeedbackComponent,
    FeeManagementComponent,
    AttendenceComponent,
    LibraryComponent,
    LaundryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DashboardComponent,
    TimeTableComponent,
    TeacherComponent,
    SubjectComponent,
    MessageComponent,
    AnnouncementComponent,
    FeedbackComponent,
    FeeManagementComponent,
    AttendenceComponent,
    LibraryComponent,
    LaundryComponent],
})
export class PagesModule { }
