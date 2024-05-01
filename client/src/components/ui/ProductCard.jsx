import Card from "@/components/ui/antd/Card.jsx";

export default function ProductCard({product, ...props}) {
    const { brand, name, src, price, discount } = product;
    return (
        <Card
            {...props}
            cover={<img alt={name + brand} src={src} className="!rounded-product aspect-square hover:scale-105 transition"/>}
            bordered={false}
            hoverable
            rootClassName="card-product"
        >
            <div className="my-[4px] uppercase text-small font-600 text-[#999]">{brand}</div>
            <h3><a href="#" className="text-normal font-600">{name}</a></h3>
            <div className="mt-[4px]">
                {
                    !!!discount
                        ? (<div className="font-600 text-large">${price.toFixed(2)}</div>)
                        : (
                            <div>
                                <span className="font-600 text-large text-primary">${(price - discount).toFixed(2)}</span>
                                <span className="ml-2 line-through text-[#999]">${price.toFixed(2)}</span>
                            </div>
                        )
                }
            </div>
        </Card>
    );
}