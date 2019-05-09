import { Component } from '@angular/core';

@Component({
    selector: 'cap_empleados',
    templateUrl: './empleados.component.html',
    styleUrls: ['./empleados.component.scss']
})

export class empleados {

    empleados: Empleado[];

    constructor() { 
        this.empleados = [];
    }
     
    addEmpleado(nombre: String, apellidos: String, categoria: String, rol: String) {

        let empleado: Empleado;

        empleado = new Empleado(nombre, apellidos, categoria, rol);
        if(this.comprobar_vacio(nombre, apellidos)){
            this.empleados.push(empleado);
        }
    }

    comprobar_vacio(nombre:String, apellidos: String){
        if(nombre == '' || apellidos == ''){
            return false;
        }
        return true;
    }

    isEmpty() {
        return this.empleados.length === 0;
    }

}

class Empleado {

    public nombre: String;
    public apellidos: String;
    public categoria: String;
    public rol: String;

    constructor(nombre: String, apellidos: String, categoria: String, rol: String) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.categoria = categoria;
        this.rol = rol;
    }

    nombre_completo() {
        return this.nombre + ' ' + this.apellidos;
    }

    detalles() {
        return "Categoria: " + this.categoria + ", Rol: " + this.rol;
    }

}
