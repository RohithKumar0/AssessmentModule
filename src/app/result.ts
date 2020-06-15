export class result{
    constructor(

        public assignment_id:number,
        public mcq:number,
        public quiz:number,
        public project:number,
        public assignment:number,
        public total:number 
    ){}
}

export class split{
    constructor(

        public build:number,
        public process:number,
        public testing:number
    ){}
}