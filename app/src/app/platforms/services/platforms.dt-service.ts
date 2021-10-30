// Librerías.
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Importaciones de shared.
import { DataTableService } from '@shared/datatables/services/datatable.service';

// Importaciones de environments:
import { environment } from '@environments/environment';

@Injectable()
export class PlatformsDtService extends DataTableService {

    constructor(
        httpClient: HttpClient
    ) {
        super(environment.dataTables.platforms, httpClient);
    }

    /**
     * @name createRecord
     * @description Abre la pantalla para crear un registro.
     */
    public createRecord(): void {
        console.log('Crear nuevo registro.');
        throw new Error('Method not implemented.');
    }

    /**
     * @name openRecord
     * @description Abre la pantalla para visualizar el registro seleccionado.
     * @param id - Identificador del registro a visualizar.
     */
    public openRecord(id: number): void {
        console.log(`Abrir registro '${id}'.`);
        throw new Error('Method not implemented.');
    }

    /**
     * @name openUpdateView
     * @description Abre la pantalla para actualizar el elemento seleccionado.
     * @param id - Identificador del registro a actualizar.
     */
    public openUpdateView(id: number): void {
        console.log(`Actualizar registro '${id}'.`);
        throw new Error('Method not implemented.');
    }

    /**
     * @name deleteRecord
     * @description Elimina el registro seleccionado.
     * @param id - Identificador del registro a borrar.
     */
    public deleteRecord(id: number): Observable<any> {
        console.log(`Eliminar registro '${id}'.`);
        throw new Error('Method not implemented.');
    }
}
