import { Component, OnInit } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { DialogService } from "../../../../dialog.service"

@Component({
  selector: "mn-place-edit",
  templateUrl: "./place-edit.component.html",
  styleUrls: [ "./place-edit.component.scss" ]
})
export class PlaceEditComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    name: new FormControl(),
    rating: new FormControl(0, Validators.min(1)),
    description: new FormControl('# Заголовок 1 \n\n## Заголовок 2'),
    tags: new FormControl([ "Паб", "Бар", "Гастропаб", "Ресторан" ]),
    photos: new FormControl()
  })

  constructor(private dialogService: DialogService) {
  }

  public ngOnInit(): void {
  }

  public onClickCancelButton(): void {
    this.dialogService.showDialog(this.dialogService.dialogs.Map)
  }
}
