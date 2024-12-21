import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-form-team',
  templateUrl: './form-team.component.html',
  styleUrls: ['./form-team.component.css']
})



export class FormTeamComponent {
  teamForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.teamForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]+$/)]],
      projectName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]+$/)]],
      level: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]+$/)]],
      projectDescription: ['', Validators.minLength(5)],
    });
  }

  addTeam() {
    if (this.teamForm.valid) {
    }
  }
}

