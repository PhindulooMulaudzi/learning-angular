import { AfterContentInit, Component, ContentChild, Host } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  // providers: [RoomsService],
})
export class ContainerComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    console.log(this.employee);
    this.employee.empName = 'Rick';
  }

  @ContentChild(EmployeeComponent) employee!: EmployeeComponent;

  /***All components inside the container, will use the instance of roomService init in here */
  // We therefore dont need to declare them individually in each componenents provider
  // constructor(@Host() roomService: RoomsService) {}
  constructor() {}
}
