"use client";

import { useCategoriesQuery } from "@/redux/features/services/services.api";

const Categories = ({
  setActive,
  active,
}: {
  setActive: (value: string) => void;
  active: string;
}) => {
  const { data: categories } = useCategoriesQuery("");
  console.log(categories);

  return (
    <div>
      <h1 className="text-2xl bg-primary w-full text-white py-4 text-center">
        Categories
      </h1>
      <div className="mx-6">
        {categories?.result?.map(
          (category: { id: string; categoryName: string }) => (
            <div key={category.id}>
              <div
                onClick={() => setActive(category.id)}
                className={`border-b py-3 group flex justify-between items-center hover:bg-gray-300 hover:cursor-pointer hover:px-8 transition-all duration-300 ease-in-out ${
                  active == category.id && "bg-gray-300 px-8"
                }`}
              >
                <h1 className="text-xl font-medium">{category.categoryName}</h1>

                <h1
                  className={`${
                    active == category.id ? "block" : "hidden"
                  } h-[10px]  group-hover:block w-[10px] rounded-full bg-primary transition-all duration-300 ease-in-out`}
                ></h1>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Categories;
