import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('deberia crear el componente AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('probando cambios title en h2 ngModel', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const componente = fixture.componentInstance;
    const htmlElemento: DebugElement = fixture.debugElement.query(By.css('h2'));
    componente.title = 'Casa sofka';
    fixture.detectChanges();
    expect(htmlElemento.nativeElement.innerHTML).toBe('Casa sofka');
    componente.title = 'Estoy en casa';
    fixture.detectChanges();
    expect(htmlElemento.nativeElement.innerHTML).toBe('Estoy en casa');
  });
});
