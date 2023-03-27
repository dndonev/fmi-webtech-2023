

const bankomat = ((number) => {
    let balance = number;
    function teglene(money){
        balance -= money;
    }
    function depozit(money){
        balance += money;
    }
    function print(){
        console.log(balance);
    }
    return {teglene, depozit, print}
}) (1000);

// const test = bankomat(100);
// test.print();
// test.teglene(20);
// test.print();
// test.teglene(20);
// test.print();
// test.teglene(20);
// test.print();
// test.depozit(40);
// test.print();
// test.depozit(40);
// test.print();
bankomat.print();
bankomat.teglene(100);
bankomat.print();
bankomat.teglene(100);
bankomat.print();
bankomat.print();
bankomat.teglene(100);
bankomat.print();
bankomat.teglene(100);
bankomat.print();
bankomat.depozit(10013131);
bankomat.print();