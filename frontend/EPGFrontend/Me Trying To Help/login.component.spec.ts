import {TestBed} from '@Angular/core/testing';

import {login component} from './login.component'

describe ('login component', () => {

    beforeEach(async () => {
     await TestBed.configureTestingModule({
         declaration: [ login ]
     })
     .complieComponents();
    });

    it('should login', () => {
        expect(component).toBeTruthy();
    });
});