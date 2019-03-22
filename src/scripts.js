export class DayPicker{
  constructor(){
    this.dateObject;
    this.dayArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  }

  stringToObject(string){
    const parseDate= Date.parse(string);
    const dateObj= new Date(parseDate);
    this.dateObject=dateObj;

  }

  findDay(){
    const numberDay=this.dateObject.getDay();
    const day=this.dayArray[numberDay+1];
    return day;
  }

}
