import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './services/product';
import { FormsModule } from '@angular/forms';
import { Tasks } from './Component/tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('DemoUI');

  private productService: Product = inject(Product);
  products: any = [];

  form: any = {
    id:0,
    name:''
  }

  isEdit = false;

  ngOnInit(): void {
    this.loadProducts();
    this.load();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((res:any) => {
      this.products = res;
    });
  }

  load(){
    this.productService.getProducts().subscribe((res:any)=> {
      this.products = res;
    })
  }
  add(){
    this.productService.addProduct({name: "Keyboard"}).subscribe(() => {
      this.load();
    })
  }
  put(){
    this.productService.updateProduct(1,{name: 'Laptop Updated'}).subscribe(()=> this.load());
  }
  remove(){
    this.productService.removeProduct(2).subscribe(()=> this.load());
  }


  //Under Form
  submit(){
    if(this.isEdit){
      this.productService.updateProduct(this.form.id,this.form).subscribe(()=> {
        this.load();
        this.resetForm();
      });
    } else{
      this.productService.addProduct(this.form).subscribe(() => {
        this.load();
        this.resetForm();
      });
    }
  }

  edit(p: any) {
    this.isEdit = true;
    this.form = { ...p };
  }

  delete(id: number) {
    this.productService.removeProduct(id)
      .subscribe(() => this.load());
  }

  resetForm() {
    this.isEdit = false;
    this.form = { id: 0, name: '', price: '' };
  }

}
