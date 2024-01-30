import Banners from "../components/Banners";
import Categories from "../components/Categories";
import HomeItem from "../components/HomeItem";
import {useSelector} from "react-redux";

export default function Home() {
  const items = useSelector((store) => store.items);
  return (
    <main>
        <Banners />
        <div className="items-container">
          {items.map((item)=>(
            <HomeItem key={item.id} item={item} />
            ))}
        </div>
        <Categories />
     </main>
  )
}
