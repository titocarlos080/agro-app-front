import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TypingAnimationComponent } from '../../components/typing-animation/typing-animation.component';
 
  
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [  HeaderComponent,FooterComponent,TypingAnimationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
}
