const goods = [
    {title: 'Shirt', price: 150},
    {title: 'Socks', price: 50},
    {title: 'Jacket', price: 350},
    {title: 'Shoes', price: 250}
];


class GoodsItem {
    constructor({title = '', price = 0}){
        this.title = title;
        this.price = price;
    }
    render () {
        return `
        <div class ="goods-item">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        </div>
        `;
    }
}

class GoodsList {
    fetchData(){
        this.list = goods;
    }
    SummGoods(){
        const TotalPrice = goods.map(item => item.price).reduce((prev, curr) => 
        prev+curr, 0);
        console.log(TotalPrice);
        document.querySelector('.count').onclick = CountPrice;
        function CountPrice() {
            document.querySelector('.total-price').innerHTML = TotalPrice;
        }
    }
    
    render() {
        const goodsList = this.list.map(item => {
            const goodsItem = new GoodsItem(item);
            return goodsItem.render()
        }).join('');
        document.querySelector('.goods-list').innerHTML = goodsList;
    }
}

        
const goodsList = new GoodsList(goods);
goodsList.fetchData();
goodsList.SummGoods();
goodsList.render();

