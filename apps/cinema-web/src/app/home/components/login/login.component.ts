import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '@cinema/lib-cinema';

@Component({
  selector: 'cinema-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  @Output() loginCredentials = new EventEmitter<Login>();
  public loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['bruce@mail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    if (!this.loginForm.invalid) {
      const credentials = this.loginForm.value;
      this.loginCredentials.emit(credentials);
    }
  }
}
