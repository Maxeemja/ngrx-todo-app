import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListItemEditUiComponent } from './todo-list-item-edit-ui.component';

describe('TodoListItemEditUiComponent', () => {
  let component: TodoListItemEditUiComponent;
  let fixture: ComponentFixture<TodoListItemEditUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListItemEditUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemEditUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
