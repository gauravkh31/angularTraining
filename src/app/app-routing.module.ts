import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AnnouncementComponent } from './pages/announcement/announcement.component';
import { AttendenceComponent } from './pages/attendence/attendence.component';
import { FeeManagementComponent } from './pages/fee-management/fee-management.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { LaundryComponent } from './pages/laundry/laundry.component';
import { LibraryComponent } from './pages/library/library.component';
import { MessageComponent } from './pages/message/message.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { Subject } from 'rxjs';
import { TimeTableComponent } from './pages/time-table/time-table.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'announcement',
    component: AnnouncementComponent
  },
  {
    path: 'attendence',
    component: AttendenceComponent
  },
  {
    path: 'fee',
    component: FeeManagementComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'laundry',
    component: LaundryComponent
  },
  {
    path: 'library',
    component: LibraryComponent
  },
  {
    path: 'message',
    component: MessageComponent
  },
  {
    path: 'teacher',
    component: TeacherComponent
  },
  {
    path: 'subject',
    component: Subject
  },
  {
    path: 'timetable',
    component: TimeTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
