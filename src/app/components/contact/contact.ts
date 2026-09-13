import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  userForm = {
  name: '',
  email: '',
  phone: '',
  message: ''
};

onSubmit(): void {
  console.log('Form Submitted Successfully!', this.userForm);
  alert('شكراً لتواكلك يا محمد، تم إرسال الرسالة بنجاح!');
}

}
