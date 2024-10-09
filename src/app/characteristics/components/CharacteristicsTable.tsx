"use client";

import rollStat from "@/lib/rollStat";
import { StatBlock } from "@/types/StatBlock";
import { useState } from "react";

export default function CharacteristicsTable() {
  const [stats, setStats] = useState(new StatBlock());

  const rollAll = () => {
    const rolls = new StatBlock();
    Object.keys(stats).forEach((stat) => {
      rolls[stat as keyof StatBlock] = rollStat();
    });

    setStats({ ...rolls });
  };

  return (
    <>
      <table className="table-fixed border-collapse border border-slate-400 mb-4">
        <thead>
          <tr>
            <th colSpan={3} className="p-4">
              Characteristics
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(stats).map((stat, i) => {
            const labelText = stat.replace("_", " ");

            return (
              <tr key={i}>
                <td className="capitalize border border-slate-400 p-2">
                  {labelText}
                </td>
                <td className="border border-slate-400 p-2">
                  {stats[stat as keyof StatBlock]}
                </td>
                <td className="border border-slate-400 p-2">
                  <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                    onClick={() => setStats({ ...stats, [stat]: rollStat() })}
                  >
                    Roll
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button
        className="btn btn-blue bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => rollAll()}
      >
        Roll All
      </button>
    </>
  );
}
