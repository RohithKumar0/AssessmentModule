export class User{
    constructor(
        public name:string,
        public password:string,
        public email:string,
        public admin:boolean,
        public location: string,
        public number: string
    ){}
}
