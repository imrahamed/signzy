import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocBlockComponent } from './doc-block.component';

describe('DocBlockComponent', () => {
  let component: DocBlockComponent;
  let fixture: ComponentFixture<DocBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
