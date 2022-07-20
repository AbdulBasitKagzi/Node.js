const { parse } = require("csv-parse");
const fs = require("fs");

const result = [];

function ishabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (ishabitablePlanet(data)) {
      result.push(data);
    }
  })
  .on("error", (err) => console.log("error", err))
  .on("end", () => {
    result.map((planet) => {
      return console.log(planet["kepler_name"]);
    });
    console.log("Total planets", result.length);
  });
