// Librerías.
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Importaciones de environments:
import { environment } from '@environments/environment';

export abstract class DataTableService {

    constructor(
        protected dataKey: string,
        protected httpClient: HttpClient
    ) { }

    /**
     * @name recoverData
     * @description Llama al servicio correspondiente para recuperar los datos que se mostrarán en la tabla.
     * @returns Retorna los datos para mostrar en la tabla.
     */
    public recoverData(filters: any, offset: number, limit: number, sort: any): Observable<any> {
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        let body = {
            dataKey: this.dataKey,
            data: filters,
            sort: sort,
            offset: offset,
            limit: limit
        };

        return this.httpClient.post<any>(
            environment.api.baseUrl + environment.api.actions.dataView,
            body,
            { headers }
        );
    }

    /**
     * @name recoverDataHeaders
     * @description Recupera las cabeceras que se mostrarán en la tabla.
     * @returns Retorna las cabecerás para mostrar en la tabla.
     */
    public recoverDataHeaders(): Observable<any[]> {
        return this.httpClient.get<any[]>(
            environment.api.baseUrl + environment.api.actions.dataHeader,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                params: {
                    datatable: this.dataKey
                }
            });
    }

    /**
     * @name recoverFilters
     * @description Recupera los filtros que se mostrarán en la tabla.
     * @returns Retorna los filtros para mostrar en la tabla.
     */
    public recoverFilters(): Observable<any> {
        return this.httpClient.get<any[]>(
            environment.api.baseUrl + environment.api.actions.dataFilter,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                params: {
                    datatable: this.dataKey
                }
            });
    }

    /**
     * @name createRecord
     * @description Abre la pantalla para crear un registro.
     */
    public abstract createRecord(): void;

    /**
     * @name openRecord
     * @description Abre la pantalla para visualizar el registro seleccionado.
     * @param id - Identificador del registro a visualizar.
     */
    public abstract openRecord(id: number): void;

    /**
     * @name openUpdateView
     * @description Abre la pantalla para actualizar el elemento seleccionado.
     * @param id - Identificador del registro a actualizar.
     */
    public abstract openUpdateView(id: number): void;

    /**
     * @name deleteRecord
     * @description Elimina el registro seleccionado.
     * @param id - Identificador del registro a borrar.
     */
    public abstract deleteRecord(id: number): Observable<any>;
}
