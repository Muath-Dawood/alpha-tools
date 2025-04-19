import { categories } from "@/lib/data/categories";
import Animate from "./Animate";

const Categories = () => {
  const { title, list } = categories();

  return (
    <div>
      <h3 className="text-xl font-semibold leading-5">{title}</h3>

      <div className="flex-center mt-10 flex-col gap-4 text-[0.9375rem] font-medium leading-[1.40625rem]">
        {list.map((category, index) => (
          <Animate
            initialOpacity={0}
            finalOpcaity={1}
            fromY={50}
            toY={0}
            once={true}
            className="flex-center w-full justify-between border-b-[0.0625rem] border-dashed border-[#00AAA1] pb-3"
            delay={0.1 * index}
            duration={0.8}
          >
            <div>{category.name}</div>
            <div>{category.count}</div>
          </Animate>
        ))}
      </div>
    </div>
  );
};

export default Categories;
