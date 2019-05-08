import { Component } from '@angular/core';

@Component({
    selector: 'empleados',
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
        
        this.empleados.push(empleado);


    }

    isEmpty() {
        return this.empleados.length === 0;
    }

}

class Empleado {

    nombre: String;
    apellidos: String;
    categoria: String;
    rol: String;

    constructor(nombre: String, apellidos: String, categoria: String, rol: String) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.categoria = categoria;
        this.rol = rol;
    }

    nombreCompleto() {
        return this.nombre + ' ' + this.apellidos;
    }

    mostrarInfo() {
        return 'Categoria: ' + this.categoria + ', Rol: ' + this.rol;
    }

}
