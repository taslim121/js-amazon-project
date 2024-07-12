import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
export function getDeliveryOption(deliveryOptionId){
    let deliveryOptions;
    deliveryOption.forEach(option =>{
        if(option.id === deliveryOptionId){
            deliveryOptions = option;
        }
    });
    return deliveryOptions;
}
function isWeekend(date) {
    const dayOfWeek = date.format('dddd');
    return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
  }
export function calculateDeliveryDate(deliveryOption){
    // const today = dayjs();
    // let deliveryDate = today.add(deliveryOptions.deliveryDays,'days');
    // if(deliveryDate.format('dddd') === 'Saturday'){
    //     deliveryDate = deliveryDate.add(2,'days');
    // }
    // else if (deliveryDate.format('dddd') === 'Sunday'){
    //     deliveryDate  = deliveryDate.add(1,'days');
    // }
    let remainingDays = deliveryOption.deliveryDays;
        let deliveryDate = dayjs();

        while (remainingDays > 0) {
            deliveryDate = deliveryDate.add(1, 'day');

            if (!isWeekend(deliveryDate)) {
            remainingDays--;
            // This is a shortcut for:
            // remainingDays = remainingDays - 1;
            }
        }
    const dateString = deliveryDate.format('dddd, MMMM D');
    return dateString;
}
export const deliveryOption = [
    {
        id : '1' ,
        deliveryDays: 7,
        priceCents: 0
    },
    {
        id : '2' ,
        deliveryDays: 3,
        priceCents: 499
    },
    {
        id : '3' ,
        deliveryDays: 1,
        priceCents: 999
    }
];
