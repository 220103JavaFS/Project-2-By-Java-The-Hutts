import {TestBed} from '@Angular/core/testing';

import {logout component} from './logout.component'

describe ('logout component', () => {
    
    beforeEach (async () => {
        await TestBed.configureTestingModule({
            declarations: [logout]
        })
        .compileComponents();
    });

    it('should logout', () => {
        expect (component).toBeTruthy
    });
});