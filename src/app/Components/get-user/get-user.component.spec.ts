import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { GetUserComponent } from './get-user.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('GetUserComponent', () => {
  let component: GetUserComponent;
  let fixture: ComponentFixture<GetUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GetUserComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit submitUser event when onSubmitUserName is called', () => {
    const userName = 'testUser';
    spyOn(component.submitUser, 'emit');
    component.userName = userName;

    component.onSubmitUserName();

    expect(component.submitUser.emit).toHaveBeenCalledWith(userName);
  });

  it('should have a form element with input and button', () => {
    const formElement = fixture.debugElement.query(By.css('form'));
    expect(formElement).toBeTruthy();

    const inputElement = formElement.query(By.css('input'));
    expect(inputElement).toBeTruthy();

    const buttonElement = formElement.query(By.css('button'));
    expect(buttonElement).toBeTruthy();
  });

  it('should update userName on input change', () => {
    const inputElement = fixture.debugElement.query(By.css('input'));
    const testUserName = 'newUser';

    inputElement.nativeElement.value = testUserName;
    inputElement.nativeElement.dispatchEvent(new Event('input'));

    expect(component.userName).toBe(testUserName);
  });
});

