import { Component, OnInit, ElementRef } from "@angular/core"
import { FormControl } from "@angular/forms"
import { MapService } from "../../../../map.service"
import {DialogService} from "src/app/dialog.service";

@Component({
  selector: "mn-shell",
  templateUrl: "./shell.component.html",
  styleUrls: [ "./shell.component.scss" ]
})
export class ShellComponent implements OnInit {
  public isShowAddButton: boolean = false
  public searchFormControl: FormControl = new FormControl()

  constructor(private mapService: MapService,
              private element: ElementRef<HTMLElement>,
              private dialogService: DialogService) {
  }

  public ngOnInit(): void {
    this.mapService.isReady.then((map) => {
      map.addEventListener("click", (event) => {
        this.isShowAddButton = true
      })

      this.element.nativeElement.addEventListener("click", () => {
        this.isShowAddButton = false
      })
    })
  }

  public onClickClearButton(): void {
    this.searchFormControl.reset()
  }

  public onClickAddButton(): void {
    this.dialogService.showDialog(this.dialogService.dialogs.Editor)
  }
}
