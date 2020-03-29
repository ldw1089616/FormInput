import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {PersonalCalanderControllerService,PersonalCalanderDto} from './../../service';
@Component({
  selector: 'app-personal-calander',
  templateUrl: './personal-calander.component.html',
  styleUrls: ['./personal-calander.component.css']
})
export class PersonalCalanderComponent implements OnInit {

  constructor(private service:PersonalCalanderControllerService) { }

  events: any[];
  options: any;
    ngOnInit() {
        this.service.selectByUserIdUsingPOST(123).subscribe(
            val=>{
                this.events = val;
            },
            error=> {}
        );

        // this.events = [
        //     {
        //         "id": "201601010001",
        //         "title": "All Day Event",
        //         "start": "2016-01-01",
        //         "backgroundColor": 'green',
        //         "borderColor": 'green',
        //         "changeFlg": false
        //     },
        //     {
        //         "id": "201601070001",
        //         "title": "Long Event",
        //         "start": "2016-01-07",
        //         "end": "2016-01-10"
        //     },
        //     {
        //         "title": "Repeating Event",
        //         "start": "2016-01-09T16:00:00"
        //     },
        //     {
        //         "title": "Repeating Event",
        //         "start": "2016-01-16T16:00:00"
        //     },
        //     {
        //         "title": "Conference",
        //         "start": "2016-01-11",
        //         "end": "2016-01-13"
        //     }
        // ];

        this.options = {
          plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
          defaultDate: '2020-03-01',
          header: {
              left: 'prev,next',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
          },
          editable: true,
          dateClick: (e) =>  {
            //handle date click
            
        },
        eventDrop: eventDropInfo => {
            const { event } = eventDropInfo;
            // Your code
            console.log(eventDropInfo);
            this.dragChange(event);
          },
          eventResize:eventDropInfo => {
            console.log(eventDropInfo); 
            const { event } = eventDropInfo;
            this.dragChange(event);
          }
      };
    }
    save(){
        this.service.calUpdateUsingPOST(this.events).subscribe(
          val=>{
            console.log(this.events);
          }
        );
    }
    dragChange(event) {
        this.events.forEach(item=>{
            if(item.id == event.id){
                item.start = event.start;
                item.end = event.end;
                item.changeFlg = true;
            }
        })
        console.log(this.events);
    }
}
