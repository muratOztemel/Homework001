const customers = [
    { id: 1, name: "Ahmet", age: 32, city: "Ankara", orders: [100, 200, 150] },
    { id: 2, name: "Ayşe", age: 27, city: "İstanbul", orders: [300, 50] },
    { id: 3, name: "Mehmet", age: 40, city: "İzmir", orders: [500, 100, 200] },
    { id: 4, name: "Fatma", age: 35, city: "Ankara", orders: [300] },
    { id: 5, name: "Zeynep", age: 28, city: "Bursa", orders: [] }
];

// Soru: İstanbul'da yaşayan müşterilerin isimlerini bir dizi olarak döndür. ["Ayşe"]

const findCustomers = customers.filter((customer) => customer.city === "İstanbul").map((customer)=> customer.name);

//console.log(findCustomers);

// Soru: Siparişleri toplamda 300 TL’den fazla olan ilk müşterinin adını döndür.

const ordersFirstCustomer = customers.find((customer)=> {
    let ordersTotal = customer.orders.reduce((a,b)=> a + b ,0);
    if(ordersTotal > 300 ){
        return customer.name;
    }
}).name;
//console.log(ordersFirstCustomer);

// Soru: Şehir bazında toplam sipariş miktarlarını döndür.

const cityTotalOrders = customers.reduce((acc, customer) => {
acc[customer.city] = (acc[customer.city] || 0 ) + customer.orders.reduce((a,b)=> a + b ,0);
return acc;
}, {});

//console.log(cityTotalOrders);

//Soru: Her müşterinin toplam sipariş miktarını ve yaşını bir string olarak şu formatta döndür: Ahmet (32): 450 TL

const customerOrdersAndAge = customers.map((customer)=> { 
    const ordersTotal = customer.orders.reduce((a,b)=> a + b ,0);
    return `${customer.name} (${customer.age}): ${ordersTotal} TL`;
});

//console.log(customerOrdersAndAge);

// Soru: Tüm müşterilerin siparişlerini en yüksekten en düşüğe sıralayıp tek bir dizi olarak döndür.

const allOrdersDesc = customers.map((customer)=> {
    return customer.orders.sort((a, b)=> b - a);
});

console.log(allOrdersDesc);