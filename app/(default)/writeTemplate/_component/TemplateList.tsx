// type Section = {
//   properties: { title: string };
//   children?: Section[];
// };

import { Check } from "lucide-react";
import { templateStructure } from "@/config/template";

const TemplateList = () => {
  return (
    <div className="flex flex-col gap-3">
      {Object.entries(templateStructure).map(
        ([key, { title, description }]) => (
          <div key={key}>
            <div className="flex gap-1 items-center text-green-dark">
              <Check size={20} />
              <span className="text-lg font-bold">{`${title} (${key})`}</span>
            </div>
            <ul className="pl-6">
              {description.map((item, idx) => (
                <li className="text-gray-dark text-sm" key={idx}>
                  {item.split("-")?.[0]}
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default TemplateList;
