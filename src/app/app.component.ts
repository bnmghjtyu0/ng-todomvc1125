import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  placeholder: string = "Dream come true";
  todos: any[] = [];
  todo: string = "";
  enter(element) {
    console.log(this.todo);
    if(this.todo) {
      this.todos.push(this.todo);
      this.todo = '';
    }
  }
}
