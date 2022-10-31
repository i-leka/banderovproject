import {Component} from '@angular/core';

class Tovar {
  NameTovar: string;
  Count: number;
  Price: number;
  Summa: number;

  constructor(NameTovar: string, Count: number = 0, Price: number = 15) {
    this.NameTovar = NameTovar;
    this.Count = Count;
    this.Price = Price;
    this.Summa = Price * Count;
  }
}

const tovars = [{NameTovar: "Товар1", Count: 0, Price: 25, Summa: 0,},
  {NameTovar: "Товар2", Count: 0, Price: 10, Summa: 0}];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Sabina';
  NewTovar: Tovar[] = tovars;
  NewTovatName: string = '';

  increase(item_tovar: Tovar): void {
    if (item_tovar.Count >= 0) {
      item_tovar.Count++;
      item_tovar.Summa = item_tovar.Count * item_tovar.Price;
    }
  }

  increase1(item_tovar: Tovar, myinput: any): void {
    console.log(myinput);
    if (item_tovar.Count >= 0) {
      item_tovar.Summa = item_tovar.Count * item_tovar.Price;
    }
  }

  delete(name: any) {
    let index = this.NewTovar.indexOf(name);
    if (index > -1)
      this.NewTovar.splice(index, 1);
  }

  addItem(FormTovar: any) {
    let Tovar1: Tovar = new Tovar(this.NewTovatName);
    this.NewTovar.push(Tovar1);
  }

  //   count1: number =0;
  //   count2: number =0;
  //   count3: number =0;
  //   count4: number =0;
  //
  //   increase1(): void{this.count1++;
  //   this.sum1=this.count1*this.price1;}
  //   increase2(): void{this.count2++;
  //   this.sum2=this.count2*this.price2;}
  //   increase3(): void{this.count3++;
  //   this.sum3=this.count3*this.price3;}
  //   increase4(): void{this.count4++;
  //   this.sum4=this.count4*this.price4;}
  //
  //
  //   del1(): void{
  //   if (this.count1>0){
  //    this.count1--;
  //    this.sum1=this.sum1-this.price1;}}
  //    del2(): void{
  //   if (this.count2>0){
  //    this.count2--;
  //    this.sum2=this.sum2-this.price2;}}
  //    del3(): void{
  //   if (this.count3>0){
  //    this.count3--;
  //    this.sum3=this.sum3-this.price3;}}
  //    del4(): void{
  //   if (this.count4>0){
  //    this.count4--;
  //    this.sum4=this.sum4-this.price4;}}
  //
  //   price1: number = 10;
  //   price2: number = 25;
  //   price3: number = 14;
  //   price4: number = 20;
  //
  //   sum1: number =0;
  //   sum2: number =0;
  //   sum3: number =0;
  //   sum4: number =0;

}
