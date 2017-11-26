import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit,OnChanges {
  @Input() attrNum = [];
  isLarge:boolean = false;
  constructor() {}

  ngOnInit() {}
  ngOnChanges() {
    this.isLarge = this.attrNum.length > 5;
    console.log(this.attrNum)
  }
}
