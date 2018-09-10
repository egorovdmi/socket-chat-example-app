import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDateCommandComponent } from './chat-date-command.component';
import { DateCommand } from '../../events/commands';

describe('ChatComponent', () => {
  let component: ChatDateCommandComponent;
  let fixture: ComponentFixture<ChatDateCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDateCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDateCommandComponent);
    component = fixture.componentInstance;
    component.command = new DateCommand('2018-09-05T13:14:33.956Z');
    fixture.detectChanges();
  });

  it('getDays, date as input, should return right first five working days', () => {
    const testData: {isoDateString: string, expected: string[]}[] = [{
            // Monday
            isoDateString: '2018-09-03T13:14:33.956Z',
            expected: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        }, {
            // Tuesday
            isoDateString: '2018-09-04T13:14:33.956Z',
            expected: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Monday'],
        }, {
            // Wednesday
            isoDateString: '2018-09-05T13:14:33.956Z',
            expected: ['Wednesday', 'Thursday', 'Friday', 'Monday', 'Tuesday'],
        }, {
            // Thursday
            isoDateString: '2018-09-06T13:14:33.956Z',
            expected: ['Thursday', 'Friday', 'Monday', 'Tuesday', 'Wednesday'],
        }, {
            // Friday
            isoDateString: '2018-09-07T13:14:33.956Z',
            expected: ['Friday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        }, {
            // Saturday
            isoDateString: '2018-09-08T13:14:33.956Z',
            expected: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        }, {
            // Sunday
            isoDateString: '2018-09-09T13:14:33.956Z',
            expected: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        }
    ];

    testData.forEach(item =>
        expect(component.getDays(item.isoDateString)).toEqual(item.expected));
  });
});
