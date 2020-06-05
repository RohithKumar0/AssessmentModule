import { Time } from '@angular/common';

export class Assignment{
    constructor(
        public id:number,
	    public name: string,
	    public user_id:number,
	    public  expire_time:Time,
		public  duration:Time,
		public topic:string
    ){}
}
