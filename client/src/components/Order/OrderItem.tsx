import { List, Trash2 } from 'lucide-react';
import { HTag, PTag } from '../../common';
import { FC } from 'react';
import { IOrder } from '../../models/IOrder';

interface IProps {
  item: IOrder;
}

const OrderItem: FC<IProps> = ({ item }) => {
  return (
    <li className="order-item mb-3 d-flex justify-content-between align-items-center block">
      <HTag tag="h3" variant="gray" line={true}>
        {item.title}
      </HTag>
      <div className="d-flex align-items-center">
        <button className="order-item__menu">
          <List strokeWidth={4} />
        </button>
        <div>
          <HTag tag="h3" variant="gray">
            23
          </HTag>
          <PTag>Продукта</PTag>
        </div>
      </div>
      <div>
        <PTag size="sm" className="text-center">
          07 / 23
        </PTag>
        <PTag size="lg" className="text-center" variant="dark">
          01 / 07 / 2023
        </PTag>
      </div>
      <div>
        <PTag size="sm" className="text-center">
          0 USD
        </PTag>
        <PTag size="lg" className="text-center" variant="dark">
          0 UAH
        </PTag>
      </div>
      <button className="order-item__remove">
        <Trash2 />
      </button>
    </li>
  );
};

export default OrderItem;
