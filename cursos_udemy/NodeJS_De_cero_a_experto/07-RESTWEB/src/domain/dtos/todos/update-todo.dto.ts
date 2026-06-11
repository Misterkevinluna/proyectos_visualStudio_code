



export class UpdateTodoDto {

    private constructor(
        public readonly id: number,
        public readonly text: string,
        public readonly completedAt: Date,
    ){}

    get values() {// metodo que retorna solo los atributos a los que le hicieron o tuvieron cambios
        const returnObj: { [key: string]: any } = {};

        if ( this.text ) returnObj.text = this.text; 
        if ( this.completedAt ) returnObj.completedAt = this.completedAt; 

        return returnObj;
    }

    static create( props: { [key: string]: any } ): [string?, UpdateTodoDto?] {
        
        const { id, text, completedAt } = props;
        let newCompletedAt = completedAt;

        if ( !id || isNaN( Number(id) ) ) {//validamos si el id viene y si no es numero
            return ['id must be a valid number'];
        }

        if( completedAt ) {
            newCompletedAt = new Date( completedAt );//Transaformamos la fecha a tipo Date
            if ( newCompletedAt.toString() === 'Invalid Date' ) {// Lo comparamos con 'Invalid Date' porque ese es el mensaje de error que retorna una variable de tipo Date cuando el dato que le pasan no es una fecha o no cumple el formato
                return ['CompletedAt must be a valid date'];
            }
        }

        return [undefined, new UpdateTodoDto(id, text, newCompletedAt)];
    }
}