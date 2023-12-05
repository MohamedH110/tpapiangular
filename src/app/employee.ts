import { EmailValidator } from "@angular/forms";

export class Employee {
public id: number;
public name: string;
public status: string;
public email!: string;
public telephone!: string;

constructor(id:number, name:string, status:string, email:string,telephone:string)
 { this.id = id;
this.name = name;
this.status = status;
this.email=email;
this.telephone=telephone;
}



}