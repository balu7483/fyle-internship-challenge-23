import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ApiService } from 'src/app/services/api.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let apiServiceStub: Partial<ApiService>;

  beforeEach(async(() => {
    apiServiceStub = {
      getUser: jasmine.createSpy('getUser').and.returnValue(of('balu7483')),
      getRepos: jasmine.createSpy('getRepos').and.returnValue(of('balu7483/repos')),
    };

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: ApiService, useValue: apiServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call apiService.getUser and apiService.getRepos when showProfile is called', () => {
    const userName = 'testUser';

    component.showProfile(userName);

    expect(apiServiceStub.getUser).toHaveBeenCalledWith(userName);

    fixture.whenStable().then(() => {
      expect(apiServiceStub.getRepos).toHaveBeenCalledWith(userName);
    });
  });

});
