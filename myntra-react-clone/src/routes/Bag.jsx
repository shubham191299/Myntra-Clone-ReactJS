import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

export default function Bag() {
  const bag = useSelector(store=>store.bag);
  const items = useSelector(store=>store.items);
  const finalItems = items.filter((item)=>{
    const foundItem = bag.indexOf(item.id);
    return foundItem>=0;
  });
  console.log();
  return (
      <main>
          <div className="bag-page">
              <div className="bag-items-container">
                {finalItems.map((item)=> <BagItem key={item.id} item={item}/>)}
              </div>
              <BagSummary/>
          </div>
      </main>
  )
}
