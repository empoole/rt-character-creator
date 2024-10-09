import { promises as fs } from "fs";
import PathNode from "@/components/PathNode";
import { LevelData } from "@/types/LevelData";

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/src/data/paths.json",
    "utf8"
  );
  const levels = JSON.parse(file);

  return (
    <div className="w-9/12 text-center m-auto">
      {levels.map((level: LevelData, i: number) => (
        <section key={i} className="my-4">
          <h3 className="text-center font-bold">{level.name}</h3>
          <div className="flex justify-around content-center items-center">
            {level.options.map((node, i) => (
              <PathNode key={i} name={node.name} level={level.level} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
