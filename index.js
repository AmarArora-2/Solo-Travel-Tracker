import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Amar@Postgre25",
  port: 5432
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


async function checkVisited() {
  const result = await db.query("SELECT country_code from visited_countries");
  let countryData = [];
  result.rows.forEach(country => {
      countryData.push(country.country_code);
      console.log(country.country_code);
    });
  return countryData;
}


app.get("/", async (req, res) => {
  try{
    const countries = await checkVisited();
    res.render("index.ejs", {countries: countries, total: countries.length});
  }catch (error) {
    console.error("Error fetching country codes:", error);
  }
});

app.post("/add", async (req, res) => {
    const userEneterdName = req.body.country;

    try{
      // const countryName = await db.query("SELECT country_name FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%'", [userEneterdName.toLowerCase()]);
      const countryCode = await db.query("SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%'", [userEneterdName.toLowerCase()]);

      try{
        await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCode.rows[0].country_code]);    
        res.redirect("/"); 
      }catch(err){  
        console.log(err);
        const countries = await checkVisited();
        res.render("index.ejs", {countries: countries, total: countries.length, error: "Country has already been added, Try Again!"});
        }
    }catch(err){
      console.log(err);
      const countries = await checkVisited();
      res.render("index.ejs", {countries: countries, total: countries.length, error: "Country Does not Exist, Try Again!"});
    }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});