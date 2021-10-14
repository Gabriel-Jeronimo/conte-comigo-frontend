import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {TransactionService} from '../../../services/transactions/transaction.service';
import {Location} from "@angular/common";

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.page.html',
  styleUrls: ['./create-expense.page.scss'],
})
export class CreateExpensePage implements OnInit {
  isChecked: boolean;

  expense = {
    description: '',
    recurrence_date: '',
    value: 0,
    account: 'Sua conta',
    status: false
  };

  constructor(private transactionService: TransactionService,
              private router: Router,
              private location: Location) {
    this.isChecked = true;
  }

  ngOnInit() {

  }

  public changeRecurrence() {
    document.getElementById('recurrenceDate').setAttribute('disabled', String(this.isChecked));
    this.expense.recurrence_date = '';
  }

  async create() {
    this.expense.value *= -1;
    this.transactionService.create(this.expense).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  back() {
    this.location.back();
  }
}
