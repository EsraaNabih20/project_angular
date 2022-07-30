import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value: string): string {
    
    let text = value.split("").map((item , index)=>{

      if(index%4 == 0)

        return  `- ${item}`;
        
      else

      return `${item}`;
    })
    return text.join("");
  }

}
