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
  enter(element) {
    console.log(element.value)
    this.todos.push(element.value);
  }
}
